"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useStoryScroll(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=320%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        timeline
          .to("[data-story='hero-image']", { scale: 1.18, yPercent: -2, ease: "none" }, 0)
          .to("[data-story='hero-copy']", { opacity: 0, y: -55, ease: "none" }, 0.08)
          .to("[data-story='hero-mask']", { clipPath: "inset(13% 24% 13% 24% round 3rem)", ease: "power2.inOut" }, 0.08)
          .to("[data-story='profile']", { opacity: 1, scale: 1, ease: "power2.inOut" }, 0.32)
          .to("[data-story='hero-image']", { opacity: 0.12, ease: "none" }, 0.38)
          .fromTo("[data-story='tech-copy']",
            { opacity: 0, y: 35 },
            { opacity: 1, y: 0, stagger: 0.08, ease: "power2.out" },
            0.48,
          )
          .to("[data-story='profile']", { scale: 1.12, xPercent: -12, ease: "none" }, 0.63)
          .to("[data-story='manufacturing']", { opacity: 1, scale: 1, ease: "power2.inOut" }, 0.7)
          .to("[data-story='profile']", { opacity: 0, ease: "none" }, 0.76)
          .to("[data-story='tech-copy']", { opacity: 0, y: -25, ease: "none" }, 0.78)
          .fromTo("[data-story='final-copy']", { opacity: 0, y: 32 }, { opacity: 1, y: 0, ease: "power2.out" }, 0.84);
      });

      mm.add("(max-width: 767px)", () => {
        gsap.utils.toArray<HTMLElement>("[data-mobile-reveal]").forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: { trigger: element, start: "top 84%", once: true },
            },
          );
        });
      });

      return () => mm.revert();
    }, root);

    return () => context.revert();
  }, [root]);
}
