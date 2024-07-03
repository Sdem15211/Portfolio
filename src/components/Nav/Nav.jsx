"use client";

const Nav = () => {
  return (
    <nav className="w-full">
      <ul className="flex justify-between text-nav uppercase font-normal">
        <a href="#services">
          <li>
            <p className="group relative">
              <span>services</span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 duration-500 ease-in-out	 group-hover:w-full bg-black"></span>
            </p>
          </li>
        </a>
        <a href="#work">
          <li>
            <p className="group relative">
              <span>work</span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 duration-500 ease-in-out	 group-hover:w-full bg-black"></span>
            </p>
          </li>
        </a>
        <a href="#contact">
          <li>
            <p className="group relative">
              <span>contact</span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 duration-500 ease-in-out	 group-hover:w-full bg-black"></span>
            </p>
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default Nav;
