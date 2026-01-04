import { useEffect } from "react";
import gsap from "gsap";

export default function useGsapHero(ref) {
  useEffect(() => {
    gsap.from(".hero-text", {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2
    });
  }, []);
}
