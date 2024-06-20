"use client";

import Image from "next/image";

const Project = ({ title, description, img, right }) => {
  return (
    <section>
      <div className="flex flex-col gap-9 my-[75px]">
        <div className={`flex flex-col gap-3 ${right ? "items-end" : ""}`}>
          <h1 className="text-mobwork uppercase font-regular">{title}</h1>
          <p className="text-mobbody capitalize font-medium">{description}</p>
        </div>
        <div className="flex justify-center">
          <a href="">
            <div className="w-[340px] h-[200px] relative rounded-md overflow-hidden shadow-md">
              <Image
                src={img}
                fill
                className="object-cover object-top rounded-md hover:scale-105 duration-300 ease-out"
                quality={100}
              ></Image>
            </div>
          </a>
        </div>
        <div className="w-full h-[1px] bg-txt mt-[40px]"></div>
      </div>
    </section>
  );
};

export default Project;
