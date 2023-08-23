const refs  = {
   start: document.querySelector('button[data-start]'),
   stop: document.querySelector('button[data-stop]'),
}

console.log(refs.start, refs.stop);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


