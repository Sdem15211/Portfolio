"use client";

import cx from "classnames";
import useDetectScroll from "@smakss/react-scroll-direction";

import Link from "next/link";

const headerdata = [
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Nav = () => {
  const { scrollDir } = useDetectScroll();

  return (
    // <nav className="w-full">
    //   <ul className="flex justify-between text-nav uppercase font-normal">
    //     <a href="#services">
    //       <li>
    //         <p className="group relative">
    //           <span>services</span>
    //           <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 duration-500 ease-in-out	 group-hover:w-full bg-black"></span>
    //         </p>
    //       </li>
    //     </a>
    //     <a href="#work">
    //       <li>
    //         <p className="group relative">
    //           <span>work</span>
    //           <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 duration-500 ease-in-out	 group-hover:w-full bg-black"></span>
    //         </p>
    //       </li>
    //     </a>
    //     <a href="#contact">
    //       <li>
    //         <p className="group relative">
    //           <span>contact</span>
    //           <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 duration-500 ease-in-out	 group-hover:w-full bg-black"></span>
    //         </p>
    //       </li>
    //     </a>
    //   </ul>
    // </nav>

    <nav
      className={cx(
        "w-fit h-fit bg-black rounded-full fixed top-8 flex gap-10 items-center justify-between px-3 py-2 duration-300",
        scrollDir === "down" ? "opacity-0" : "opacity-100"
      )}
    >
      {headerdata.map((header, index) => {
        return (
          <Link
            className="text-prim text-mobsubheading lg:text-accent uppercase hover:bg-white hover:text-black duration-300 rounded-3xl px-3 py-1"
            key={index}
            href={header.href}
            onclick={`lenis.scrollTo('${header.href}')`}
          >
            {header.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
