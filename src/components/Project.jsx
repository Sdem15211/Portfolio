import React from "react";

const Project = ({ index, title, setModal, description }) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
      className="flex justify-between w-full items-center cursor-pointer border-t-[1px] border-[#c9c9c9] duration-200 last:border-b-[1px] last:border-[#c9c9c9] hover:opacity-50 group py-16"
    >
      <h2 className="text-work uppercase font-medium group-hover:-translate-x-3.5 duration-500 ease-in-out">
        {title}
      </h2>
      <p className="text-body capitalize font-medium group-hover:translate-x-3.5 duration-500 ease-in-out">
        {description}
      </p>
    </div>
  );
};

export default Project;
