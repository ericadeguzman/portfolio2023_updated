import { ArrowFatLeft, ArrowFatRight } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

interface Props {
  color: string;
  project: string;
  link: string;
}

export default function NextBtn(props: Props) {
  const {} = props;

  return (
    <div className="flex flex-row justify-center mt-[4%]">
      <div className="animate-bounce">
        <Link
          className={`flex flex-row justify-center text-[${props.color}]`}
          href={props.link}
        >
          <p className="bungee" style={{ color: `${props.color}` }}>
            {" "}
            {props.project}
          </p>
          <ArrowFatRight size={24} weight="fill" color={props.color} />
        </Link>
      </div>
    </div>
  );
}
