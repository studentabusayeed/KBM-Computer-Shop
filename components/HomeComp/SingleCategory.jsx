"use client"

import ProductCard from '@/components/CardDesign/ProductCard';
import KbmTitle from '@/components/Utilities/KbmTitle/KbmTitle';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import image1 from '@/assets/sing-cat-1.jpg'
import image2 from '@/assets/sing-cat-2.jpg'
import Image from 'next/image';
import offImg from '@/assets/offer-images-2.gif'

import './SingleCategory.css'
import HorOfferImage from './HorOfferImage';

const SingleCategory = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <section className='sing-cat-sec'>
            <div className="kbm-container">
                <KbmTitle title="Electronics & Appliances" subTitle="Choose your product" />
                <div className='flex flex-col md:flex-row items-stretch justify-between gap-3 pt-10'>
                    <div className='hidden md:block w-full md:w-[30%]'>
                        <Swiper
                            slidesPerView={1}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            effect={'fade'}
                            loop={true}
                            onAutoplayTimeLeft={onAutoplayTimeLeft}
                            modules={[EffectFade, Pagination, Navigation, Autoplay]}
                            className="mySwiper h-full rounded-xl"
                        >
                            <SwiperSlide>
                                <Image className='w-full h-full object-cover' src={image1} alt='Categories Feature Image' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image className='w-full h-full object-cover' src={image2} alt='Categories Feature Image' />
                            </SwiperSlide>
                            <div className="autoplay-progress" slot="container-end">
                                <svg viewBox="0 0 48 48" ref={progressCircle}>
                                    <circle cx="24" cy="24" r="20"></circle>
                                </svg>
                                <span ref={progressContent}></span>
                            </div>
                        </Swiper>
                    </div>
                    <div className='w-full md:w-[70%] grid md:grid-cols-2 xl:grid-cols-3 gap-3'>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
                <div className='mt-8 rounded-xl overflow-hidden'>
                    <HorOfferImage imgLink={offImg} />
                </div>
            </div>
        </section>
    );
};

export default SingleCategory;