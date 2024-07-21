import { Contact } from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import RecentWork from "@/components/RecentWork/RecentWork";
import { Services } from "@/components/Serv/Services";
import { Technologies } from "@/components/Technologies/Technologies";
import { ReactLenis, useLenis } from "../lib/lenis";
const Home = () => {
  return (
    <>
      <ReactLenis root>
        <Hero />
        <RecentWork />
        <Services />
        <div className="relative overflow-x-hidden">
          <Technologies />
          <Contact />
        </div>
      </ReactLenis>
    </>
  );
};

export default Home;
