import HomeBanner from '@/app/(home)/HomeBanner';
import React from 'react';

const HomePage = () => {
    return (
        <div className='w-full h-[calc(100vh-120px)] mt-auto'>
            <HomeBanner/>
        </div>
    );
};

export default HomePage;