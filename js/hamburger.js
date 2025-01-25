document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("hamburger-menu").addEventListener("click", function() {
      const navList = document.getElementById("nav-list");
      navList.classList.toggle("show"); // Toggle the visibility of the menu
  });
});

  