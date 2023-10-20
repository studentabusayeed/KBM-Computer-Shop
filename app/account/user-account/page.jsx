import React from 'react';
import Image from 'next/image'
import userLogo from '@/assets/empty-user-logo.png'
import AccountCard from '@/components/AccountCard';
import {FaAddressBook, FaCartPlus, FaCreditCard, FaHeart, FaShoppingBag, FaSignOutAlt, FaThumbsUp, FaTicketAlt, FaUser} from 'react-icons/fa'
const UserAccount = () => {
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
        <div className='main-container border'>
          <section>
        <section className='flex flex-col justify-center p-3'>
<div> <Image alt='' src={userLogo} className='w-20 h-20 rounded-full'></Image></div>
<p className="text-3xl mt-3">Hi, nmc</p>
        </section>

        <section></section>

          </section>
          <section className='mt-4 grid grid-cols-4 gap-4 mx-auto'>
{
    routers.map((route) => <AccountCard key={route?.path} route={route} />)
}
          </section>
        </div>
    );
};

export default UserAccount;