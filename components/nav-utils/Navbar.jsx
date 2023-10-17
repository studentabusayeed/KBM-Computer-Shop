import Logo from "./Logo";
import Search from "./Search";
import NavCart from "./NavCart";
import Language from "./Lang";
import NavAvatar from "./NavAvatar";

const Navbar = () => {


  return (
      <div
        className={`w-full bg-white transition-all relative top-0 z-50 duration-700 ease-in-out`}
      >
        <div className="nav-container">
          <div className="hidden xl:block">
            <div className="flex items-center py-2 justify-between">
                <Logo />
                <Search />
              
              <div className="flex items-center gap-4 lg:gap-10">
                <Language />
                <NavCart />
              <NavAvatar/>
                
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-3" />
      </div>
  );
};

export default Navbar;
