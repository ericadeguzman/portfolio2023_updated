import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { text } from "stream/consumers";

function GSAPAnimation() {
  const triggerRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let textAnimation = gsap.timeline();
    textAnimation.to(".word", {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        markers: true,
        start: "top 90%",
        end: "bottom 30%",
      },
      stagger: {
        each: 0.05,
      },
      fontSize: "40px",
      ease: "power4",
      opacity: 1,
    });

    return () => {
      textAnimation.kill();
    };
  }, [triggerRef]);

  return (
    <div className="h-full">
      <div className="h-[1500px] text-white"></div>
      <div className="flex justify-center ">
        <h1 ref={triggerRef} className="flex helloworld flex-wrap px-[20%]">
          {"In a galaxy far far away.... There was a designer who wanted to do cool things"
            .split("")
            .map((word) => {
              return word === " " ? (
                <div className="word">&nbsp;</div>
              ) : (
                <div className="word">{word}</div>
              );
            })}
        </h1>
      </div>
      <div className="h-[2500px] text-white"></div>
    </div>
  );
}

export default GSAPAnimation;

{
  /* {"Hello World!".split("").map((word) => {
          return word === " " ? (
            <div className="word">&nbsp;</div>
          ) : (
            <div className="word">{word}</div>
          );
        })} */
}
