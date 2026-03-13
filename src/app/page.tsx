/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../app/svg/alien.svg";
import Link from "next/link";
import { ArrowFatRight, Gear } from "@phosphor-icons/react";
import GitHub from "./svg/github.svg";
import Instagram from "./svg/insta.svg";
import LinkedIn from "./svg/linkedin.svg";
import ReactText from "./components/gsap/ReactText";
import HTMLtext from "./components/gsap/HTMLtext";
import CSStext from "./components/gsap/CSStext";
import JavascriptText from "./components/gsap/JavasriptText";
import TailwindText from "./components/gsap/TailwindText";
import GSAPtext from "./components/gsap/GSAPtext";
import FigmaText from "./components/gsap/FigmaText";

export default function Home() {
  const [theme, setTheme] = useState(false);
  const toggletheme = () => {
    setTheme(!theme);
  };
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
  //
  return (
    <div>
      <div id="player" className="flex flex-row justify-start h-full p-6">
        <script
          src="https://cdn.commoninja.com/sdk/latest/commonninja.js"
          defer
        ></script>
        <div className="commonninja_component pid-7a5a1656-5098-444d-9ce2-e04cf8d3ba00"></div>
      </div>
      <div className={theme ? "theme-wes" : "theme-eightbit"}>
        <section className="h-screen grid-header">
          <div></div>
          <div className="flex justify-center">
            <div id="header-box" className="mt-[50%] tablet:mt-[12%]">
              <div className="flex">
                <div id="designer-header">
                  <h2 className="text-[#673ffb] sacramento header-designer">
                    designer
                  </h2>
                </div>
                <div id="myname-header" className="w-[400px] ml-[10px] ">
                  <h2 className="text-white header-name">
                    erica <br />
                    de guzman
                  </h2>
                </div>
              </div>
              <div id="developer-header" className="tablet:ml-[120px]">
                <h1 className="text-[#03dc2c] header-developer tablet:mt-[-1%]">
                  Developer
                </h1>
              </div>
            </div>
            <div></div>
          </div>

          <div className="flex absolute bottom-[2%] right-[4%] tablet:bottom-[4%] tablet:right-[10%]">
            <div className="flex gap-2 items-center">
              <p className="bungee text-white scroll-size"> Scroll </p>
              <Gear className="animate-spin-slow text-4xl" color="#03dc2c" />
            </div>
          </div>
        </section>
        <div className="h-screen px-[4%] mt-[10%] tablet:px-[10%]">
          <HTMLtext />
          <CSStext />
          <JavascriptText />
          <ReactText />
          <TailwindText />
          <GSAPtext />
          <FigmaText />
        </div>
        <main className="h-screen bg-skin-background text-skin-primary flex flex-col justify-between">
          <div className="mt-[3%] flex flex-col justify-end">
            {/* {!theme && (
              <Link href="/dev/">
                <img
                  src="./alien.svg"
                  alt="alien"
                  className="w-20 hover:animate-pulse my-6 mobile:w-52"
                />
              </Link>
            )}
            {theme && (
              <img src="./wes-canyon.svg" alt="alien" className="w-52 my-6" />
            )} */}
            {/* <h1 className="header-developer tracking-tight">Hello world.</h1> */}
            {/* {!theme ? (
              <div className="mobile:max-w-2xl mt-6">
                <p className="tablet:text-3xl">
                  My name is <span className="text-skin-highlight">Erica</span>{" "}
                  and I <span className="text-skin-highlight">design</span> and{" "}
                  <span className="text-skin-highlight">code</span> websites!
                </p>
                <p className="mt-6 body-font">
                  My super powers are developing flawless user experiences,
                  designing beautiful interfaces and coding pixel perfect
                  designs.{" "}
                </p>
              </div>
            ) : (
              <p className="mt-6 max-w-xl body-font">
                You are on the same page! <br />I just re-styled it using
                Tailwind and css variables to change the site&rsquo;s theme.
              </p>
            )} */}
            <div className="flex justify-end mt-6 mr-[4%]">
              <ul className="flex flex-col items-end header-developer">
                <li className="hidden-animate hover:text-skin-highlight">
                  <Link href="/cbt/">
                    <span className="flex flex-row flex-start gap-2 items-center">
                      Christopherson
                      <div className="">
                        <ArrowFatRight
                          weight="fill"
                          className="text-skin-highlight text-3xl tablet:text-4xl"
                        />
                      </div>
                    </span>
                  </Link>
                </li>
                <li className="hidden-animate hover:text-skin-highlight">
                  <Link href="/chapman/">
                    <span className="flex flex-row flex-start gap-2  items-center">
                      Chapman University
                      <div className="">
                        <ArrowFatRight
                          weight="fill"
                          className="text-skin-highlight text-3xl tablet:text-4xl"
                        />
                      </div>
                    </span>
                  </Link>
                </li>
                <li className="hidden-animate hover:text-skin-highlight">
                  <Link href="/fullerton/">
                    <span className="flex flex-row flex-start gap-2 items-center">
                      Cal State Fullerton
                      <div className="">
                        <ArrowFatRight
                          weight="fill"
                          className="text-skin-highlight text-3xl tablet:text-4xl"
                        />
                      </div>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* ================== App Bar - social icons ================== */}

          <div className="appbar flex justify-end mr-[4%] mb-[6%]">
            <div className="flex flex-row justify-between gap-2 items-center">
              <a href="https://github.com/ericadeguzman">
                <div className="w-8">
                  <Image alt="Erica's Github" src={GitHub} />
                </div>
              </a>
              <a href="https://instagram.com/edgphoto">
                <div className="w-8">
                  <Image src={Instagram} alt="instagram" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/ericadg/">
                <div className="w-8">
                  <Image src={LinkedIn} alt="Linkedin" />
                </div>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
