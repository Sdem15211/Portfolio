"use client";

import Project from "../ui/Project";

const MobilePojects = () => {
  const works = [
    {
      title: "Phantom",
      img: "Phantom.webp",
      description: "Design & Development",
      color: "#d9d2e9",
      url: "https://phantom.app/",
    },

    {
      title: "Cowboy",
      img: "Cowboy.webp",
      description: "Design & Development",
      color: "#8C8C8C",
      url: "https://phantom.app/",
    },

    {
      title: "Ohm",
      img: "Ohm.webp",
      description: "Development",
      color: "#B6BFC8",
      url: "https://phantom.app/",
    },

    {
      title: "Misuko",
      img: "Misuko.webp",
      description: "Design",
      color: "#706D63",
      url: "https://phantom.app/",
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
          color={work.color}
          url={work.url}
        />
      ))}
    </div>
  );
};

export default MobilePojects;
