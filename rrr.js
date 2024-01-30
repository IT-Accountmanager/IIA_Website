gsap.fromTo(".image", {
    x: 50,
    opacity: 0,
  }, {
    scrollTrigger: {
      trigger: ".box",
      start: "top center",
    },
    x: 0,
    opacity: 1,
  });
  
  gsap.fromTo(".text", {
    y: 50,
    opacity: 0,
  }, {
    scrollTrigger: {
      trigger: ".box",
      start: "top center",
    },
    y: 0,
    opacity: 1,
  });
  import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);