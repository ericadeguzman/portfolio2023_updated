import gsap from "gsap";
import { RefObject, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { text } from "stream/consumers";

function GSAPtext() {
  const triggerRef7 = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let textAnimation = gsap.timeline();
    textAnimation.to(".word3", {
      scrollTrigger: {
        trigger: triggerRef7.current,
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
  }, [triggerRef7]);

  return (
    <div ref={triggerRef7} className="word2container flex justify-end">
      <h2 className="flex word3 flex-wrap">
        {"Gsap".split("").map((word, index) => {
          return word === " " ? (
            <div key={index} className="word3">
              &nbsp;
            </div>
          ) : (
            <div key={index} className="word3">
              {word}
            </div>
          );
        })}
      </h2>
    </div>
  );
}

export default GSAPtext;
