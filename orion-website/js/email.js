document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("8E6x0sspK6sS5bWMN"); // your public key

  const form = document.getElementById("contactForm");
  const status = document.getElementById("form-status");
  const sendBtn = document.getElementById("sendBtn");
  const btnText = sendBtn.querySelector(".btn-text");
  const loader = sendBtn.querySelector(".loader");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Disable button & show loader
    sendBtn.disabled = true;
    btnText.textContent = "Sending...";
    loader.style.display = "inline-block";
    status.textContent = "";

    emailjs.sendForm(
      "service_zwteej4",
      "template_bv7d6ya",
      this
    ).then(
      () => {
        status.textContent = "✅ Thank you! We’ll contact you shortly.";
        status.style.color = "#00d9f6";
        form.reset();
      },
      (error) => {
        status.textContent = "❌ Message failed. Please try again.";
        status.style.color = "red";
        console.error(error);
      }
    ).finally(() => {
      // Re-enable button
      sendBtn.disabled = false;
      btnText.textContent = "Send Message";
      loader.style.display = "none";
    });
  });
});
