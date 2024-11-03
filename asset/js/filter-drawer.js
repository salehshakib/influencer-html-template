const filterMenu = document.getElementById("filter-menu");
const filterMenuButton = document.getElementById("filter-menu-button");
const closeFilterMenuButton = document.getElementById(
  "close-filter-menu-button"
);
const filterOverlay = document.getElementById("filter-menu-overlay");

function openMenu() {
  filterMenu.classList.remove("translate-x-full");
  filterMenuButton.setAttribute("aria-expanded", "true");
  filterOverlay.classList.add("opacity-50");
  filterOverlay.classList.remove("pointer-events-none");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  filterMenu.classList.add("translate-x-full");
  filterMenuButton.setAttribute("aria-expanded", "false");
  filterOverlay.classList.remove("opacity-50");
  filterOverlay.classList.add("pointer-events-none");
  document.body.style.overflow = "";
}

filterMenuButton.addEventListener("click", openMenu);
closeFilterMenuButton.addEventListener("click", closeMenu);
filterOverlay.addEventListener("click", closeMenu);

// Close menu on escape key press
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    !filterMenu.classList.contains("translate-x-full")
  ) {
    closeMenu();
  }
});
