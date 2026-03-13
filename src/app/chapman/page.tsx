"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import DeviceControls, {
  DeviceControlsMobile,
} from "../components/DeviceControls";
import newsroomDesktop from "../images/chapman/newsroom-desktop.png";
import newsroomTablet from "../images/chapman/newsroom-tablet.jpg";
import newsroomMobile from "../images/chapman/newsroom-mobile.jpg";
import Back from "../components/back";
import foundSounds from "../images/chapman/found-sounds.png";
import nextGen from "../images/chapman/next-gen.png";
import soulScholar from "../images/chapman/soul-scholar.png";
import appAwakening from "../images/chapman/app-awakening.png";
import chapForward from "../images/chapman/chapman-forward.png";
import chapForwardGraph from "../images/chapman/chapman-forward-graph.png";
import fowlerWireframe from "../images/chapman/fowler/fowler-wireframe.png";
import landing from "../images/chapman/fowler/landing-page.png";
import fowlertSitemap from "../images/chapman/fowler/fowler-site-map.png";
import fowlerTesting from "../images/chapman/fowler/fowler-testing.png";
import fowlerTrello from "../images/chapman/fowler/fowler-trello.png";
import { ArrowFatLinesRight } from "@phosphor-icons/react";
import NextBtn from "../components/next";

export default function Chapman() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-animation");
        } else {
          entry.target.classList.remove("show-animation");
        }
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
  }, []);

  return (
    <div>
      <div className="flex justify-start pl-[3%] bg-black">
        <Back color={"#a50035"} text={"Home"} link={"./"} />
      </div>
      {/* ============= - Chapman Magazine ============= */}
      <div className="flex flex-col pt-[5%] bg-black">
        <div className="flex flex-col justify-center text-center items-center px-[4%]">
          <div className="mb-6">
            <h2 className="text-[#a50035] text-5xl tablet:text-6xl desktop:text-8xl shidden-blur-animate">
              Chapman <br />
              University
            </h2>
          </div>
          <div className="max-w-3xl flex flex-col justify-center">
            <p className="text-[#DDCBA4] bungee text-xl leading-[1.5rem] tablet:text-3xl hidden-blur-animate">
              I have designed and developed numerous sites for the university
              but Here are just a few projects I worked on.
            </p>
          </div>
        </div>
        <div className="pt-[5%]">
          <div id="chapman-news" className="z-10 deviceset hidden-blur-animate">
            <div
              id="desktop"
              className="device-desktop border border-neutral-200"
            >
              <DeviceControls />
              <Image alt="desktop-newsroom-mock" src={newsroomDesktop} />
            </div>
            <div
              id="tablet"
              className="device-tablet rounded-md border border-neutral-200 "
            >
              <DeviceControlsMobile />
              <div>
                <Image
                  className="border-x border-neutral-200"
                  alt="tablet-newsroom-mock"
                  src={newsroomTablet}
                />
              </div>
              <div className="device-controlsM-bottom"></div>
            </div>
            <div
              id="mobile"
              className="device-mobile rounded-md border border-neutral-200 "
            >
              <DeviceControlsMobile />
              <div>
                <Image
                  className="border-x border-neutral-200"
                  alt="mobile-newsroom-mock"
                  src={newsroomMobile}
                />
              </div>
              <div className="device-controlsM-bottom"></div>
            </div>
          </div>
          <div className="mt-2 text-center">
            <div className="pulse">
              <p className="text-[#a50034] text-sm">
                [ Scroll on each device to see content ]
              </p>
            </div>
            <button className="my-6 px-4 py-2 text-sm tablet:text-lg border text-[#DDCBA4] border-[#a50034]">
              <a href="http://news.chapman.com/magazine">
                Visit Chapman Magazine
              </a>
            </button>
          </div>
        </div>
        <div className="container-carousel py-[5%] pl-[4%]">
          <ul id="chapman-carousel" className="carousel">
            <li className="carousel-item">
              <Image alt="Soul Scholar" src={soulScholar} />
            </li>
            <li className="carousel-item">
              <Image alt="Next Generation" src={nextGen} />
            </li>
            <li className="carousel-item">
              <Image alt="Found Sounds" src={foundSounds} />
            </li>
            <li className="carousel-item">
              <Image alt="Appalacian Awakening" src={appAwakening} />
            </li>
            <li className="carousel-item">
              <Image alt="Chapman Forward Magazine" src={chapForward} />
            </li>
            <li className="carousel-item">
              <Image
                alt="Chapman Forward Magazine graph"
                src={chapForwardGraph}
              />
            </li>
          </ul>
          <div className="flex justify-center items-center mt-4 hidden-animate">
            <p className="bungee text-xl text-[#a50034]">scroll</p>
            <ArrowFatLinesRight
              size={28}
              color="#a50034"
              className="animate-pulse"
            />
          </div>
        </div>
      </div>
      {/* =============== Chapman University =============*/}
      <div className="flex flex-col items-center px-[4%] tablet:px-[3%] py-[5%] stripes-red">
        <div className="flex justify-center items-center gap-6 ">
          <div className="text-right max-w-md desktop:ml-[-5rem]">
            <h2 className="hidden-animate text-2xl">Chapman University</h2>
            <br />
            <p className="hidden-animate text-[#DDCBA4] text-sm leading-[1rem] tablet:text-lg tablet:leading-[1.5rem]">
              In my 3.8 years working at Chapman University I have worked on
              countless college and department websites.{" "}
            </p>
            <br />
            <p className="hidden-animate text-[#DDCBA4] text-sm leading-[1rem] tablet:text-lg tablet:leading-[1.5rem]">
              At my time there I have designed and developed, websites, cms
              widgets, wordpress sites, email templates, and landing pages. I
              was in charge of maintaining styles, meeting accessibilty
              standards, and most importantly making sure all our sites followed
              the{" "}
              <a
                style={{ textDecoration: "underline" }}
                href="https://brand.chapman.edu/"
              >
                Chapman Brand
              </a>
              .
            </p>
            <br />
            <p className="hidden-animate text-[#DDCBA4] text-sm leading-[1rem] tablet:text-lg tablet:leading-[1.5rem]">
              Some of the proejcts I worked on included the
              <a
                style={{ textDecoration: "underline" }}
                href="https://brand.chapman.edu/"
              >
                Chapman Brand site
              </a>
              , the{" "}
              <a
                style={{ textDecoration: "underline" }}
                href="https://news.chapman.edu/"
              >
                Chapman Newsroom
              </a>
              , the{" "}
              <a
                style={{ textDecoration: "underline" }}
                href="https://news.chapman.edu/magazine/"
              >
                Chapman Magazine site
              </a>
              , the{" "}
              <a
                href="https://news.chapman.edu/forward/"
                style={{ textDecoration: "underline" }}
              >
                Chapman Forward site
              </a>
              , and many other department and college sites.
            </p>
          </div>
          <div className="max-w-sm mobile-device">
            <video
              src={require("../video/chapman-nav.mp4")}
              autoPlay
              loop
              muted
            />
          </div>
        </div>
        <div className="hidden-animate mt-[5%]">
          <button className="mb-6 text-sm tablet:text-lg padding-10 border text-[#DDCBA4] border-[#FFF] px-4 py-2">
            <a href="http://chapman.edu">Visit Chapman.edu</a>
          </button>
        </div>
      </div>
      {/* ============ User testing and research ============ */}
      <div className="fowler-bg flex flex-col justify-center">
        <div className="flex flex-row justify-center px-[4%] pt-[4%]">
          <h1 className="text-white text-2xl tablet:text-4xl  text-center">
            User testing and Research
          </h1>
        </div>
        <div className="my-[2%] ml-[2%]">
          <ul id="chapman-carousel" className="carousel">
            <li className="carousel-item-lg">
              <Image alt="Fowler wireframing" src={fowlerWireframe} />
            </li>
            <li className="carousel-item-lg">
              <Image alt="Fowler site map" src={fowlertSitemap} />
            </li>
            <li className="carousel-item-lg">
              <Image alt="Fowler testing" src={fowlerTesting} />
            </li>
            <li className="carousel-item-lg">
              <Image alt="Foweler trello board" src={fowlerTrello} />
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center hidden-animate mb-[3%] tablet:mb-[3%]">
          <p className="bungee text-xl text-white">scroll</p>
          <ArrowFatLinesRight
            size={24}
            color="#fff"
            className="animate-pulse"
          />
        </div>
      </div>
      {/* ============ Fowler School of Engineering ============ */}
      <div className="flex stripes-red pt-[6%] pb-[10%] tablet:pb-[6%] px-[4%]">
        <div className="flex flex-col tablet:flex-row justify-center items-center gap-[3%]">
          <div className="tablet:max-w-md">
            <h2 className="hidden-animate text-white text-2xl tablet:text-4xl text-center tablet:text-left">
              Fowler school of Engineering
            </h2>
            <div className="mt-[2%]">
              <h3 className="hidden-animate  text-[#DDCBA4] text-lg leading-[1.5rem] tablet:text-xl text-center tablet:text-left">
                User testing, site re-organization and site re-design.
              </h3>
            </div>
            <p className="hidden-animate text-center tablet:text-left my-[5%]">
              <button className="bungee mb-6 text-sm tablet:text-md padding-10 border text-[#DDCBA4] border-[#FFF] px-4 py-2">
                <a href="https://www.chapman.edu/engineering/index.aspx">
                  Visit Fowler Engineering
                </a>
              </button>
            </p>
          </div>
          <div className="max-w-3xl">
            <Image
              className="hidden-blur-animate"
              alt="landing-page"
              src={landing}
            />
          </div>
        </div>
      </div>
      {/* ============ Dodge section ============ */}
      <div className="bg-black flex flex-col justify-center items-center py-[4%] px-[4%] text-center">
        {/* <h2 className="text-[#a50034] text-4xl tablet:text-5xl pt-[2%]">
          CMS widgets
        </h2> */}

        <div className="max-w-5xl mt-[2%] px-[1%] pt-[0.5%] border border-[#fff] rounded-md">
          <video src={require("../video/dodge.mp4")} autoPlay loop muted />
        </div>
      </div>
      {/* ============ Back and Next buttons ============ */}
      <div className="flex justify-between px-[3%] mb-[3%]">
        <Back color={"#a50035"} text={"Christopherson"} link={"./cbt"} />
        <NextBtn color={"white"} project={"CSUF"} link={"./fullerton"} />
      </div>
    </div>
  );
}
