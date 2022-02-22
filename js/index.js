// declarations

const accordions = document.querySelectorAll(".accordion-block");

const nav = document.querySelector(".main-nav");

const innerNav = document.querySelector(".inner-nav");

const navHeight = nav.clientHeight;

const navLinks = document.querySelector(".nav-links");

const hamburger = document.querySelector(".hamburger");

const cartButton = document.querySelector(".cart-button");

const cart = document.querySelector(".cart-sidebar");

const cartBackground = document.querySelector(".cart-background");

const cartCloseButton = document.querySelector(".cart-close");

const homeBody = document.querySelector(".home-body");

// end declarations

// accordions

for (i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    accordions.forEach((accordion) =>
      accordion.classList.remove("accordion-active")
    );

    this.classList.add("accordion-active");
  });
}

// end accordions

// phone navbar

navLinks.style.top = navHeight - 30 + "px";

hamburger.addEventListener("click", function () {
  this.classList.toggle("hamburger-active");

  navLinks.classList.toggle("nav-links-acive");
});

// end phone navbar

// moving cart

cartButton.addEventListener("click", function () {
  cart.classList.add("cart-active");
  cartBackground.classList.add("cart-background-acive");
});

cartCloseButton.addEventListener("click", function () {
  console.log("hello");

  cart.classList.remove("cart-active");
  cartBackground.classList.remove("cart-background-acive");
});

cartBackground.addEventListener("click", function () {
  cart.classList.remove("cart-active");
  cartBackground.classList.remove("cart-background-acive");
});

// end moving cart
