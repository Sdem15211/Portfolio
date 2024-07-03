import Link from "next/link";
import React from "react";

export default function Work({ index, title, setModal, description, url }) {
  return (
    <a
      className="w-full flex justify-between items-center"
      href={url}
      target="_blank"
    >
      <div
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
        className="group duration-300 hover:opacity-50 w-full flex justify-between items-center py-[40px] border-t-[1px] border-[#c9c9c9] last:border-b-[1px]"
      >
        <h2 className="text-work uppercase font-regular duration-300 group-hover:-translate-x-[10px] pointer-events-none">
          {title}
        </h2>
        <p className="font-regular text-body duration-300 group-hover:translate-x-[10px] pointer-events-none">
          {description}
        </p>
      </div>
    </a>
  );
}
