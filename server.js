// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Form submission placeholder
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for reaching out! I’ll get back to you soon.");
  this.reset();
});
