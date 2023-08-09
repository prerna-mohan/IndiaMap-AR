import "./style.css";

let hoisted = false;
let sound = new Audio('bgm.mp3');
const modelViewer = document.getElementById('mv');
const annotation = modelViewer.querySelector('.annotation');
const info = modelViewer.querySelector('.info')
const thanks = modelViewer.querySelector('.thanks')

modelViewer.addEventListener('model-visibility', function() {
    // if (iOS()) {
    //     annotation.style.display = 'block'
    // }
    hoisted = true;
    modelViewer.play({ repetitions: 1 });
    sound.loop = true;
    sound.play();
    setTimeout(() => {
        thanks.style.display = 'block'
    },3500)
})

// modelViewer.addEventListener('ar-status', (event) => {
//     if (event.detail.status == 'session-started' && !hoisted) {
//         setTimeout(() => {
//             info.style.display = 'block'
//         }, 2000)
//         setTimeout(() => {
//             annotation.style.display = 'block'
//         }, 7000)
//     }
// })

modelViewer.addEventListener('load', () => {
    console.log('model loaded')
})

annotation.addEventListener('click', (e) => {
    console.log('clicked', e.target)
})