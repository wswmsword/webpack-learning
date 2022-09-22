import _ from "lodash";
import printMe from "./print.js";
const cache = {};

function component() {
  const element = document.createElement('div');
  const btn = document.createElement("button");
  element.innerHTML = _.join(['Hello', 'webpack', ' ']);

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  // const compName = "login";
  const comp = require.context("./comp/", false, /\.js$/);
  importAll(comp);
  const { default: Head } = comp("./head.js");
  Head();

  return element;
}



function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
  console.log(cache)
}

document.body.appendChild(component());