import MobileNav from "../Nav/MobileNav";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        {/* Desktop nav */}
        <div className="hidden md:flex pt-2">
          <Nav />
        </div>
        {/* Mobile nav */}
        <div className="md:hidden pt-8 w-full flex justify-end">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
