// require("babel-polyfill"); // [Do not use this option if source code contains ES module import(s)](https://github.com/webpack-contrib/imports-loader#wrapper)

const { file, parse } = require('./globals.js');

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack', ' ']);

  // imports-loader
  console.log(this);
  // this.alert("Hmmm, this probably isn't a great idea...");

  // exports-loader
  console.log(file)
  console.log(parse())

  return element;
}

document.body.appendChild(component());