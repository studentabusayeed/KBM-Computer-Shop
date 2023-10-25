import Image from 'next/image';
import React from 'react';

const HorOfferImage = ({ imgLink }) => {
    return (
        <section>
            <div className='max-w-[1280px] w-full mx-auto px-3'>
                <Image className="w-full" src={imgLink} alt="Offer Images" />
            </div>
        </section>
    );
};

export default HorOfferImage;