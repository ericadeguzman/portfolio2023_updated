import gsap from "gsap";
import { RefObject, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { text } from "stream/consumers";
import Link from "next/link";

function Christopherson() {
  const triggerRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let textAnimation = gsap.timeline();
    textAnimation.to(".word3", {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        // markers: true,
        start: "top 80%",
        end: "bottom 40%",
      },
      stagger: {
        each: 0.06,
      },
      fontSize: "40px",
      ease: "power.in",
      opacity: 1,
    });
    // textAnimation.to(".word3", {
    //   scrollTrigger: {
    //     trigger: triggerRef.current,
    //     scrub: true,
    //     // markers: true,
    //     start: "bottom 30%",
    //     end: "bottom top",
    //   },
    //   stagger: {
    //     each: 0.05,
    //   },
    //   fontSize: "0px",
    //   color: "white",
    //   ease: "power4",
    //   opacity: 0,
    // });
    return () => {
      textAnimation.kill();
    };
  }, [triggerRef]);

  return (
    <div ref={triggerRef} className="word2container flex justify-end">
      <Link href="../cbt">
        <h2 className="flex hover flex-wrap">
          {"Christopherson".split("").map((word) => {
            return word === " " ? (
              <div className="word3">&nbsp;</div>
            ) : (
              <div className="word3">{word}</div>
            );
          })}
        </h2>
      </Link>
    </div>
  );
}

export default Christopherson;

{
  /* {"Hello World!".split("").map((word) => {
          return word === " " ? (
            <div className="word">&nbsp;</div>
          ) : (
            <div className="word">{word}</div>
          );
        })} */
}
