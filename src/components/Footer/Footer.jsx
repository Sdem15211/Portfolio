import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-txt">
      <div className="container mx-auto pb-4 flex justify-between items-center text-prim opacity-80">
        <div className="flex flex-col md:flex-row md:gap-2 md:text-[1.125rem] text-mobbody">
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
          <p className="md:text-[1.125rem] text-mobbody text-center">
            Simon <br className="md:hidden" /> Demeulemeester
          </p>
          <FaRegCopyright className="md:translate-y-[8px] translate-y-[22px] md:w-3 md:h-3 w-[10px] h-[10px]" />
        </div>
        <div className="md:-translate-y-6 -translate-y-4">
          <a href="#">
            <FaArrowUp className="w-8 h-12 hover:-translate-y-6 duration-500 ease-out" />
          </a>
        </div>
      </div>
    </footer>
  );
};
