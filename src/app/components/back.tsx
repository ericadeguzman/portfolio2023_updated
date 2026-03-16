import { ArrowFatLeft } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

interface Props {
  color: string;
  text: string;
  link: string;
}

export default function Back(props: Props) {
  const {} = props;

  return (
    <div className="flex flex-row justify-center mt-[4%] pt-14">
      <div className="animate-bounce">
        <Link
          className={`bungee flex flex-row justify-center text-[${props.color}]`}
          href={props.link}
        >
          <ArrowFatLeft size={24} weight="fill" color={props.color} />
          <p className="bungee" style={{ color: `${props.color}` }}>
            {" "}
            {props.text}
          </p>
        </Link>
      </div>
    </div>
  );
}
