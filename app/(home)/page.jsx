import HomeBanner from '@/app/(home)/HomeBanner';
import SideBanner from '@/app/(home)/SideBanner';
import React from 'react';
import CategorySection from './CategorySection';

const HomePage = () => {
    return (
        <>
        
        <section className='w-full mb-16 grid grid-rows-1 gap-3 grid-cols-4  mt-auto'>
            <aside>
                <SideBanner />
            </aside>
            <aside className='col-span-3'>
            <HomeBanner/>
            </aside>
        </section>
        <section>
            <CategorySection/>
        </section>
        </>
    );
};

export default HomePage;