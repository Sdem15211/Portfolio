import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <section className="bg-txt">
      <div className="container mx-auto pb-4 flex justify-between items-center text-prim opacity-80">
        <div className="flex gap-2 text-[1.125rem]">
          <a
            href="https://www.instagram.com/simondemeulemeester/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Instagram</p>
          </a>
          <a
            href="https://github.com/Sdem15211"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p>Github</p>
          </a>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-1">
          <p className="text-[1.125rem]">Simon Demeulemeester</p>
          <FaRegCopyright className="translate-y-[8px] w-3 h-3" />
        </div>
        <div className="-translate-y-6">
          <a href="#">
            <FaArrowUp className="w-8 h-12 hover:-translate-y-6 duration-500 ease-out" />
          </a>
        </div>
      </div>
    </section>
  );
};
