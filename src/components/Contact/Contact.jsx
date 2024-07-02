import React from "react";
import { Button } from "../ui/button";

export const Contact = () => {
  return (
    <section className="bg-txt relative z-0 h-[80vh]">
      <div className="container mx-auto bg-txt">
        <h1 className="text-mobsubheading uppercase font-medium md:text-mdsubheading pt-24 mb-20 text-prim">
          (03) Contact
        </h1>
        <div className="flex flex-col justify-center items-center gap-8">
          <p className="text-nav uppercase text-prim">Want to work together?</p>
          <p className="text-heading uppercase text-prim">Let's connect</p>
          <a href="mailto:hello@simondemeulemeester.com">
            <Button variant="footer">hello@simondemeulemeester.com</Button>
          </a>
        </div>
      </div>
    </section>
  );
};
