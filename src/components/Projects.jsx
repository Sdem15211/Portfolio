"use client";
import DesktopProjects from "./DesktopProjects";
import MobilePojects from "./MobilePojects";

const Projects = () => {
  return (
    <section className="container mx-auto">
      <h1
        className="text-mobsubheading uppercase font-semibold xl:text-subheading
      md:text-mdsubheading md:mb-[80px]"
      >
        (01) Recent work
      </h1>
      {/* desktop */}
      <div className="hidden md:flex">
        <DesktopProjects />
      </div>
      {/* mobile */}
      <div className="md:hidden ">
        <MobilePojects />
      </div>
    </section>
  );
};

export default Projects;
