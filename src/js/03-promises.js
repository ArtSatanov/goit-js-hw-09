import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  firstDelay: document.querySelector('input[name="delay"]'),
  stepDelay: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  submit: document.querySelector('button[type="submit"]'),
};

refs.submit.addEventListener('click' , onSubmit())


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    
  } else {
    // Reject
  }
};


function onSubmit(firstDelay, stepDelay, amount) {
  const promArray = [];
  for (let i = 1; i <= amount, i += 1) {
    
  //  promArray.push(createPromise(i,))
  }
  
}

