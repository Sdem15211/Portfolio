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
    url: "https://phantom.app/",
  },

  {
    title: "Cowboy",
    src: "Cowboy.webp",
    description: "Design & Development",
    color: "#8C8C8C",
    url: "https://cowboy.com/nl",
  },

  {
    title: "Ohm",
    src: "Ohm.webp",
    description: "Development",
    color: "#B6BFC8",
    url: "https://cowboy.com/nl",
  },

  {
    title: "Misuko",
    src: "Misuko.webp",
    description: "Design",
    color: "#706D63",
    url: "https://cowboy.com/nl",
  },
];

const DesktopProjects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className="flex w-full items-center h-screen justify-center">
      <div className="flex w-full flex-col justify-center items-center">
        {projects.map((project, index) => {
          return (
            <Work
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
              description={project.description}
              url={project.url}
            />
          );
        })}
      </div>

      <Modal modal={modal} projects={projects} />
    </div>
  );
};

export default DesktopProjects;
