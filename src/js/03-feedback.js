import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
console.log(formEl);

class InfoState {
  state = [];
  add({ email, message }) {
    this.state.push({
      email,
      message,
    });
    this.saveState();
  }
  // saveState() {
  //   throttle(() => {
  //     localStorage.setItem('feedback-form-state', JSON.stringify(this.state));
  //   }, 500);
  // }
  saveState() {
    localStorage.setItem('feedback-form-state', JSON.stringify(this.state));
  }
  loadState() {
    const stateLoad = localStorage.getItem('feedback-form-state') || '';
  }
}
const infoState = new InfoState();
formEl.addEventListener('submit', saveInfo);
function saveInfo(event) {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const message = event.target.elements.message.value;

  infoState.add({ email, message });
  event.currentTarget.reset();
}
