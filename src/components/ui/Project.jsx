"use client";
import Image from "next/image";

const Project = ({ title, description, img, color }) => {
  return (
    <div className="min-h-[400px] border-t-[1px] border-[#c9c9c9] last:border-b-[1px] pt-10 pb-5">
      <h2 className="text-mobwork uppercase font-regular md:text-[3rem]">
        {title}
      </h2>
      <p className="text-mobbody md:text-[1rem]">{description}</p>
      <div className="flex justify-center items-center relative w-full">
        <div
          className="absolute w-[320px] h-[200px] md:w-[480px] md:h-[300px] rounded-xl shadow-md"
          style={{ backgroundColor: color }}
        >
          <Image
            src={`/images/${img}`}
            width={270}
            height={0}
            alt="image"
            className="shadow-sm md:w-[380px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
