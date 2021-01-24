import x from './x'

console.log(x)

import './x.scss'

import img from './assets/1.png';

console.log(img)

const div = document.getElementById('app')
div.innerHTML = `<img src=${img}>`

import './x.less'


const button = document.createElement('button')
button.innerText = 'Lazy Loader'
button.onclick = () => {
    const promise = import('./lazy')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {
        console.log('load error')
    })
}

div.appendChild(button)

