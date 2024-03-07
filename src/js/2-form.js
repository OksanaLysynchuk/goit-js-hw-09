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

document.addEventListener('DOMContentLoaded', function () {
  const emailInput = formPage.querySelector('input[name="email"]');
  const messageInput = formPage.querySelector('textarea[name="message"]');
  const localStorageKey = 'feedback-form-state';

  function saveToLocalStorage() {
    const formData = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }

  function loadFromLocalStorage() {
    const savedData = localStorage.getItem(localStorageKey);
    if (savedData) {
      const formData = JSON.parse(savedData);
      emailInput.value = formData.email;
      messageInput.value = formData.message;
    }
  }

  loadFromLocalStorage();

  formPage.addEventListener('input', function () {
    saveToLocalStorage();
  });

  formPage.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (email !== '' && message !== '') {
      console.log({ email, message });

      localStorage.removeItem(localStorageKey);

      emailInput.value = '';
      messageInput.value = '';
    } else {
      alert('Будь ласка, заповніть обидва поля форми.');
    }
  });
});
