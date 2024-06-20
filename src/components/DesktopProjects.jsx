"use client";
import React from "react";
import { useState } from "react";
import Project from "./Project";

const DesktopProjects = () => {
  const projects = [
    {
      title: "Project 1",
      src: "webpage1crop.webp",
      color: "#000000",
    },
    {
      title: "Project 2",
      src: "webpage2crop.webp",
      color: "#8C8C8C",
    },
    {
      title: "Project 3",
      src: "webpage3crop.webp",
      color: "#EFE8D3",
    },
    {
      title: "Project 4",
      src: "webpage4crop.webp",
      color: "#706D63",
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <section className="w-full">
      <div>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              index={index}
              title={project.title}
              setModal={setModal}
            />
          );
        })}
      </div>
    </section>
  );
};

export default DesktopProjects;
