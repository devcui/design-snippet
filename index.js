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

  // function vertical_line_start() {
  //   gsap.to(".author__graph__vertical_line", {
  //     height: `calc(100% + 100px)`,
  //     duration: 1,
  //     onComplete: () => {
  //       gsap.to([".author__graph__vertical_line "], {
  //         height: `${Math.random() * 100}%`,
  //         duration: 1.5,
  //         repeat: -1,
  //         yoyo: true,
  //       });
  //     },
  //   });
  // }

  // function author_graph_line_start() {
  //   gsap.to(".author__graph__line", {
  //     width: "calc(100% + 60px)",
  //     duration: 1,
  //     onComplete: () => {
  //       gsap.to([".top "], {
  //         width: `${Math.random() * 100}%`,
  //         opacity: 0,
  //         duration: 1,
  //         repeat: -1,
  //         yoyo: true,
  //       });

  //       gsap.to([".under "], {
  //         width: `${Math.random() * 100}%`,
  //         opacity: 0,
  //         duration: 1.5,
  //         repeat: -1,
  //         yoyo: true,
  //       });
  //     },
  //   });
  // }
});
