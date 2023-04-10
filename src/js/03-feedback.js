import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const btnEl = document.querySelector("button[type ='submit']");
const inputEl = document.querySelector("input[name ='email']");
const textEl = document.querySelector("textarea[name ='message']");

const data = {
  email: '',
  message: '',
};
const saveMessage = event => {
  event.preventDefault();
  data[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

const updateOutput = () => {
  let obj = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (obj) {
    inputEl.value = obj.email;
    textEl.value = obj.message;
  } else {
    formEl.reset();
  }
};
const clearData = () => {
  localStorage.clear();
};
updateOutput();
formEl.addEventListener('input', throttle(saveMessage, 500));
btnEl.addEventListener('click', clearData);

// LUB z uzyciem po staremu function

// const data = {
//   email: '',
//   message: '',
// };

// updateOutput();
// formEl.addEventListener('input', saveMessage);
// btnEl.addEventListener('click', clearData);
// function saveMessage(event) {
//   event.preventDefault();
//   data[event.target.name] = event.target.value;
//   localStorage.setItem('feedback-form-state', JSON.stringify(data));
// }

// function updateOutput() {
//   let obj = JSON.parse(localStorage.getItem('feedback-form-state'));
//   if (obj) {
//     inputEl.value = obj.email;
//     textEl.value = obj.message;
//   } else {
//     formEl.reset();
//   }
// }
// function clearData() {
//   localStorage.clear();
// }
