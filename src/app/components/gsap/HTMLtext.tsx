import gsap from "gsap";
import { RefObject, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { text } from "stream/consumers";

function HTMLtext() {
  const triggerRef1 = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let textAnimation = gsap.timeline();
    textAnimation.to(".word3", {
      scrollTrigger: {
        trigger: triggerRef1.current,
        scrub: true,
        // markers: true,
        start: "top 80%",
        end: "bottom 20%",
      },
      stagger: {
        each: 0.06,
      },
      fontSize: "40px",
      // color: "white",
      ease: "power4",
      opacity: 1,
    });
    return () => {
      textAnimation.kill();
    };
  }, [triggerRef1]);

  return (
    <div ref={triggerRef1} className="word2container flex justify-end">
      <h2 className="flex word3 flex-wrap">
        {"HTML".split("").map((word) => {
          return word === " " ? (
            <div key={word} className="word3">
              &nbsp;
            </div>
          ) : (
            <div key={word} className="word3">
              {word}
            </div>
          );
        })}
      </h2>
    </div>
  );
}

export default HTMLtext;
