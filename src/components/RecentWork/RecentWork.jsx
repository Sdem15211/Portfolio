"use client";
import DesktopProjects from "./DesktopProjects";
import MobilePojects from "./MobilePojects";

const RecentWork = () => {
  return (
    <section id="work" className="container mx-auto">
      <div className=" mb-52">
        <h1
          className="text-mobsubheading uppercase font-medium
      md:text-mdsubheading mb-[40px]"
        >
          (01) Recent work
        </h1>
        {/* desktop */}
        <div className="hidden lg:flex justify-center items-center">
          <DesktopProjects />
        </div>
        {/* mobile */}
        <div className="lg:hidden">
          <MobilePojects />
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
