"use client"
import Image from 'next/image';

import image1 from '@/assets/category-img-1.jpg'
import image2 from '@/assets/category-img-2.webp'
import image3 from '@/assets/category-img-3.jpeg'
import image4 from '@/assets/category-img-4.webp'

const CategoryCard = () => {
    return (
        <div className="bg-white flex justify-center items-center flex-col relative my-10 py-6 px-6 rounded-xl cursor-pointer border-2 border-gray-3 hover:border-[#427743] group ease-in-out duration-500">
            <h2 className="bg-white text-center font-semibold border-2 border-gray-3 group-hover:border-[#427743] whitespace-nowrap absolute -top-3 text-sm px-2 rounded-full ease-in-out duration-500">
                Computer Items
            </h2>
            <Image
                className='h-28 w-full object-cover'
                src={image1}
                alt='Category Image'
            />
        </div>
    );
};

export default CategoryCard;