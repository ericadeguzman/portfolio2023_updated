"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import grid1 from "../images/csuf/grid1.png";
import grid2 from "../images/csuf/grid2.png";
import grid3 from "../images/csuf/grid3.png";
import grid4 from "../images/csuf/grid4.png";
import grid5 from "../images/csuf/grid5.png";
import grid6 from "../images/csuf/grid6.png";
import grid7 from "../images/csuf/grid7.png";
import grid8 from "../images/csuf/grid8.png";
import Llama from "../images/csuf/llama.gif";
import sb1 from "../images/csuf/sb1.png";
import sb2 from "../images/csuf/sb2.png";
import sb3 from "../images/csuf/sb3.png";
import sb4 from "../images/csuf/sb4.png";
import Back from "../components/back";
import NextBtn from "../components/next";

export default function International() {
  const [imageExpanded, setImageExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-animation");
        }
        // else {
        //   entry.target.classList.remove("show-animation");
        // }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden-animate");
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slideInFromRight");
        }
        // else {
        //   entry.target.classList.remove("animate-slideInFromRight");
        // }
      });
    });

    const hiddenElements2 = document.querySelectorAll(
      ".hidden-animate-slideInFromRight"
    );
    hiddenElements2.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount.

  // Blur animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("blur-animation");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden-blur-animate");
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <div className="bg-[#00244E] flex justify-start pl-[3%]">
        <Back color={"#FF7900"} text={"home"} link={"./"} />
      </div>
      <div className="bg-[#00244E] flex flex-col py-[5%] snap-y">
        <div className="flex flex-col justify-center text-center px-[5%] desktop:px-[25%]">
          <h4 className="text-[#EBFBFF] text-lg tablet:text-2xl tablet:leading-loose">
            Cal state Fullerton&rsquo;s
          </h4>
          <div className="mt-[4%] mb-[4%] tablet:mb-[3%] tablet:mt-[1%]">
            <h2 className="text-[#FF7900] text-4xl tablet:text-6xl">
              International Programs & Global Exchange
            </h2>
          </div>
          <h3 className="text-[#EBFBFF] text-lg tablet:text-3xl">
            This site was built for CSUF&rsquo;s international programs
            department. The site was built using HTML, CSS, and Javascript.
          </h3>
        </div>
        <div
          id="fullerton"
          className="ipge-screens columns-1 px-[2%] mobile:columns-2 tablet:columns-3 laptop:columns-4"
        >
          <Image
            className="hidden-blur-animate"
            alt="ipge grid section"
            src={grid1}
          />
          <Image
            className="hidden-blur-animate"
            alt="ipge grid section"
            src={grid2}
          />
          <Image
            className="hidden-blur-animate"
            alt="ipge grid section"
            src={grid3}
          />
          <Image
            className="hidden-blur-animate"
            alt="ipge grid section"
            src={grid4}
          />
          <div className="text-center mt-4">
            <button className="animate-bounce text-white border-[#FF7900] mt-1 mb-6 text-sm tablet:text-md padding-10 border px-4 py-2">
              <a href="https://extension.fullerton.edu/international/">
                Visit CSUF&rsquo;s IPGE
              </a>
            </button>
          </div>

          <Image
            className="hidden-blur-animate"
            alt="ipge grid section"
            src={grid7}
          />
          <Image
            className="hidden-blur-animate"
            alt="ipge grid section"
            src={grid5}
          />
          <Image
            className="hidden-blur-animate"
            alt="ipge grid section"
            src={grid8}
          />
          <Image
            className="hidden-blur-animate"
            alt="ipge grid section"
            src={grid6}
          />
          {/* <Image alt="ipge grid section" src={grid7} /> */}
        </div>
      </div>
      <div className="stripe-1 flex flex-col py-[10%] px-[5%] tablet:py-[5%] snap-y">
        <div className="flex flex-col justify-center text-center  pb-[2%] px-[5%] mb-[5%] tablet:mb-[0px]">
          <h3 className="hidden-blur-animate text-white text-lg leading-normal tablet:text-2xl tablet:leading-loose">
            Cal state Fullerton&rsquo;s
          </h3>
          <div className="mb-[1%] tablet:mb-[2%]">
            <h2 className="text-[#fff] text-5xl tablet:text-6xl hidden-blur-animate">
              Study Abroad
            </h2>
          </div>
          <h3 className="text-[#fff] hidden-blur-animate text-lg leading-[1.4rem] tablet:leading-[1.75rem] tablet:text-3xl">
            A responsive site built with HTML, CSS, and Javascript.
          </h3>
        </div>
        <div className="international-hp tablet:hidden ">
          <Image
            className="w-full laptop:max-w-[600px]"
            alt="International homepage"
            src={sb1}
          />
          <Image
            className="-full laptop:max-w-[600px]"
            alt="International homepage"
            src={Llama}
          />
          <Image
            className="-full laptop:max-w-[600px]"
            alt="International homepage"
            src={sb2}
          />
          <Image
            className="-full laptop:max-w-[600px]"
            alt="International homepage"
            src={sb3}
          />
          <Image
            className="-full laptop:max-w-[600px]"
            alt="International homepage"
            src={sb4}
          />
        </div>
        <div className="my-[2%] mx-[5%] flex flex-row justify-center items-start gap-[3%]">
          <div>
            <div className="mt-[5%] tablet:mt-[5%]">
              <p className="hidden-animate text-white text-base desktop:text-xl text-center tablet:text-right mr-[3%] max-w-lg">
              Over six years at CSUF, I designed and developed fully responsive, ADA-compliant websites for multiple departments within the Extended Education division — including International Programs, Study Abroad, Extension Programs, Children's Learning, and Osher Lifelong Learning. Every site was rigorously tested across devices, browsers, and operating systems to ensure a consistent experience for all users.
              </p>
            </div>
          </div>
          <div className="international-hp hidden tablet:block">
            <div
              className={`relative w-full laptop:max-w-[600px] overflow-hidden transition-[max-height] duration-300 ease-out ${
                imageExpanded ? "max-h-[5000px]" : "max-h-[450px]"
              }`}
            >
              <Image
                className="w-full laptop:max-w-[600px]"
                alt="International homepage"
                src={sb1}
              />
              <Image
                className="w-full laptop:max-w-[600px]"
                alt="International homepage"
                src={Llama}
              />
              <Image
                className="w-full laptop:max-w-[600px]"
                alt="International homepage"
                src={sb2}
              />
              <Image
                className="w-full laptop:max-w-[600px]"
                alt="International homepage"
                src={sb3}
              />
              <Image
                className="w-full laptop:max-w-[600px]"
                alt="International homepage"
                src={sb4}
              />
              {!imageExpanded && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-[10%] min-h-[48px] pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.95), transparent)",
                  }}
                  aria-hidden
                />
              )}
            </div>
            <button
              type="button"
              onClick={() => setImageExpanded((e) => !e)}
              className="mt-2 w-full laptop:max-w-[600px] py-2 px-4 rounded border border-white/30 bg-black/60 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              {imageExpanded ? "View less" : "Expand to view full image"}
            </button>
          </div>
        </div>
        <div className="flex justify-between px-[3%] mb-[3%]">
          <Back color={"#fff"} text={"Chapman"} link={"./chapman"} />
          <NextBtn color={"white"} project={"Christopherson"} link={"./cbt"} />
        </div>
      </div>
    </>
  );
}
