document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navWrap = document.querySelector(".nav-wrap");
  if (toggle && navWrap) {
    toggle.addEventListener("click", () => {
      navWrap.classList.toggle("open");
      const expanded = navWrap.classList.contains("open");
      toggle.setAttribute("aria-expanded", String(expanded));
    });
  }

  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((openItem) => {
        if (openItem !== item) openItem.classList.remove("open");
      });
      item.classList.toggle("open", !isOpen);
    });
  });

  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("#parent-name")?.value.trim() || "";
      const subject = encodeURIComponent("Four4 Academy Camp Inquiry");
      const bodyLines = [];
      form.querySelectorAll("input, select, textarea").forEach((field) => {
        if (!field.value) return;
        const label = form.querySelector(`label[for="${field.id}"]`);
        bodyLines.push(`${label ? label.textContent : field.name}: ${field.value}`);
      });
      const body = encodeURIComponent(bodyLines.join("\n"));
      window.location.href = `mailto:info@four4academy.com?subject=${subject}&body=${body}`;
      const status = form.querySelector(".form-status");
      if (status) {
        status.textContent = `Thanks${name ? ", " + name : ""} — your email app should be opening now with your message pre-filled.`;
      }
    });
  }
});
