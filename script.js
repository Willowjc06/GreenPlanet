// JavaScript & Animation 

document.addEventListener("DOMContentLoaded", () => {

  console.log("script loaded")

  const heroImage = document.querySelector(".hero-image");
  const aboutUsLeft = document.querySelector(".about-us-slide-left");
  const aboutUsRight = document.querySelector(".about-us-slide-right");


  if (typeof gsap === "undefined") {
    console.warn("GSAP is not loaded. Check the GSAP <script> tag order.");
  } else if (heroImage) {
    gsap.from(heroImage, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    });
  }

  if (typeof gsap === "undefined") {
    console.warn("GSAP is not loaded. Check the GSAP <script> tag order.");
  } else if (aboutUsLeft) {
    gsap.from(aboutUsLeft, {
      x: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.3
    });

    gsap.from(aboutUsRight, {
      x: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.3
    });
  }

});
