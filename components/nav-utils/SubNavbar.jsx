'use client'
// import { Divider } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { FaCartPlus, FaCreditCard, FaHeart, FaShoppingBag, FaSignOutAlt, FaThumbsUp, FaTicketAlt, FaUser } from "react-icons/fa";

const SubNavbar = () => {


    const routers = [
        {
            path: '/profile',
            title: 'Profile',
            icon: <FaUser/>
        },
        {
            path: '/orders',
            title: 'Orders',
            icon: <FaShoppingBag/>
        },
        {
            path: '/transaction',
            title: 'Transaction',
            icon: <FaCreditCard/>
        },
        {
            path: '/wishlist',
            title: 'Wishlist',
            icon: <FaHeart/>
        },
        {
            path: '/my-cart',
            title: 'My Cart',
            icon: <FaCartPlus/>
        },
        {
            path: '/vouchers',
            title: 'Vouchers',
            icon: <FaTicketAlt/>
        },
        {
            path: '/my-reviews',
            title: 'My Reviews',
            icon: <FaThumbsUp/>
        },
        {
            path: '/logout',
            title: 'Logout',
            icon: <FaSignOutAlt/>
            
        },
    ]

    return (
       
      <div className="hidden xl:block sticky bg-white z-40 top-0">
      <div className="nav-container">
        <div className="py-2">
          <ul className="flex items-center justify-between text-md font-semibold text-gray-5 hover:text-gray-6 py-1 2xl:py-2">
         {
          routers.map(route => <li key={route.path}>
            <Link href={route?.path}>
           <span className="border-r pr-5"> {route?.title}
           </span>
            </Link>
          </li>)
         }
          </ul>
        </div>
      </div>
      <hr className=" border-1 border-gray-3 drop-shadow-xl" />
    </div>
    );
};

export default SubNavbar;