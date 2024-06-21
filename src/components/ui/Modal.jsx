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

const Modal = ({ projects, modal }) => {
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
      const { pageX, pageY } = e;
      moveContainerX(pageX);
      moveContainerY(pageY);
    });
  }, []);

  return (
    <motion.div
      ref={container}
      variants={scaleAnimation}
      initial="initial"
      animate={active ? "enter" : "closed"}
      className=" rounded-xl h-[300px] w-[350px] flex justify-center items-center absolute overflow-hidden pointer-events-none"
    >
      <div
        style={{ top: index * -100 + "%" }}
        className="h-full w-full absolute duration-500 transition-[top] ease-[cubic-bezier(0.76, 0, 0.24, 1)]"
      >
        {projects.map((project, index) => {
          const { src, color } = project;

          return (
            <div
              className="relative w-full h-full flex items-center justify-center"
              style={{ backgroundColor: color }}
              key={`modal_${index}`}
            >
              <Image
                src={`/images/${src}`}
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

export default Modal;
