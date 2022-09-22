// import _ from "lodash";
import { cube } from "./math.js";

function component() {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }
  // const element = document.createElement('div');
  const element = document.createElement('pre');
  // element.innerHTML = _.join(['Hello', 'webpack', ' ']);
  const s = document.getElementsByTagName("body").length;
  element.innerHTML = [
    "Hello, webpack!",
    "5 cubes is equal to " + cube(s)
  ].join("\n\n");

  return element;
}

document.body.appendChild(component());