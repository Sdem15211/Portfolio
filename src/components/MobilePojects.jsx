"use client";

import Project from "./ui/Project";

const MobilePojects = () => {
  const works = [
    {
      title: "Project 1",
      description: "Design & Development",
      img: "/assets/webpage1crop.webp",
      right: false,
    },
    {
      title: "Project 2",
      description: "Development",
      img: "/assets/webpage2crop.webp",
      right: true,
    },
    {
      title: "Project 3",
      description: "Design & Development",
      img: "/assets/webpage3crop.webp",
      right: false,
    },
    {
      title: "Project 4",
      description: "Design",
      img: "/assets/webpage4crop.webp",
      right: true,
    },
  ];

  return (
    <div>
      {works.map((work, index) => (
        <Project
          key={index}
          title={work.title}
          description={work.description}
          img={work.img}
          right={work.right}
        />
      ))}
    </div>
  );
};

export default MobilePojects;
