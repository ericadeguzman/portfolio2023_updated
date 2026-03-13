import gsap from "gsap";
import { useEffect, useRef } from "react";

function DevHeader() {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let textAnimation = gsap.timeline();
    textAnimation.to(".dev-header", {
      stagger: {
        each: 0.08,
      },
      opacity: 1,
      // duration: 0.05,
    });

    return () => {
      textAnimation.kill();
    };
  }, [triggerRef]);

  return (
    <div ref={triggerRef} className="dev-header h-[200px]">
      <h1 className="flex dev-header flex-wrap">
        {"Developer".split("").map((word) => {
          return word === " " ? (
            <div className="dev-header">&nbsp;</div>
          ) : (
            <div className="dev-header">{word}</div>
          );
        })}
      </h1>
    </div>
  );
}

export default DevHeader;
