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

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#wrapper",
      start: "top top",
      scrub: 1,
      snap: {
        snapTo: "labels",
        duration: { min: 2, max: 10 },
        delay: 1,
        ease: "power1.inOut",
      },
    },
  });

  tl.addLabel("start")
    .from(".author__graph__img", {
      right: "-100%",
    })
    .to(".author__graph__img", {
      right: 0,
    })
    .addLabel("titleLine")
    .from(".author__title__line", {
      width: 0,
      opacity: 0,
    })
    .to(".author__title__line", {
      width: "100%",
      opacity: 100,
    })
    .addLabel("title")
    .from(".author__title__text", {
      opacity: 0,
    })
    .to(".author__title__text", {
      opacity: 100,
      text: "asuka",
    })
    .addLabel("titleDesc")
    .from(".author__title__desc", {
      opacity: 0,
    })
    .to(".author__title__desc", {
      opacity: 100,
      text: "this is the demo text aha ya xi asjd awieqoru asdfj asdfijo",
    });
});
