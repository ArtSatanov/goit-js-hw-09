const refs  = {
   start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
}

console.log(refs.body);

let timerId = null; 

refs.start.addEventListener('click', () => {
  timerId = setInterval(() => {refs.body.style.backgroundColor = getRandomHexColor()}, 1000);
  refs.start.disabled = true;
  refs.stop.disabled = false;
});

refs.stop.addEventListener('click', () => {
  clearInterval(timerId);
  refs.start.disabled = false;
  refs.stop.disabled = true;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


