import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        {/* Desktop nav */}
        <div className="hidden md:flex pt-1">
          <Nav />
        </div>
        {/* Mobile nav */}
        <div className="md:hidden py-8 w-full flex justify-end">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
