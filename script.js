document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.add("show");
  });

  closeIcon.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });


  
  // Close menu when any nav item is clicked (for mobile)
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
});
