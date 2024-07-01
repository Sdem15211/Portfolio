import React, { useRef } from "react";
import { Bricks, GSAP, Nextjs, ReactIcon, Tailwind, Wordpress } from "../Icons";
import Marquee from "react-fast-marquee";
import { Slider } from "./Slider";
import { motion, useScroll, useTransform } from "framer-motion";

export const Technologies = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], [50, 0]);
  return (
    <section>
      <div ref={container} className="flex flex-col relative mb-[100vh] z-[1]">
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
        <motion.div style={{ height }} className="relative mt-24">
          <div className="shadow-[0_60px_50px_rgba(0,0,0,0.75)] absolute h-[1550%] w-[120%] -left-[10%] bg-prim rounded-br-[50%] rounded-bl-[50%] z-[1]"></div>
        </motion.div>
      </div>
    </section>
  );
};
