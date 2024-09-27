document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(
    Flip,
    ScrollTrigger,
    Observer,
    ScrollToPlugin,
    Draggable,
    MotionPathPlugin,
    EaselPlugin,
    PixiPlugin,
    TextPlugin,
    RoughEase,
    ExpoScaleEase,
    SlowMo,
    CustomEase
  );
});

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.to(".anim-swipe", {
    yPercent: 300,
    delay: 0.2,
    duration: 3,
    stagger: {
      from: "random",
      each: 0.1,
    },
    ease: "sine.out",
  });

  gsap.to(".hero__image-cont > img", {
    scale: 3,
    xPercent: 20,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "+=3000px",
      scrub: true,
    },
  });

  gsap.to(".author__graph__img", {
    right: 0,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      scrub: true,
    },
  });

  gsap.to(".author__title__line", {
    width: "100%",
    opacity: 100,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      scrub: true,
    },
  });

});
