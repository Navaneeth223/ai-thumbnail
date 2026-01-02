import { useEffect } from "react";
import gsap from "gsap";

export default function useGsapIntro(ref) {
  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);
}
