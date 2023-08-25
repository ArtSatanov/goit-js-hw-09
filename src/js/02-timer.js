import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
   picker: document.querySelector('#datetime-picker'),
   days: document.querySelector('span[data-days]'),
   hours: document.querySelector('span[data-hours]'),
   minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
   start: document.querySelector('button[data-start]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    
    if (selectedDates[0] < options.defaultDate) {
      Notiflix.Notify.failure("Please choose a date in the future");
      refs.start.disabled = true;
    } else {
      Notiflix.Notify.success("All is ok!");
      refs.start.disabled = false;
      refs.start.addEventListener('click', () => {
        refs.start.disabled = true;
        let timerId = setInterval(() => {
        const currentDate = new Date();
        let countdownPoint = selectedDates[0] - currentDate;
        if (countdownPoint > 0) {
          refs.days.textContent = addLeadingZero(convertMs(countdownPoint).days);
          refs.hours.textContent = addLeadingZero(convertMs(countdownPoint).hours);
          refs.minutes.textContent = addLeadingZero(convertMs(countdownPoint).minutes);
          refs.seconds.textContent = addLeadingZero(convertMs(countdownPoint).seconds);
        } else {
          clearInterval(timerId);
          refs.days.textContent = "00";
          refs.hours.textContent = "00";
          refs.minutes.textContent = "00";
          refs.seconds.textContent = "00";
          refs.start.disabled = false;
        }
  }, 1000);
      });
    };
  },
};


flatpickr(refs.picker, options);


function addLeadingZero (value) {
  return value.toString().padStart(2, "0");
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
