import DesktopProjects from "./DesktopProjects";
import MobilePojects from "./MobilePojects";
import { TextScroll } from "./TextScroll";

const RecentWork = () => {
  return (
    <section id="work" className="mb-40 scroll-mt-28">
      <div className="container mx-auto">
        <h1
          className="text-mobsubheading uppercase font-medium
      md:text-mdsubheading mb-[40px]"
        >
          (01) Recent work
        </h1>
      </div>
      <div className="hidden lg:flex justify-center items-center">
        {/* <DesktopProjects /> */}
        <TextScroll />
      </div>
      <div className="container mx-auto">
        <div className="lg:hidden">
          <MobilePojects />
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
