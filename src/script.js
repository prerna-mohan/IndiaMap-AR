import "./style.css";
import {Howl, Howler} from 'howler';

let hoisted = false;
let sound = new Howl({
    src: ['bgm.mp3'],
    loop: true
  });
const modelViewer = document.getElementById('mv');
const annotation = modelViewer.querySelector('.annotation');
const thanks = modelViewer.querySelector('.thanks')

modelViewer.addEventListener('model-visibility', function () {
    if (iOS()) {
        startAnimations();
    }
})

modelViewer.addEventListener('ar-status', (event) => {
    if (event.detail.status == 'session-started' && !hoisted) {
        startAnimations()
    }
})

function startAnimations(){
    hoisted = true;
    modelViewer.play({ repetitions: 1 });
    sound.play();
    setTimeout(() => {
        thanks.style.display = 'block'
    }, 7000)
    setTimeout(() => {
        annotation.style.display = 'block'
    }, 23000)
}

modelViewer.addEventListener('load', () => {
    console.log('model loaded')
})

annotation.addEventListener('click', (e) => {
    console.log('clicked', e.target)
})

function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }