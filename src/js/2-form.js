const formPage = document.querySelector('.form');
formPage.insertAdjacentHTML(
  'afterbegin',
  `<form class="form" autocomplete="off">
        <label class="label">
          Email
          <input class="email" type="email" name="email" autofocus />
        </label>
        <label class="label">
          Message
          <textarea
            class="message"
            name="message"
            rows="8"
          ></textarea>
        </label>
        <button class="button" type="submit">Submit</button>
      </form>
    `
);

function saveFormState() {
  const email = document.querySelector('.email').value;
  const message = document.querySelector('.message').value;
  const formData = { email, message };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function clearFormState() {
  localStorage.removeItem('feedback-form-state');
}

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.querySelector('.email').value;
  const message = document.querySelector('.message').value;
  console.log({ email, message });
  clearFormState();
  document.querySelector('.email').value = '';
  document.querySelector('.message').value = '';
});

// Виклик функції для збереження даних форми в локальне сховище при відправці
document.querySelector('.form').addEventListener('submit', saveFormState);
