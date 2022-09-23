import _ from "lodash";
import printMe from "./print.js";
import mainImage from "./images/edgerunners.png";
import icoImage from "./images/favicon.ico";
import exampleText from "./example.txt";
import txt4b from "./example2.md";
import txt5b from "./example3.md";

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

  const txt = document.createElement("p");
  txt.innerHTML = exampleText;

  element.appendChild(txt);

  const txr2 = document.createElement("P");
  txt.innerHTML = txt4b + " and " + txt5b;

  element.appendChild(txr2);

  return element;
}

document.body.appendChild(component());