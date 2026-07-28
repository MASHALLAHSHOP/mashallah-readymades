document.addEventListener("DOMContentLoaded", () => {

  // Card Hover Animation
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px) scale(1.03)";
      card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
    });
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  console.log("Mashallah Website Loaded Successfully");

});
