import React from 'react';

const SideBanner = () => {
    return (
        <div className='w-full h-full flex-col gap-3 flex'>
            <div className='h-1/2  bg-gray-500 flex justify-center items-center'>

            Side banner 1.
            </div>
            <div className='h-1/2  bg-gray-500 flex justify-center items-center'>
             Side banner 2.
            </div>
        </div>
    );
};

export default SideBanner;