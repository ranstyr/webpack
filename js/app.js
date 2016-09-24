document.write("  welcome to app.js 8888");

console.log("app loaded");

var img = document.createElement('img');
img.style.height = '25%';
img.style.width = '25%';
img.src = require('../images/webpack_logo.png');

document.getElementById('img_container').appendChild(img);

require('../css/app.css');