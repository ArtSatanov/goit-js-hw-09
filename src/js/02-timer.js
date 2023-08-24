import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


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
      alert("Please choose a date in the future");
      refs.start.disabled = true;
    } else {
      refs.start.disabled = false;     
    };
    refs.start.addEventListener('click', onClick(selectedDates[0], options.defaultDate));
  },
};


flatpickr(refs.picker, options);

function onClick(selctedDate, currentDate) {
  let timerId = null;
  let countdownPoint = selctedDate - currentDate;
  if (countdownPoint > 0 ) {
  setInterval(() => {
    console.log(countdownPoint);
    convertMs(countdownPoint);
    refs.days.textContent = countdownPoint.days;
    refs.hours.textContent = countdownPoint.hours;
    refs.minutes.textContent = countdownPoint.minutes;
    refs.seconds.textContent = countdownPoint.seconds;
  }, 1000);
  } else {
    clearInterval(timerId);
  }
}

function addLeadingZero (value) {
  return value.padStart(2, "0");
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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


// addLeadingZero(value) > padStart()