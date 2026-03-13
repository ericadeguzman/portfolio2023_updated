/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
// Image imports
import suppliers from "../images/cbt/suppliers-1.png";
import login from "../images/cbt/cbt-login.png";
import Image from "next/image";
import Back from "../components/back";
import cbtlight from "../images/cbt/light-mode.png";
import jazz from "../images/cbt/jazz-theme.png";
import internal from "../images/cbt/internal-theme.png";
import darkmode from "../images/cbt/dark-mode.jpg";
import { ArrowFatLinesRight, Moon, Sun } from "@phosphor-icons/react";

import { columns } from "../data/columns";
import { people } from "../data/people";
import TsTable from "../components/TsTable";
import TwButton from "../components/buttons/TwButton";
import NextBtn from "../components/next";
import { TwCheckbox } from "../components/Checkbox";
import TwInput from "../components/input/TwInput";
interface Props {}

export default function Cbt(props: Props) {
  // Toggle theme
  const [cbtTheme, setCbtTheme] = useState(true);
  const toggleTheme = () => {
    setCbtTheme(!cbtTheme);
  };
  // Toggle darkmode
  const [darkTheme, setDarkTheme] = useState(true);
  const toggleDark = () => {
    setDarkTheme(!darkTheme);
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
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount.

  return (
    <div id="cbt">
      <div className="flex justify-start pl-[3%] bg-black">
        <Back color={"#37a9d7"} text={"home"} link={"./"} />
      </div>
      {/* Section one header and login and suppliers page  */}
      <div className="my-[5%] mx-[4%] tablet:flex tablet:jusitfy-center tablet:items-center">
        <div className="flex flex-col text-center tablet:flex-col tablet:items-end tablet:text-right">
          <div className="tablet:flex tablet:flex-col tablet:max-w-5xl items-end">
            <div>
              <h2 className="text-[#37a9d7] text-4xl leading-[2.3rem] tablet:text-5xl tablet:text-right desktop:text-6xl">
                christopherson business travel
              </h2>
            </div>
            <div className="max-w-2xl">
              <p className="bungee text-white text-xl leading-[1.5rem] mt-2 mb-6">
                The CBT travel app features tools to help companies manage and
                organize travel.
              </p>
            </div>
          </div>
          <Image
            className="sm:hidden cbt-login max-w-[19rem]"
            alt="cbt-login"
            src={login}
          />
          <div className="flex gap-6 tablet:hidden">
            <Image
              className="sm:max-w-[220px] max-w-xs self-center"
              alt="cbt-login"
              src={login}
            />
            <Image
              className="suppliers-image sm:max-w-2xl"
              alt="suppliers table"
              src={suppliers}
            />
          </div>
        </div>
        <Image
          className="sm:hidden hidden-blur-animate suppliers-image tablet:ml-6 tablet:max-w-[1000px] tablet:mx-auto tablet:my-auto"
          alt="suppliers table"
          src={suppliers}
        />
      </div>
      {/* Section carousel  */}
      <div className="container-carousel pl-[4%] pt-[8%] pb-[8%] tablet:pt-[3%] tablet:pb-[4%] stripe-cbt">
        <div className="flex items-center hidden-animate pb-[1%]">
          <h2 className="text-2xl leading-[1.7rem] tablet:text-3xl  tablet:leading-[2rem] block mb-[1%]">
            Theming with
            <br /> Tailwind CSS
          </h2>
        </div>
        <ul id="chapman-carousel" className="carousel">
          <li className="carousel-item-xlg">
            <Image alt="cbt theme" src={cbtlight} />
          </li>
          <li className="carousel-item-xlg">
            <Image alt="jazz theme" src={jazz} />
          </li>
          <li className="carousel-item-xlg">
            <Image alt="internal theme" src={internal} />
          </li>
          <li className="carousel-item-xlg">
            <Image alt="dark mode theme" src={darkmode} />
          </li>
        </ul>
      </div>
      {/* Table section  */}

      <div className={darkTheme ? "dark" : "light"}>
        <div className="bg-white dark:bg-black flex flex-col py-[5%] tablet:py-[2%] px-[4%] content-center">
          <div className="flex pb-[4%] tablet:pb-[0] justify-between items-center">
            <div className="flex hidden-animate tablet:pb-0">
              <h2 className="text-2xl leading-[1.7rem] tablet:text-3xl tablet:leading-[2rem] text-[#37a9d7]">
                Darkmode with <br /> Tailwind CSS
              </h2>
              <p></p>
            </div>
            <div className="flex flex-row gap-2 items-center justify-end pt-[2%] tablet:pt-0">
              <TwButton
                id="toggle-dark"
                className="bg-white border-2 border-black text-black dark:bg-white dark:text-black"
                onClick={toggleDark}
              >
                {darkTheme ? "Toggle light" : "Toggle dark"}
              </TwButton>
              {darkTheme ? (
                <Sun className="text-white" size={30} />
              ) : (
                <Moon className="text-black" size={30} />
              )}
            </div>
          </div>
          <div className="flex gap-4 flex-col desktop:flex-row justify-between">
            {/* ===================== TS Table ===================== */}
            <div className="mt-[4%] tablet:mt-[2%] p-4 border border-[#e4e7ed] rounded-lg">
              <TsTable columns={columns} data={people} />
            </div>
            {/* ===================== Column One ===================== */}
            <div className="cbt-table tablet:mt-[2%]">
              <section className="self-start rounded-2xl shadow-md border border-neutral-200 p-6 mb-6 max-w-lg min-w-min">
                <div className="flex flex-col text-center gap-4">
                  <span className="text-2xl font-bold  text-[#333] dark:text-white">
                    Hello dialog
                  </span>
                  <span className="text-sm dark:text-white">
                    Frothy foam carajillo, irish in barista, milk aged beans
                    single shot a mocha. Acerbic redeye beans strong cup
                    affogato dark viennese latte robust.
                  </span>
                  <div className="flex flex-row gap-4 items-center justify-center">
                    <TwButton id="TwButton" variant={"secondary"}>
                      <span className="flex row justify-between items-center gap-2">
                        Secondary button
                      </span>
                    </TwButton>
                    <TwButton id="myButton" variant="primary">
                      <span className="flex row justify-between items-center gap-2">
                        Primary button{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#FFF"
                          viewBox="0 0 256 256"
                        >
                          <path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path>
                        </svg>
                      </span>
                    </TwButton>
                  </div>
                </div>
              </section>
              <div className="flex gap-2">
                <div className="flex flex-col">
                  <label className="block text-sm font-bold mb-1 text-black dark:text-white">
                    Small input
                  </label>
                  <TwInput id="smallinput" placeholder="Input text" />
                </div>
                <TwButton variant={"primary"} size={"md"} className="self-end">
                  Submit button
                </TwButton>
              </div>
              <hr className="mb-[2%] mt-[4%]" />
              <div className="mt-[4%] mb-[1%]">
                <span className="text-[#333] text-xl dark:text-white">
                  Check list
                </span>
                <div className="flex my-[2%] gap-2">
                  <TwCheckbox />{" "}
                  <span className="text-sm text-black dark:text-white">
                    checkbox one
                  </span>
                </div>
                <div className="flex my-[2%] gap-2">
                  <TwCheckbox />{" "}
                  <span className="text-sm text-black dark:text-white">
                    checkbox two
                  </span>
                </div>
                <div className="flex my-[2%] gap-2">
                  <TwCheckbox />{" "}
                  <span className="text-sm text-black dark:text-white">
                    checkbox three
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-[3%] mb-[5%] bg-black">
        <Back color={"#37a9d7"} text={"CSUF"} link={"./fullerton"} />
        <NextBtn color={"white"} project={"Chapman"} link={"./chapman"} />
      </div>
    </div>
  );
}
