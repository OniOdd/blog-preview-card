"use strict";

const card = document.getElementById("card");
const link = document.getElementById("link");

link.addEventListener("mouseenter", () => toggleClassActive());
link.addEventListener("mouseleave", () => toggleClassActive());

function toggleClassActive() {
  card.classList.toggle("active");
}
