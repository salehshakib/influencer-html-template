const stars = document.querySelectorAll(".star");
const resultDisplay = document.getElementById("result");
let currentRating = 0;

stars.forEach((star) => {
  // Click event to set the rating
  star.addEventListener("click", () => {
    currentRating = star.getAttribute("data-value");
    updateStars();
    resultDisplay.textContent = `Your rating: ${currentRating}`;
  });

  // Mouseover event to add hover effect
  star.addEventListener("mouseover", () => {
    const hoverValue = star.getAttribute("data-value");
    resetStars();
    for (let i = 0; i < hoverValue; i++) {
      stars[i].classList.add("primary-text"); // Set hover color for all stars up to the hovered one
    }
  });

  // Mouseout event to remove hover effect
  star.addEventListener("mouseout", () => {
    resetStars();
    updateStars(); // Reapply the selected color
  });
});

// Update the stars to reflect the current rating
function updateStars() {
  for (let i = 0; i < currentRating; i++) {
    stars[i].classList.add("primary-text"); // Selected color
  }
}

// Reset all stars to remove any color
function resetStars() {
  stars.forEach((star) => {
    star.classList.remove("primary-text", "hover-text");
  });
}
