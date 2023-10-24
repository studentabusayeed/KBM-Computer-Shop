import Logo from "./Logo";
import Search from "./Search";
import NavCart from "./NavCart";
import Language from "./Lang";
import NavAvatar from "./NavAvatar";
import NavWishlist from "@/components/nav-utils/NavWishlist";

const Navbar = () => {


  return (
    <div
      className={`w-full bg-white transition-all relative top-0 z-50 duration-700 ease-in-out border-b border-gray-200`}
    >
      <div className="max-w-[1280px] w-full mx-auto px-3">
        <div>
          <div className="flex items-center py-2 justify-between">
            <Logo />
            <Search />

            <div className="flex items-center gap-4 lg:gap-10">
              <Language />
              <NavWishlist />
              <NavCart />
              <NavAvatar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
