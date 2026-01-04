// Navbar shrink on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.classList.toggle("shrink", window.scrollY > 50);
});

// AOS Init
AOS.init({
  duration: 1000,
  once: true
});

// Intersection Observer (card animation fallback)
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".animate-card").forEach(card => {
  observer.observe(card);
});

// Service card navigation (Home page)
document.querySelectorAll(".service-card[data-link]").forEach(card => {
  card.addEventListener("click", () => {
    const link = card.getAttribute("data-link");
    if (link) {
      window.location.href = link;
    }
  });
});

/* ===== MOBILE MENU TOGGLE ===== */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const menuClose = document.getElementById("menuClose");

menuToggle.addEventListener("click", () => {
  navLinks.classList.add("active");
  menuToggle.style.display = "none";
  document.body.style.overflow = "hidden";
});

menuClose.addEventListener("click", () => {
  navLinks.classList.remove("active");
  menuToggle.style.display = "flex";
  document.body.style.overflow = "";
});

/* Close on link click */
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.style.display = "flex";
    document.body.style.overflow = "";
  });
});
