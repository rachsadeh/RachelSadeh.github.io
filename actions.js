document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", function () {
      navLinks.classList.toggle("active");

      // Accessibility improvement
      const isActive = navLinks.classList.contains("active");
      menuIcon.setAttribute("aria-expanded", isActive);
    });
  }
});
