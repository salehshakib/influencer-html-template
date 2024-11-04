const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuButton = document.getElementById("mobile-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");
const overlay = document.getElementById("mobile-menu-overlay");

function openMenu() {
  mobileMenu.classList.remove("translate-x-full");
  mobileMenuButton.setAttribute("aria-expanded", "true");
  overlay.classList.add("opacity-50");
  overlay.classList.remove("pointer-events-none");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  mobileMenu.classList.add("translate-x-full");
  mobileMenuButton.setAttribute("aria-expanded", "false");
  overlay.classList.remove("opacity-50");
  overlay.classList.add("pointer-events-none");
  document.body.style.overflow = "";
}

mobileMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// Close menu on escape key press
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    !mobileMenu.classList.contains("translate-x-full")
  ) {
    closeMenu();
  }
});
