document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("formSuccess");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // limpa mensagens antigas
    form.querySelectorAll(".error-msg").forEach((span) => (span.textContent = ""));

    // valida cada campo obrigatório
    form.querySelectorAll("input, textarea").forEach((field) => {
      if (!field.checkValidity()) {
        isValid = false;
        const span = field.parentElement.querySelector(".error-msg");
        span.textContent = field.validationMessage;
      }
    });

    if (isValid) {
      successMsg.hidden = false;
      form.reset();
    } else {
      successMsg.hidden = true;
    }
  });
});
