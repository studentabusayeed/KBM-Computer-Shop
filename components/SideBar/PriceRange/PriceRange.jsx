import React from 'react';
import { CiDollar } from 'react-icons/ci';

const PriceRange = (props) => {

    return (
        <div className='pb-3'>
            <input
                type='range'
                className='w-full'
            />
            <div className='flex gap-2 justify-between'>
                <span className='flex items-center gap-1 border border-[#427743] rounded-full py-0.5 px-2 text-sm'>
                    <CiDollar className='h-4 w-4 kbm-primary' /> 1,00,000
                </span>
                <span>-</span>
                <span className='flex items-center gap-1 border border-[#427743] rounded-full py-0.5 px-2 text-sm'>
                    <CiDollar className='h-4 w-4 kbm-primary' /> 1,00,000
                </span>
            </div>
        </div>
    );
};

export default PriceRange;
