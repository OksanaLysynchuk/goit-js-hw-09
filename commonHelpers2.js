import"./assets/styles-78bd03a9.js";const o=document.querySelector(".form");o.insertAdjacentHTML("afterbegin",`<form class="form" autocomplete="off">
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
    `);function l(){const e=document.querySelector(".email").value,t=document.querySelector(".message").value,a={email:e,message:t};localStorage.setItem("feedback-form-state",JSON.stringify(a))}function m(){localStorage.removeItem("feedback-form-state")}document.querySelector(".form").addEventListener("submit",function(e){e.preventDefault();const t=document.querySelector(".email").value,a=document.querySelector(".message").value;console.log({email:t,message:a}),m(),document.querySelector(".email").value="",document.querySelector(".message").value=""});document.querySelector(".form").addEventListener("submit",l);
//# sourceMappingURL=commonHelpers2.js.map
