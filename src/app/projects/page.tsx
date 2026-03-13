"use client";
import { ArrowFatLeft, ArrowFatRight } from "@phosphor-icons/react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <main className="theme-eightbit h-screen bg-black p-8  text-skin-primary">
        <div className="pb-6">
          <div className=" animate-bounce">
            <Link href="/">
              <ArrowFatLeft size={24} weight="fill" color="#84cc16" />
            </Link>
          </div>
        </div>

        <div className="" id="chapman-box">
          <Link href="/chapman/">
            <span className="flex flex-row flex-start gap-2">
              <div className=" animate-bounce"> Chapman Newsroom  </div>
              <ArrowFatRight size={24}  weight="fill"  className="text-skin-highlight" /> 
            </span>
          </Link>
        </div>
      </main>
    </>
  );
}
