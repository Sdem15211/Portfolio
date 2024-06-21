"use client";
import { MdWavingHand } from "react-icons/md";
import { SlGlobe } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: ["developer", "designer"],
    loop: 0,
    typeSpeed: 150,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });
  return (
    <section className="h-full mb-[10rem]">
      <div className="container mx-auto">
        <div className="flex flex-col mt-[7rem] xl:mt-[3.8rem] uppercase text-mobHeading font-medium tracking-tight md:text-mdheading lg:text-work xl:text-Heading">
          <div className="flex gap-2 ">
            <p>Hi</p>
            <MdWavingHand className="-scale-x-100 rotate-12 w-8 h-8 translate-y-[10px] xl:w-[60px] xl:h-[60px] xl:translate-y-[30px] lg:translate-x-2 md:w-[45px] md:h-[45px] md:translate-y-3" />
          </div>
          <p>
            I'm Simon <br className="md:hidden" /> Demeulemeester
          </p>
          <div className="flex gap-3">
            <p>a web</p>
            <div>
              <span>{typeEffect}</span>
              <Cursor cursorStyle="_" />
            </div>
          </div>
          <div className="flex gap-2">
            <p>based in belgium</p>
            <SlGlobe className="w-8 h-8 translate-y-[10px] xl:w-[60px] xl:h-[60px] xl:translate-y-[30px] lg:translate-x-4 md:w-[45px] md:h-[45px] md:translate-y-3" />
          </div>
        </div>
        <div className="w-full flex justify-end mt-[7.5rem] lg:mt-[3.5rem]">
          <a href="mailto:hello@simondemeulemeester.com">
            <Button variant="outline">hello@simondemeulemeester.com</Button>
          </a>
        </div>
        <div className="flex justify-center">
          <span className="text-mobaccent xl:text-accent uppercase font-medium mt-[9.5rem] xl:mt-11 opacity-80">
            (scroll)
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
