import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export const Modal = ({ modal, projects }) => {
  const { active, index } = modal;
  const container = useRef(null);
  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      moveContainerX(clientX);
      moveContainerY(clientY);
    });
  }, []);
  return (
    <motion.div
      ref={container}
      variants={scaleAnimation}
      initial="initial"
      animate={active ? "enter" : "closed"}
      className="h-[370px] w-[380px] flex items-center justify-center overflow-hidden absolute pointer-events-none"
    >
      <div
        style={{ top: index * -100 + "%" }}
        className="h-full w-full absolute ease-[cubic-bezier(0.76, 0, 0.24, 1)] duration-500 transition-[top]"
      >
        {projects.map((project, index) => {
          const { src, color } = project;
          return (
            <div
              className="relative h-full flex justify-center items-center"
              style={{ backgroundColor: color }}
              key={`modal_${index}`}
            >
              <Image
                src={`/assets/${src}`}
                width={300}
                height={0}
                alt="image"
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
