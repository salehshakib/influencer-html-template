window.addEventListener("scroll", function () {
  const navbarWrapper = document.getElementById("navbar-wrapper");
  if (window.scrollY > 50) {
    navbarWrapper.classList.add("bg-white", "shadow-md");
  } else {
    navbarWrapper.classList.remove("bg-white", "shadow-md");
  }
});
