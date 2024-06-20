import MobilePojects from "./MobilePojects";

const Projects = () => {
  return (
    <section className="container mx-auto">
      {/* desktop */}
      <div className="hidden md:flex">desktop projects section</div>
      {/* mobile */}
      <div className="md:hidden ">
        <MobilePojects />
      </div>
    </section>
  );
};

export default Projects;
