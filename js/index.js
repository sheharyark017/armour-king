const accordions = document.querySelectorAll(".accordion-block");

const nav = document.querySelector(".main-nav");

const navHeight = nav.clientHeight;

const navLinks = document.querySelector(".nav-links");

const hamburger = document.querySelector(".hamburger");

for (i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    accordions.forEach((accordion) =>
      accordion.classList.remove("accordion-active")
    );

    this.classList.add("accordion-active");
  });
}

navLinks.style.top = navHeight - 30 + "px";

hamburger.addEventListener("click", function () {
  this.classList.toggle("hamburger-active");

  navLinks.classList.toggle("nav-links-acive");
});
