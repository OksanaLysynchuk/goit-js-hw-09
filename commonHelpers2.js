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
    `);t.addEventListener("input",function(e){if(e.target.matches(".email, .message")){const a=document.querySelector(".email").value,s=document.querySelector(".message").value,l={email:a,message:s};localStorage.setItem("feedback-form-state",JSON.stringify(l))}});t.addEventListener("submit",function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),document.querySelector(".email").value="",document.querySelector(".message").value=""});
//# sourceMappingURL=commonHelpers2.js.map
