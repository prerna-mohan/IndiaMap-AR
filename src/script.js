import "./style.css";
import {Howl, Howler} from 'howler';

let hoisted = false;
let sound = new Howl({
    src: ['bgm.mp3'],
    loop: true
  });
const modelViewer = document.getElementById('mv');
const annotation = modelViewer.querySelector('.annotation');
const text1 = modelViewer.querySelector('.text1');
const text2 = modelViewer.querySelector('.text2');

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
        text1.style.display = 'block'
    }, 2000)
    setTimeout(() => {
        text1.textContent = "The incidence of uncontrolled diabetes is high among the Indian population despite prevailing anti-diabetic therapy"
        text1.style.fontStyle = 'italic'
    }, 9000)
    setTimeout(() => {
        text1.style.display = 'none'
        annotation.style.display = 'block'
        text2.style.display = 'block';
    }, 33000)
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