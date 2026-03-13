import gsap from "gsap";
import { RefObject, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { text } from "stream/consumers";

function JavascriptText() {
  const triggerRef4 = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let textAnimation = gsap.timeline();
    textAnimation.to(".word3", {
      scrollTrigger: {
        trigger: triggerRef4.current,
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
  }, [triggerRef4]);

  return (
    <div ref={triggerRef4} className="word2container flex justify-end">
      <h2 className="flex word3 flex-wrap">
        {"Javascript".split("").map((word, index) => {
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

export default JavascriptText;
