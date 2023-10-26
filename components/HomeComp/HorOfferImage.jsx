import Image from 'next/image';
import React from 'react';

const HorOfferImage = ({ imgLink }) => {
    return (
        <div>
            <Image className="w-full" src={imgLink} alt="Offer Images" />
        </div>
    );
};

export default HorOfferImage;