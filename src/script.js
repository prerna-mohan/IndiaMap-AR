import "./style.css";

let hoisted = false;
let sound = new Audio('bgm.mp3');
const modelViewer = document.getElementById('mv');
const annotation = modelViewer.querySelector('.annotation');
const info = modelViewer.querySelector('.info')
const thanks = modelViewer.querySelector('.thanks')

modelViewer.addEventListener('model-visibility', function () {
    if (iOS()) {
        startAnimations();
    }
    sound.play().catch(e => {
        window.addEventListener('click', () => {
           sound.play()
        })
     })
})

modelViewer.addEventListener('ar-status', (event) => {
    if (event.detail.status == 'session-started' && !hoisted) {
        startAnimations()
    }
})

function startAnimations(){
    hoisted = true;
    modelViewer.play({ repetitions: 1 });
    // sound.loop = true;
    // sound.play().catch(e => {
    //     window.addEventListener('click', () => {
    //        sound.play()
    //     })
    //  })
    setTimeout(() => {
        thanks.style.display = 'block'
    }, 19000)
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