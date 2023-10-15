
'use client'
import React, { useRef, useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import './HomeBanner.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import banner1 from '@/assets/banner1.webp';
import banner2 from '@/assets/banner2.webp';
import banner3 from '@/assets/banner3.webp';
import banner4 from '@/assets/banner4.webp';
import banner5 from '@/assets/banner5.webp';
import banner6 from '@/assets/banner6.png';
import banner7 from '@/assets/banner7.webp';
// import required modules
import { Pagination, Navigation, Autoplay} from 'swiper/modules';

const HomeBanner = () => {
    return (
        <div className='h-full w-9/12 ml-auto rounded-xl'>
              <Swiper 
               navigation={true}
               pagination={{
                clickable: true,
              }}
               autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
               modules={[Pagination, Navigation, Autoplay]} 
               className="mySwiper h-full rounded-xl">

        <SwiperSlide className='w-9/12 h-3/4 text-center'>
            <Image 
            className='h-full w-full'
            src={banner1}
            alt=''
            />
        </SwiperSlide>
        <SwiperSlide className='w-9/12 h-3/4 text-center'>
            <Image 
            className='h-full w-full'
            src={banner2}
            alt=''
            />
        </SwiperSlide>
        <SwiperSlide className='w-9/12 h-3/4 text-center'>
            <Image 
            className='h-full w-full'
            src={banner3}
            alt=''
            />
        </SwiperSlide>
        <SwiperSlide className='w-9/12 h-3/4 text-center'>
            <Image 
            className='h-full w-full'
            src={banner4}
            alt=''
            />
        </SwiperSlide>
        <SwiperSlide className='w-9/12 h-3/4 text-center'>
            <Image 
            className='h-full w-full'
            src={banner5}
            alt=''
            />
        </SwiperSlide>
        <SwiperSlide className='w-9/12 h-3/4 text-center'>
            <Image 
            className='h-full w-full'
            src={banner6}
            alt=''
            />
        </SwiperSlide>
        <SwiperSlide className='w-9/12 h-3/4 text-center'>
            <Image 
            className='h-full w-full'
            src={banner7}
            alt=''
            />
        </SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default HomeBanner;