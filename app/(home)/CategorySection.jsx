"use client"

import CategoryCard from '@/components/CardDesign/CategoryCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import SectionTitle from '@/components/SectionTitle';
import './CategorySection.css'

const CategorySection = () => {
    return (
        <div>
            <SectionTitle title="All Categories" />
            <div className="shopby-category">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {/* {categories.map((category, index) => ( */}
                    <SwiperSlide>
                        <CategoryCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryCard />
                    </SwiperSlide>
                    {/* ))} */}
                </Swiper>
            </div>
        </div>
    );
};

export default CategorySection;