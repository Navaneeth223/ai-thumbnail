import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsapScroll() {
  useEffect(() => {
    gsap.from(".scroll-text", {
      scrollTrigger: {
        trigger: ".scroll-section",
        start: "top 70%",
      },
      opacity: 0,
      y: 80,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".scroll-3d", {
      scrollTrigger: {
        trigger: ".scroll-section",
        start: "top 70%",
      },
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);
}
