import _ from "lodash";
import printMe from "./print.js";
import mainImage from "./images/edgerunners.png";
import icoImage from "./images/favicon.ico";

function component() {
  const element = document.createElement('div');
  const btn = document.createElement("button");
  element.innerHTML = _.join(['Hello', 'webpack', ' ']);  

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  const img = document.createElement("img");
  img.src = mainImage;
  element.appendChild(img);

  element.style.background = `url(${icoImage})`;

  return element;
}

document.body.appendChild(component());