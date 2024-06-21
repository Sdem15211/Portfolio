"use client";
import { useState } from "react";
import Work from "@/components/ui/Work";
import Modal from "../ui/Modal";
const projects = [
  {
    title: "Phantom",
    src: "Phantom.webp",
    description: "Design & Development",
    color: "#d9d2e9",
  },

  {
    title: "Cowboy",
    src: "Cowboy.webp",
    description: "Design & Development",
    color: "#8C8C8C",
  },

  {
    title: "Ohm",
    src: "Ohm.webp",
    description: "Development",
    color: "#B6BFC8",
  },

  {
    title: "Misuko",
    src: "Misuko.webp",
    description: "Design",
    color: "#706D63",
  },
];

const DesktopProjects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className="flex items-center h-screen justify-center">
      <div className="xl:w-[1240px] lg:w-[960px] md:w-[700px] flex flex-col justify-center items-center">
        {projects.map((project, index) => {
          return (
            <Work
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
              description={project.description}
            />
          );
        })}
      </div>

      <Modal modal={modal} projects={projects} />
    </div>
  );
};

export default DesktopProjects;
