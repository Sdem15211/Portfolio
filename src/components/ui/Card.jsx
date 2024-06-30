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
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{ scale, top: `${50 * i}px` }}
        className="border-[1px] bg-prim border-txt w-full rounded-[50px] relative shadow p-12"
      >
        <h2 className="text-center xl:text-heading text-mobheading uppercase tracking-tight xl:mb-20 mb-10">
          {title}
        </h2>

        <div className="flex h-full xl:gap-24 gap-12 items-center flex-col xl:flex-row">
          <div className="xl:w-2/5 relative">
            <p className="xl:text-accent text-mobaccent font-regular xl:leading-10 leading-5">
              {description}
            </p>
          </div>

          <div className="xl:w-2/3 w-full xl:h-[370px] h-[200px] relative overflow-hidden rounded-[50px]">
            <motion.div style={{ scale: imageScale }} className="w-full h-full">
              <Image src={`/images/${src}`} fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
