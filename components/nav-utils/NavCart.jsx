'use client'
import { FaCartPlus } from "react-icons/fa";
import Link from "next/link";
import { Badge } from "@nextui-org/react";

const NavCart = () => {
    // const [cart] = useCartMedicines();
    return (
      <Link href="/account/user-account/my-cart" className="relative py-3">
       <Badge content="15" size="lg" color="success">

        <FaCartPlus className="h-6 w-6 lg:h-8 lg:w-8 kbm-primary" />
       </Badge>
      
      </Link>
    );
  };
  
  export default NavCart;