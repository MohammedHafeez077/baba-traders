// Smooth scroll for nav links
document.addEventListener("click", (e) => {
  const target = e.target;
  if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
    const id = target.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
});

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Simple form handler
function handleFormSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("form-status");
  if (status) {
    status.textContent = "Thank you! We will contact you soon.";
  }
  event.target.reset();
}

// Footer year
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
