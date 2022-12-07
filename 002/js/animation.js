const box = document.querySelector(".center");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

function animationEvent() {
  if (line1.classList.contains("ani1") === true) {
    line1.classList.remove("ani1");
    line2.classList.remove("ani2");
    line3.classList.remove("ani3");
  } else {
    line1.classList.add("ani1");
    line2.classList.add("ani2");
    line3.classList.add("ani3");
  }
}

box.addEventListener("click", animationEvent);
