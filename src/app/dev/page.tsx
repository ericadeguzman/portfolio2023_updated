"use client";
import { ArrowFatLeft } from "@phosphor-icons/react";
import Link from "next/link";
import Table from "../components/TsTable";
import { columnsPeople } from "../tables/columnsPeople";
import { people } from "../tables/people";

export default function Page() {
  return (
    <>
      <main className="theme-eightbit text-skin-primary p-8 pb-44">
        <div className="pb-6">
          <div className=" animate-bounce">
            <Link href="/">
              <ArrowFatLeft size={24} weight="fill" color="#84cc16" />
            </Link>
          </div>
        </div>
        <article className=" max-w-2xl">
          <h1>Web Development</h1>
          <p className="pt-6">
            As a designer turned dev, I know how important it is for designers
            to have <span className="text-lime">pixel perfect designs</span>.
          </p>
          <p className="pt-6">
            I have experience working with html, css, sass, javascript,
            typescript, react, tailwind and every developers favorite ... email.{" "}
          </p>
        </article>
        {/* <article className="mt-20">
          <Table columns={columnsPeople} data={people}  />
        </article> */}
      </main>
    </>
  );
}
