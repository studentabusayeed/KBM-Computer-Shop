import { FaCartPlus } from "react-icons/fa";
import Link from "next/link";

const NavCart = () => {
    // const [cart] = useCartMedicines();
    return (
      <Link href="/" className="relative py-3">
        <FaCartPlus className="h-6 w-6 lg:h-8 lg:w-8 text-my-primary" />
        {/* <small className="absolute bottom-5 left-6 lg:left-8 lg:bottom-7 text-white py-[1px] px-[6px] rounded-full bg-my-accent font-medium">{cart?.length || 0}</small> */}
        <small className="absolute bottom-5 left-6 lg:left-8 lg:bottom-7 text-white py-[1px] px-[6px] rounded-full bg-my-accent font-medium">0</small>
      </Link>
    );
  };
  
  export default NavCart;