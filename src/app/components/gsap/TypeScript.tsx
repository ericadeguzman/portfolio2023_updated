import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function TypeScriptText() {
  const triggerRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let textAnimation = gsap.timeline();
    textAnimation.to(".word3", {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top 80%",
        end: "bottom top",
      },
      stagger: {
        each: 0.06,
      },
      fontSize: "40px",
      color: "white",
      ease: "power4",
      opacity: 1,
    });
    return () => {
      textAnimation.kill();
    };
  }, []);

  return (
    <div ref={triggerRef} className="word2container flex justify-end">
      <h2 className="flex word3 flex-wrap">
        {"TypeScript".split("").map((char, index) => {
          return char === " " ? (
            <div key={index} className="word3">
              &nbsp;
            </div>
          ) : (
            <div key={index} className="word3">
              {char}
            </div>
          );
        })}
      </h2>
    </div>
  );
}

export default TypeScriptText;
