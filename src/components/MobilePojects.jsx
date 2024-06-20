import Project from "./ui/Project";

const MobilePojects = () => {
  const works = [
    {
      title: "Project 1",
      description: "Design & Development",
      img: "",
      right: false,
    },
    {
      title: "Project 2",
      description: "Development",
      img: "",
      right: true,
    },
    {
      title: "Project 3",
      description: "Design & Development",
      img: "",
      right: false,
    },
    {
      title: "Project 4",
      description: "Design",
      img: "",
      right: true,
    },
  ];

  return (
    <div>
      <h1 className="text-mobsubheading uppercase font-semibold mb-[70px]">
        (01) Recent work
      </h1>
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
