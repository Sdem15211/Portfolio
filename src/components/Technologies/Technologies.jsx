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
import { Slider } from "./Slider";

export const Technologies = () => {
  return (
    <section className="h-[500px]">
      <div className="container mx-auto">
        <h1 className="text-mobsubheading uppercase font-medium md:text-mdsubheading mb-[40px]">
          Technologies used
        </h1>
      </div>
      <Marquee style={{ height: "200px" }} autoFill speed={75}>
        <div className="flex items-center px-16 hover:scale-110 duration-300 ease-out">
          <a href="https://nextjs.org/" target="_blank">
            <Nextjs />
          </a>
        </div>
        <div className="flex items-center px-16 hover:scale-110 duration-300 ease-out">
          <a href="https://react.dev/" target="_blank">
            <ReactIcon />
          </a>
        </div>
        <div className="flex items-center px-16 hover:scale-110 duration-300 ease-out">
          <a href="https://tailwindcss.com/" target="_blank">
            <Tailwind />
          </a>
        </div>
        <div className="flex items-center px-16 hover:scale-110 duration-300 ease-out">
          <a href="https://gsap.com/" target="_blank">
            <GSAP />
          </a>
        </div>
        <div className="flex items-center px-16 hover:scale-110 duration-300 ease-out">
          <a href="https://wordpress.com/" target="_blank">
            <Wordpress />
          </a>
        </div>
        <div className="flex items-center px-16 hover:scale-110 duration-300 ease-out">
          <a href="https://bricksbuilder.io/" target="_blank">
            <Bricks />
          </a>
        </div>
      </Marquee>
      {/* <Slider /> */}
    </section>
  );
};
