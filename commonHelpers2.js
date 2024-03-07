import"./assets/styles-78bd03a9.js";const t=document.querySelector(".form");t.insertAdjacentHTML("afterbegin",`<form class="form" autocomplete="off">
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
    `);document.addEventListener("DOMContentLoaded",function(){const o=t.querySelector('input[name="email"]'),l=t.querySelector('textarea[name="message"]'),s="feedback-form-state";function m(){const e={email:o.value.trim(),message:l.value.trim()};localStorage.setItem(s,JSON.stringify(e))}function r(){const e=localStorage.getItem(s);if(e){const a=JSON.parse(e);o.value=a.email,l.value=a.message}}r(),t.addEventListener("input",function(){m()}),t.addEventListener("submit",function(e){e.preventDefault();const a=o.value.trim(),n=l.value.trim();a!==""&&n!==""?(console.log({email:a,message:n}),localStorage.removeItem(s),o.value="",l.value=""):alert("Будь ласка, заповніть обидва поля форми.")})});
//# sourceMappingURL=commonHelpers2.js.map
