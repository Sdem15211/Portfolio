"use client";

import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Card = ({
  i,
  title,
  description,
  src,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "center start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="flex items-center justify-center sticky -top-2 pt-10"
    >
      <motion.div
        style={{ scale, top: `${50 * i}px` }}
        className="border-[1px] bg-prim border-txt rounded-[50px] relative shadow lg:p-12 p-6"
      >
        <h2 className="text-center lg:text-mdheading xl:text-heading text-mobheading uppercase tracking-tight lg:mb-20 mb-10">
          {title}
        </h2>

        <div className="flex h-full lg:gap-24 gap-12 items-center flex-col lg:flex-row">
          <div className="lg:w-2/5  relative">
            <p className="lg:text-[1rem]  text-mobaccent uppercase font-regular xl:leading-10 leading-7">
              {description}
            </p>
          </div>

          <div className="lg:w-1/2 w-[280px] lg:h-[350px] h-[200px] relative overflow-hidden rounded-[50px]">
            <motion.div style={{ scale: imageScale }} className="w-full h-full">
              <Image src={`/images/${src}`} fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
