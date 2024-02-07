const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const { email, message } = form.elements;
const formData = JSON.parse(localStorage.getItem(localStorageKey));
updateForm();

form.addEventListener('input', evt => {
  const data = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(data));
});

function updateForm() {
  if (formData) {
    email.value = formData.email;
    message.value = formData.message;
  }
}

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (email.value === '' || message.value === '') {
    return;
  }
  console.log({
    email: email.value,
    message: message.value,
  });
  localStorage.removeItem(localStorageKey);
  form.reset();
});
