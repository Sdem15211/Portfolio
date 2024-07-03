"use client";
import { Card } from "../ui/Card";
import { ServicesDescriptions } from "./data";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export const Services = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="services">
      <div className="container mx-auto">
        <h1
          className="text-mobsubheading uppercase font-medium
      md:text-mdsubheading mb-[80px]"
        >
          (02) Services
        </h1>
        <div className="mb-72" ref={container}>
          {ServicesDescriptions.map((service, i) => {
            const targetScale = 1 - (ServicesDescriptions.length - i) * 0.05;
            return (
              <Card
                i={i}
                key={i}
                {...service}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                progress={scrollYProgress}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
