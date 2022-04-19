// declarations

const allSections = document.querySelectorAll(".section");

const accordions = document.querySelectorAll(".accordion-block");

const nav = document.querySelector(".main-nav");

const innerNav = document.querySelector(".inner-nav");

const navHeight = nav.clientHeight;

const itemQty = document.querySelectorAll(".item-qty");

const totalQty = document.querySelector(".total-qty");

const navLinks = document.querySelector(".nav-links");

const hamburger = document.querySelector(".hamburger");

const cartButton = document.querySelector(".cart-button");

const cartButton1 = document.querySelector(".cart-button1");

const cart = document.querySelector(".cart-sidebar");

const cartBackground = document.querySelector(".cart-background");

const cartCloseButton = document.querySelector(".cart-close");

const homeBody = document.querySelector(".home-body");

// end declarations\

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

// cartButton1.addEventListener("click", function () {
//   if (cart.classList.contains("cart-active")) {
//     return;
//   }

//   cart.classList.add("cart-active");
//   cartBackground.classList.add("cart-background-acive");
// });

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

let total;

// console.log(
//   itemQty.forEach((item) => {
//     return (total += Number(item.textContent));
//   })
// );

let totalNumber;

for (const item of itemQty) {
  totalNumber = totalNumber + Number(item.textContent);
}

console.log(totalNumber);

const revealSection = (entries, observer) => {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) {
    return;
  }
  entry.target.classList.remove("section-hidden");

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach((Section) => {
  sectionObserver.observe(Section);
  Section.classList.add("section-hidden");
});
