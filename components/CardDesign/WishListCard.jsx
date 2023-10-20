'use client'
import Link from 'next/link';
import Image from 'next/image';
import image1 from '@/assets/category-img-1.jpg';
// import { Rating, StickerStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { BiCartAdd } from 'react-icons/bi';
import { BsEye, BsHeart, BsHeartFill } from 'react-icons/bs';
import { TbArrowsExchange } from 'react-icons/tb';
import { useState } from 'react';
const WishListCard = () => {


    const [clicked, setClicked] = useState(true);
   

    return (
        <div className="bg-white rounded-md shadow-md lg:shadow-lg border border-transparent border-[#427743] border-opacity-20 overflow-hidden transition-shadow relative group h-fit">
            <p className="kbm-bg-secondary z-10 rounded py-1 px-2 text-xs lg:font-medium text-white absolute top-3 left-3"> -12% OFF</p>
            <div className="card-body space-y-1">
                <div className='relative'>
                    <Image
                        className='md:h-[189px] xl:h-[172px] object-cover transition-all duration-300'
                        src={image1}
                        alt=''
                    />
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col gap-2 absolute right-1 top-1/2 -translate-y-1/2 transition-all duration-300'>
                        <BsEye className='w-5 h-5 p-1 rounded box-content shadow-lg cursor-pointer kbm-bg-white kbm-secondary' />
                        <TbArrowsExchange className='w-5 h-5 p-1 rounded box-content shadow-lg cursor-pointer kbm-bg-white kbm-secondary' />
                       <button  onClick={() => setClicked(!clicked)} >
        {
            clicked ? <BsHeartFill className='w-5 h-5 p-1 rounded box-content shadow-lg
            cursor-pointer kbm-bg-white text-red-500' /> :
      <BsHeart className='w-5 h-5 p-1 rounded box-content shadow-lg cursor-pointer kbm-bg-white text-red-500' />  
      }
                        
                       </button>
                    </div>
                </div>
                <div className='p-2'>
                    <div className="">
                        <p className="text-gray-5 text-[8px] lg:text-[11px]">computer items</p>
                        <Link href={`/details/`}>
                            <h2 className="text-xs lg:text-sm font-medium text-gray-7 tracking-wide hover:underline inline-block hover:cursor-pointer">Univision LED350 17 60Hz AH LED Monitor</h2>
                        </Link>
                    </div>
                    <div className="space-y-2">
                        <div className='flex gap-3 items-center'>
                            {/* <Rating style={{ maxWidth: 60 }} value={4.5} readOnly itemStyles={customStyles} /> */}
                            <span class="bg-[#4277433a] text-xs font-semibold px-2.5 py-0.5 rounded">4.5</span>
                        </div>
                        <p className="inline-flex gap-1">
                            <span className="font-medium text-my-pink inline-flex items-center text-sm lg:text-lg">$9098</span>
                            <span className="inline-flex items-center text-xs lg:text-[15px] text-gray-5 line-through">$564</span>
                        </p>
                    </div>
                </div>
                <button className='kbm-bg-secondary flex items-center gap-1 py-2 px-5 w-5/6 mx-auto justify-center kbm-white rounded-md uppercase' type="button">
                    <BiCartAdd className="text-xs lg:text-xl" /> add to cart
                </button>
            </div>
        </div>
    );
};

export default WishListCard;