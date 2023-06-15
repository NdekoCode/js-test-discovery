const elements = document.querySelectorAll(".spoiler");
const createSpoilderButton = function (element) {
  // On créer la span.spoiler-content
  const span = document.createElement("span");
  span.className = "spoiler-content";
  span.innerHTML = element.innerHTML;

  // On créer le button
  const button = document.createElement("button");
  button.textContent = "Afficher le spoiler";

  // On ajoute les elements au DOM
  element.innerHTML = "";
  element.appendChild(button);
  element.appendChild(span);
  button.addEventListener("click", function () {});
};
for (let item of elements) {
  createSpoilderButton(item);
}
