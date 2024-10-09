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
      trigger: "#wrapper",
      start: "top top",
      scrub: true,
    },
    delay: 5,
    duration: 10,
    ease: "power1.inOut",
    onComplete: () => {
      onAuthorGraphImgComplete();
    },
  });

  gsap.fromTo(
    ".author__title__line",
    {
      width: 0,
    },
    {
      width: "100%",
      opacity: 100,
      scrollTrigger: {
        trigger: "#wrapper",
        start: "top top",
        scrub: true,
      },
      delay: 5,
      duration: 10,
      ease: "power1.inOut",
      onComplete: () => {
        onAuthorTitleLineComplete();
      },
    }
  );

  function onAuthorTitleLineComplete() {
    gsap.to(".author__title__text", {
      opacity: 100,
      text: "ASUKA",
    });
    gsap.to(".author__title__desc", {
      opacity: 100,
      delay: 0.5,
      duration: 2,
      ease: "power1.inOut",
      text: `「よく分からないものを無理して使うからよ」 `,
    });
  }

  function onAuthorGraphImgComplete() {
    gsap.to(".author__graph__vertical_line", {
      height: `calc(100% + 100px)`,
      duration: 1,
      ease: "power1.inOut",
    });
    gsap.to([".top"], {
      width: `calc(100% + 60px)`,
      opacity: 100,
      duration: 6,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
    gsap.to([".under"], {
      width: `calc(100% + 60px)`,
      opacity: 100,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
    gsap.to([".author__title__line"], {
      width: "80%",
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }
});
