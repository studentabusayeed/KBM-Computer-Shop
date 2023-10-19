'use client'
import { Badge } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

const NavWishlist = () => {
    return (
        <Link href="/account/user-account/wishlist" className="relative py-3">
         <Badge content="5" size="lg" color="success">

        <FaRegHeart className="h-6 w-6 lg:h-8 lg:w-8 kbm-primary" />
         </Badge>
        
      </Link>
    );
};

export default NavWishlist;