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

function filledForm() {
  const storedData = localStorage.getItem('feedback-form-state');

  if (storedData) {
    const formData = JSON.parse(storedData);

    document.querySelector('.email').value = formData.email;
    document.querySelector('.message').value = formData.message;
  } else {
    document.querySelector('.email').value = '';
    document.querySelector('.message').value = '';
  }
}

formPage.addEventListener('input', function (event) {
  if (event.target.matches('.email, .message')) {
    const email = document.querySelector('.email').value;
    const message = document.querySelector('.message').value;

    const formData = { email, message };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});

formPage.addEventListener('submit', function (event) {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');

  document.querySelector('.email').value = '';
  document.querySelector('.message').value = '';
});
