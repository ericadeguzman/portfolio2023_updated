"use client";
import React, { useRef } from "react";
import Designer from "../components/gsap/Designer";
import Developer from "../components/gsap/Developer";

interface Props {}

function Page(props: Props) {
  const {} = props;
  const trigger1 = useRef<HTMLDivElement>(null);
  const trigger2 = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="h-full px-[10%]">
        <div className="h-[1500px] text-white"></div>

        <Designer />
        <Developer />
        <div className="h-[1500px] text-white"></div>
      </div>
    </>
  );
}

export default Page;
