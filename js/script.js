"use strict";

const card = document.getElementById("card");
const link = document.getElementById("link");

link.addEventListener("mouseenter", () => toggleClassActive());
link.addEventListener("mouseleave", () => toggleClassActive());
link.addEventListener("focus", () => toggleClassActive());
link.addEventListener("blur", () => toggleClassActive());

function toggleClassActive() {
  card.classList.toggle("active");
}
