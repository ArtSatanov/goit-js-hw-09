import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  firstDelay: document.querySelector('input[name="delay"]'),
  stepDelay: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  submit: document.querySelector('button[type="submit"]'),
};

refs.submit.addEventListener('click', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const firstDelay = Number(refs.firstDelay.value);
  const amount = Number(refs.amount.value);
  const step = Number(refs.stepDelay.value);

  for (let i = 1; i <= amount; i += 1) {
    let delayMath = firstDelay + (step * (i - 1));
    createPromise(i, delayMath);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const resultPromise = new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        res({position, delay});
      } else {
        rej({position, delay});
      }
    });
  }, delay);
  resultPromise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
