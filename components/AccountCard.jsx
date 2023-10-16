'use client'
import { Card, CardBody, CardFooter } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
const AccountCard = ({route}) => {
    const {path, title, icon} = route;
    return (
        <Link href={`user-account${path}`}>
            

<Card isHoverable={true} className="border shadow-md hover:border-[#329f2a] py-5 transition-all">
   
      <CardBody>
        <div className='flex flex-col justify-center items-center gap-3 '>
            <p className="text-3xl">{icon}</p>
            <p className='text-2xl font-semibold tracking-wider'>{title}</p>
            </div>
      </CardBody>
    </Card>
        </Link>
    );
};

export default AccountCard;