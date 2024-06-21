"use client";
import React from "react";
import { useState } from "react";
import Project from "./Project";
import { Modal } from "./ui/Modal";
const DesktopProjects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Design & Development",
      src: "webpage1crop.webp",
      color: "#000000",
    },
    {
      title: "Project 2",
      description: "Development",
      src: "webpage2crop.webp",
      color: "#8C8C8C",
    },
    {
      title: "Project 3",
      description: "Design & Development",
      src: "webpage3crop.webp",
      color: "#EFE8D3",
    },
    {
      title: "Project 4",
      description: "Design",
      src: "webpage4crop.webp",
      color: "#706D63",
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div className="w-full">
      <div>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              setModal={setModal}
            />
          );
        })}
      </div>
      <Modal projects={projects} modal={modal} />
    </div>
  );
};

export default DesktopProjects;
