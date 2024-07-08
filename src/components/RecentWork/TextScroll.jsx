"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export const TextScroll = () => {
  const marqueeContainers = useRef([]);

  useEffect(() => {
    const title = document.querySelectorAll(".item h1");
    title.forEach((titleElement) => {
      new SplitType(titleElement, { types: "chars" });
    });

    marqueeContainers.current.forEach((container, index) => {
      let start = "0%";
      let end = "-25%";

      if (index % 2 === 0) {
        start = "0%";
        end = "20%";
      }

      const marquee = container.querySelector(".marquee");
      const words = Array.from(marquee.querySelectorAll(".item h1"));

      gsap.fromTo(
        marquee,
        { x: start },
        {
          x: end,
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "150% top",
            scrub: true,
          },
        }
      );

      words.forEach((word) => {
        const chars = Array.from(word.querySelectorAll(".char"));
        if (chars.length) {
          const reverse = index % 2 !== 0;
          gsap.fromTo(
            chars,
            { fontWeight: 200 },
            {
              fontWeight: 800,
              duration: 1,
              ease: "none",
              stagger: {
                each: 0.35,
                from: reverse ? "start" : "end",
                ease: "linear",
              },
              scrollTrigger: {
                trigger: container,
                start: "50% bottom",
                end: "top top",
                scrub: true,
              },
            }
          );
        }
      });
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !marqueeContainers.current.includes(el)) {
      marqueeContainers.current.push(el);
    }
  };

  return (
    <section className="w-full lg:h-[150vh] h-[100vh] flex flex-col justify-center overflow-hidden">
      <Link href="https://phantom.app/" target="_blank">
        <div
          className="relative lg:w-[125%] lg:h-[250px] w-[250%] h-[150px] flex mb-5 overflow-hidden -left-[25%]"
          id="marquee-1"
          ref={(el) => addToRefs(el)}
        >
          <div className="w-full h-full absolute top-[50%] left-0 -translate-y-1/2 flex gap-2 marquee items-center">
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1">
              <Image
                src={`/images/Phantom_1.webp`}
                fill
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center items-center flex-1 lg:flex-[1.3] item">
              <h1 className="text-black text-3xl lg:text-work uppercase tracking-tight">
                <span className="char">P</span>
                <span className="char">h</span>
                <span className="char">a</span>
                <span className="char">n</span>
                <span className="char">t</span>
                <span className="char">o</span>
                <span className="char">m</span>
              </h1>
            </div>
            <div className="relative h-[180px] flex justify-center items-center flex-1">
              <Image
                src={`/images/Phantom_2.webp`}
                fill
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1">
              <Image
                src={`/images/Phantom_3.webp`}
                fill
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1">
              <Image
                src={`/images/Phantom_4.webp`}
                fill
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Link>
      <Link href="https://cowboy.com/nl" target="_blank">
        <div
          className="relative lg:w-[125%] lg:h-[250px] w-[250%] h-[150px] flex mb-5 overflow-hidden -left-[35%] lg:left-0"
          id="marquee-2"
          ref={(el) => addToRefs(el)}
        >
          <div className="w-full h-full absolute top-[50%] left-0 -translate-y-1/2 flex gap-2 marquee items-center">
            <div className="relative  w-[200px] h-[180px] flex justify-center items-center flex-1">
              <Image
                src={`/images/Cowboy_1.webp`}
                fill
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative  w-[200px] h-[180px] flex justify-center items-center flex-1">
              <Image
                src={`/images/Cowboy_2.webp`}
                fill
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1">
              <Image
                src={`/images/Cowboy_3.webp`}
                fill
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center items-center flex-1 lg:flex-[1.3] item">
              <h1 className="text-black text-3xl lg:text-work uppercase tracking-tight">
                <span className="char">C</span>
                <span className="char">o</span>
                <span className="char">w</span>
                <span className="char">b</span>
                <span className="char">o</span>
                <span className="char">y</span>
              </h1>
            </div>
            <div className="relative  w-[200px] h-[180px] flex justify-center items-center flex-1">
              <Image
                src={`/images/Cowboy_4.webp`}
                fill
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Link>
      <Link href="https://ohm.studio/" target="_blank">
        <div
          className="relative lg:w-[125%] lg:h-[250px] w-[250%] h-[150px] flex mb-5 overflow-hidden -left-[25%]"
          id="marquee-3"
          ref={(el) => addToRefs(el)}
        >
          <div className="w-full h-full absolute top-[50%] left-0 -translate-y-1/2 flex gap-2 marquee items-center">
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1">
              <Image
                src={`/images/Ohm_1.webp`}
                fill
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center items-center flex-1 lg:flex-[1.3] item">
              <h1 className="text-black text-3xl lg:text-work uppercase tracking-tight">
                <span className="char">O</span>
                <span className="char">h</span>
                <span className="char">m</span>
              </h1>
            </div>
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1">
              <Image
                src={`/images/Ohm_2.webp`}
                fill
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1">
              <Image
                src={`/images/Ohm_3.webp`}
                fill
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1">
              <Image
                src={`/images/Ohm_4.webp`}
                fill
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Link>
      <Link href="https://misuko.be/nl" target="_blank">
        <div
          className="relative lg:w-[125%] lg:h-[250px] w-[250%] h-[150px] flex mb-5 overflow-hidden -left-[35%] lg:left-0"
          id="marquee-4"
          ref={(el) => addToRefs(el)}
        >
          <div className="w-full h-full absolute top-[50%] left-0 -translate-y-1/2 flex gap-2 marquee items-center">
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1">
              <Image
                src={`/images/Misuko_1.webp`}
                fill
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1">
              <Image
                src={`/images/Misuko_2.webp`}
                fill
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1">
              <Image
                src={`/images/Misuko_3.webp`}
                fill
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center items-center flex-1 lg:flex-[1.3] item">
              <h1 className="text-black text-3xl lg:text-work uppercase tracking-tight">
                <span className="char">M</span>
                <span className="char">i</span>
                <span className="char">s</span>
                <span className="char">u</span>
                <span className="char">k</span>
                <span className="char">o</span>
              </h1>
            </div>
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1">
              <Image
                src={`/images/Misuko_4.webp`}
                fill
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};
