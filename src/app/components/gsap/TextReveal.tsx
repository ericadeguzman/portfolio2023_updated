import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import container from "postcss/lib/container";

interface TextRevealProps {
  // Add any props if needed
}

function TextReveal(props: TextRevealProps) {
  const [lettersRef, setLettersRef] = useArrayRef();
  const triggerRef = useRef<HTMLDivElement>(null);

  function useArrayRef() {
    const lettersRef = useRef<HTMLSpanElement[]>([]);
    const setLettersRef = (ref: HTMLSpanElement | null) => {
      if (ref) {
        lettersRef.current = [...lettersRef.current, ref];
      }
    };
    return [lettersRef, setLettersRef] as const;
  }

  gsap.registerPlugin(ScrollTrigger);

  const text =
    "In a galaxy far far away.... There was a designer who wanted to do cool things";

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current!,
        scrub: true,
        markers: true,
        start: "top bottom",
        end: "bottom center",
      },
      color: "#4f46e5",
      //   scaleX: 2,
      duration: 5,
      stagger: 0.5,
    });

    return () => {
      anim.kill();
    };
  }, [lettersRef]);

  return (
    <>
      <div className="spacing-small"></div>

      <div className="reveal">
        <div ref={triggerRef}>
          {text.split("").map((letter, index) => (
            <span
              className="reveal-text"
              key={index}
              ref={(ref) => setLettersRef(ref)}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div className="spacing"></div>
    </>
  );
}

export default TextReveal;
