import React from "react";
import { Bricks, GSAP, Nextjs, ReactIcon, Tailwind, Wordpress } from "../Icons";
import { motion } from "framer-motion";

const logos = [
  {
    component: <Nextjs />,
    href: "https://nextjs.org",
  },
  {
    component: <ReactIcon />,
    href: "https://react.dev/",
  },
  {
    component: <Tailwind />,
    href: "https://tailwindcss.com/",
  },
  {
    component: <GSAP />,
    href: "https://gsap.com/",
  },
  {
    component: <Wordpress />,
    href: "https://wordpress.com/",
  },
  {
    component: <Bricks />,
    href: "https://bricksbuilder.io/",
  },
];

export const Slider = () => {
  return (
    <div className="relative mb-40">
      <div className="flex relative justify-between">
        {logos.map((logo, index) => {
          return (
            <div
              key={index}
              className="flex items-center hover:scale-110 duration-200"
            >
              <a href={logo.href} target="_blank">
                {logo.component}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
