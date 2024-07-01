import React from "react";
import {
  Bricks,
  CSS,
  FramerMotion,
  GSAP,
  HTML,
  Javascript,
  Nextjs,
  ReactIcon,
  Tailwind,
  Wordpress,
} from "../Icons";
import Marquee from "react-fast-marquee";

export const Technologies = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-mobsubheading uppercase font-medium md:text-mdsubheading mb-[40px]">
          Technologies used
        </h1>
      </div>
      <Marquee style={{ height: "200px" }} autoFill speed={100}>
        <div className="flex items-center px-14 hover:scale-110 duration-200">
          <a href="https://nextjs.org/" target="_blank">
            <Nextjs />
          </a>
        </div>
        <div className="flex items-center px-14 hover:scale-110 duration-200">
          <a href="https://react.dev/" target="_blank">
            <ReactIcon />
          </a>
        </div>
        <div className="flex items-center px-14 hover:scale-110 duration-200">
          <a href="https://tailwindcss.com/" target="_blank">
            <Tailwind />
          </a>
        </div>
        {/* <div className="flex items-center px-14 hover:scale-110 duration-200">
          <HTML />
        </div>
        <div className="flex items-center px-14 hover:scale-110 duration-200">
          <CSS />
        </div>
        <div className="flex items-center px-14 hover:scale-110 duration-200">
          <Javascript />
        </div> */}
        <div className="flex items-center px-14 hover:scale-110 duration-200">
          <a href="https://gsap.com/" target="_blank">
            <GSAP />
          </a>
        </div>
        <div className="flex items-center px-14 hover:scale-110 duration-200">
          <a href="https://wordpress.com/" target="_blank">
            <Wordpress />
          </a>
        </div>
        <div className="flex items-center px-14 hover:scale-110 duration-200">
          <a href="https://bricksbuilder.io/" target="_blank">
            <Bricks />
          </a>
        </div>
      </Marquee>
    </>
  );
};
