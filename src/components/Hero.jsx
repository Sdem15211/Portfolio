import { MdWavingHand } from "react-icons/md";
import { SlGlobe } from "react-icons/sl";
import Button from "./ui/button";

const Hero = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col mt-[7rem] xl:mt-[4rem] uppercase text-mobHeading font-medium tracking-tighter md:text-work xl:text-Heading">
          <div className="flex gap-2 ">
            <p>Hi</p>
            <MdWavingHand className="-scale-x-100 rotate-12 w-8 h-8 translate-y-[10px] lg:w-[60px] lg:h-[60px] lg:translate-y-[30px] lg:translate-x-2 md:w-[45px] md:h-[45px] md:translate-y-5" />
          </div>
          <p>I'm Simon Demeulemeester</p>
          <p>a web developer</p>
          <div className="flex gap-2">
            <p>based in belgium</p>
            <SlGlobe className="w-8 h-8 translate-y-[10px] lg:w-[60px] lg:h-[60px] lg:translate-y-[30px] lg:translate-x-4 md:w-[45px] md:h-[45px] md:translate-y-5" />
          </div>
        </div>
        <div className="w-full flex justify-end mt-[7.5rem] md:mt-[5rem]">
          <div>button</div>
        </div>
        <div className="flex justify-center">
          <span className="text-mobaccent uppercase font-medium absolute bottom-6">
            (scroll)
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
