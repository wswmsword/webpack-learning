function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack', ' ']);

  console.log(this);
  this.alert("Hmmm, this probably isn't a great idea...");

  return element;
}

document.body.appendChild(component());