import x from './x'
console.log(x)

import './x.scss'

import img from './assets/1.png';
console.log(img)

const div = document.getElementById('app')
div.innerHTML = `<img src=${img}>`

import './x.less'
