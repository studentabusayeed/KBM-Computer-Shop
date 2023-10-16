import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <div className='my-3'>
            <div className='bg-black pr-16 pl-5 py-1 inline-block title'>

            <h1 className='text-2xl text-center text-white mx-auto uppercase font-semibold tracking-widest'>{title}</h1>
            </div>
            <hr className='border-[#329f2a]' />
            {/* <div class="triangle"></div> */}

        </div>
    );
};

export default SectionTitle;