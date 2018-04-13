import clickMe from './js/print'

import './css/index.css'

console.log(12321);

var btn = document.createElement('button');
btn.innerHTML = 'Click me and check the console!';
btn.onclick = clickMe;
document.body.appendChild(btn);