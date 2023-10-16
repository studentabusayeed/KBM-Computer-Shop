import HomeBanner from '@/app/(home)/HomeBanner';
import React from 'react';
import CategorySection from './CategorySection';

const HomePage = () => {
    return (
        <div className='w-full h-[calc(100vh-120px)] mt-auto'>
            <HomeBanner />
            <CategorySection />
        </div>
    );
};

export default HomePage;