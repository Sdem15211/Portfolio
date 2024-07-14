import MobileNav from "../Nav/MobileNav";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header className="z-[9999] fixed w-full">
      <div className="container mx-auto">
        <div className="hidden md:flex mt-8 justify-center items-center">
          <Nav />
        </div>
        <div className="md:hidden -mt-20 w-full flex justify-end">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
