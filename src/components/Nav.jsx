"use client";

import Link from "next/link";

const Nav = () => {
  return (
    <nav className="w-full">
      <ul className="flex justify-between text-nav uppercase font-medium">
        <Link href="#">
          <li>
            <p className="group relative">
              <span>about</span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 duration-500 ease-in-out	 group-hover:w-full bg-black"></span>
            </p>
          </li>
        </Link>
        <Link href="#">
          <li>
            <p className="group relative">
              <span>work</span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 duration-500 ease-in-out	 group-hover:w-full bg-black"></span>
            </p>
          </li>
        </Link>
        <Link href="#">
          <li>
            <p className="group relative">
              <span>contact</span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 duration-500 ease-in-out	 group-hover:w-full bg-black"></span>
            </p>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
