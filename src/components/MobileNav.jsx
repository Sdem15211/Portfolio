"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <p className="text-mobnav font-medium uppercase hover:text-slate-700 duration-300">
          menu
        </p>
      </SheetTrigger>
      <SheetContent>
        <div className="h-full flex flex-col items-start justify-center gap-5">
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            href="/"
          >
            <p className="relative group">
              <span className="text-mobHeading uppercase font-medium text-prim">
                Services
              </span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 duration-500 ease-in-out	 group-hover:w-full bg-prim"></span>
            </p>
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, ease: "easeInOut", duration: 0.8 }}
            href="/"
          >
            <p className="relative group">
              <span className="text-mobHeading uppercase font-medium text-prim">
                work
              </span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 duration-500 ease-in-out	 group-hover:w-full bg-prim"></span>
            </p>
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, ease: "easeInOut", duration: 0.8 }}
            href="/"
          >
            <p className="relative group">
              <span className="text-mobHeading uppercase font-medium text-prim">
                contact
              </span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 duration-500 ease-in-out	 group-hover:w-full bg-prim"></span>
            </p>
          </motion.a>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
