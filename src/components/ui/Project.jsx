"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "./button";

const Project = ({ title, description, img, color, url }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "center start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  return (
    <div
      ref={container}
      className="border-t-[1px] border-[#c9c9c9] last:border-b-[1px] py-10 flex flex-col"
    >
      <div className="flex justify-between">
        <div className="flex flex-col mb-14">
          <h2 className="text-mobwork uppercase font-regular tracking-tight md:text-[3rem]">
            {title}
          </h2>
          <p className="text-mobbody md:text-[1rem]">{description}</p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full mb-10">
        <div
          className="w-[320px] h-[200px] md:w-[480px] md:h-[300px] rounded-xl shadow-md flex justify-center items-center"
          style={{ backgroundColor: color }}
        >
          <motion.div style={{ scale }}>
            <Image
              src={`/images/${img}`}
              width={270}
              height={0}
              alt="image"
              className="shadow-sm md:w-[380px] rounded-xl"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <a href={url}>
          <Button variant="outline" size="work">
            Visit website
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Project;
