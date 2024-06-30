"use client";
import Hero from "@/components/Hero/Hero";
import RecentWork from "@/components/RecentWork/RecentWork";
import { Services } from "@/components/Serv/Services";
import Lenis from "lenis";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Hero />
      <RecentWork />
      <Services />
    </>
  );
};

export default Home;
