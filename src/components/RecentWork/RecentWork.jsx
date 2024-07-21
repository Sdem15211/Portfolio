"use client";
import MobilePojects from "./MobilePojects";
import { TextScroll } from "./TextScroll";
import { motion } from "framer-motion";

const RecentWork = () => {
  return (
    <section id="work" className="mb-40 scroll-mt-28">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-mobsubheading uppercase font-medium
      md:text-mdsubheading mb-[40px]"
        >
          (01) Recent work
        </motion.h1>
      </div>
      <div className="hidden lg:flex justify-center items-center">
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
