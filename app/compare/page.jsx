"use client"

import KbmButton from '@/components/Utilities/KbmButton/KbmButton';
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { TbTrash } from 'react-icons/tb';
import demoImg from '@/assets/iphone.jpg'
import demoImg2 from '@/assets/laptop-1.webp'
import Image from 'next/image';
import './compare-style.css'

const ComparePage = () => {
    return (
        <section className='kbm-compare-page'>
            <div>
                <h1 className="text-3xl font-bold kbm-white text-center py-16 bg-gradient-to-tr from-green-600 to-teal-600">
                    This is banner
                </h1>
            </div>
            <div className='kbm-container'>
                <table className='w-full'>
                    <thead>
                        <tr className='flex flex-wrap md:flex-nowrap'>
                            <td className='w-full md:max-w-70 md:flex-1 md:p-2 flex flex-col justify-center pb-8'>
                                <h2 className='text-2xl font-semibold'>Product Comparison</h2>
                                <p className=''>4 Products selected</p>
                                <div className='flex gap-1 text-xs w-full mt-5'>
                                    <KbmButton btnType={'kbm-outline'} btnIcon={<FaDownload />} btnText='Download' />
                                    <KbmButton btnType={'kbm-solid'} btnIcon={<TbTrash />} btnText='Clear all' />
                                </div>
                            </td>
                            <td className='w-1/2 md:flex-1 md:p-2 relative group overflow-hidden'>
                                <div className='flex items-center h-full'>
                                    <Image className='p-3 mx-auto' src={demoImg} alt="Product Image" />
                                </div>
                                <button className='absolute top-0 right-0 p-3 rounded-lg translate-x-15 group-hover:translate-x-0 transition-all duration-300 bg-gradient-to-tl from-[#427743] to-teal-400'><TbTrash className='text-xl kbm-white' /></button>
                            </td>
                            <td className='w-1/2 md:flex-1 md:p-2 relative group overflow-hidden'>
                                <div className='flex items-center h-full'>
                                    <Image className='p-3 mx-auto' src={demoImg2} alt="Product Image" />
                                </div>
                                <button className='absolute top-0 right-0 p-3 rounded-lg translate-x-15 group-hover:translate-x-0 transition-all duration-300 bg-gradient-to-tl from-[#427743] to-teal-400'><TbTrash className='text-xl kbm-white' /></button>
                            </td>
                            {/* <td className='flex-1 p-2 relative group overflow-hidden'>
                                <div className='flex items-center h-full'>
                                    <Image className='p-3 mx-auto mt-auto' src={demoImg} alt="Product Image" />
                                </div>
                                <button className='absolute top-0 right-0 p-3 rounded-lg translate-x-15 group-hover:translate-x-0 transition-all duration-300 bg-gradient-to-tl from-[#427743] to-teal-400'><TbTrash className='text-xl kbm-white' /></button>
                            </td> */}
                        </tr>
                    </thead>
                    <tbody className='w-full'>
                        {/* Basic informations */}
                        <tr className='flex flex-wrap md:flex-nowrap'>
                            <td className='w-full md:max-w-70 md:flex-1 p-2'>
                                <h2 className='font-semibold'>Name</h2>
                            </td>
                            <td className='w-1/2 md:flex-1 p-2'>
                                <p className='text-sm md:text-base font-semibold'>iPhone 15 pro 256GB Blue Titanium (Singapore)</p>
                            </td>
                            <td className='w-1/2 md:flex-1 p-2'>
                                <p className='text-sm md:text-base font-semibold'>Dell E2423H 23.8 inch Full HD LED Monitor</p>
                            </td>
                            {/* <td className='flex-1 p-2'>
                                <p className='font-semibold'>iPhone 13 256GB</p>
                            </td> */}
                        </tr>
                        <tr className='flex flex-wrap md:flex-nowrap'>
                            <td className='w-full md:max-w-70 md:flex-1 p-2'>
                                <h2 className='font-semibold'>Price</h2>
                            </td>
                            <td className='w-1/2 md:flex-1 p-2'>
                                <p className='text-lg md:text-xl font-extrabold kbm-primary'>$23251</p>
                            </td>
                            <td className='w-1/2 md:flex-1 p-2'>
                                <p className='text-lg md:text-xl font-extrabold kbm-primary'>$200</p>
                            </td>
                            {/* <td className='flex-1 p-2'>
                                <p className='text-xl font-extrabold kbm-primary'>$20210</p>
                            </td> */}
                        </tr>
                        <tr className='flex flex-wrap md:flex-nowrap'>
                            <td className='w-full md:max-w-70 md:flex-1 p-2'>
                                <h2 className='font-semibold'>Brand</h2>
                            </td>
                            <td className='w-1/2 md:flex-1 p-2'>
                                <p className=''>iPhone</p>
                            </td>
                            <td className='w-1/2 md:flex-1 p-2'>
                                <p className=''>Dell</p>
                            </td>
                            {/* <td className='flex-1 p-2'>
                                <p className=''>iPhone</p>
                            </td> */}
                        </tr>
                        <tr className='flex flex-wrap md:flex-nowrap'>
                            <td className='w-full md:max-w-70 md:flex-1 p-2'>
                                <h2 className='font-semibold'>Model</h2>
                            </td>
                            <td className='w-1/2 md:flex-1 p-2'>
                                <p className=''>iPhone 15 pro</p>
                            </td>
                            <td className='w-1/2 md:flex-1 p-2'>
                                <p className=''>Dell K09S</p>
                            </td>
                            {/* <td className='flex-1 p-2'>
                                <p className=''>iPhone 13</p>
                            </td> */}
                        </tr>

                        {/* Category Headers design */}
                        <tr className=''>
                            <td className='flex-1'>
                                <h4 className='text-xl font-semibold kbm-white tracking-wider p-2 mt-3 kbm-bg-primary'>Display</h4>
                            </td>
                        </tr>

                        {/* Category Informations */}
                        <tr className='flex flex-wrap md:flex-nowrap'>
                            <td className='w-full md:max-w-70 md:flex-1 p-2'>
                                <h2 className='font-semibold'>Model</h2>
                            </td>
                            <td className='w-1/2 md:flex-1 p-2'>
                                <p className=''>iPhone 15 pro</p>
                            </td>
                            <td className='w-1/2 md:flex-1 p-2'>
                                <p className=''>Dell K09S</p>
                            </td>
                            {/* <td className='flex-1 p-2'>
                                <p className=''>iPhone 13</p>
                            </td> */}
                        </tr>
                        <tr className='flex flex-wrap md:flex-nowrap'>
                            <td className='w-full md:max-w-70 md:flex-1 p-2'>
                                <h2 className='font-semibold'>Model</h2>
                            </td>
                            <td className='w-1/2 md:flex-1 p-2'>
                                <p className=''>iPhone 15 pro</p>
                            </td>
                            <td className='w-1/2 md:flex-1 p-2'>
                                <p className=''>Dell K09S</p>
                            </td>
                            {/* <td className='flex-1 p-2'>
                                <p className=''>iPhone 13</p>
                            </td> */}
                        </tr>
                        <tr className='flex flex-wrap md:flex-nowrap'>
                            <td className='w-full md:max-w-70 md:flex-1 p-2'>
                                <h2 className='font-semibold'>Model</h2>
                            </td>
                            <td className='w-1/2 md:flex-1 p-2'>
                                <p className=''>iPhone 15 pro</p>
                            </td>
                            <td className='w-1/2 md:flex-1 p-2'>
                                <p className=''>Dell K09S</p>
                            </td>
                            {/* <td className='flex-1 p-2'>
                                <p className=''>iPhone 13</p>
                            </td> */}
                        </tr>
                        <tr className='flex flex-wrap md:flex-nowrap'>
                            <td className='w-full md:max-w-70 md:flex-1 p-2'>
                                <h2 className='font-semibold text-center md:text-left'>Model</h2>
                            </td>
                            <td className='w-1/2 md:flex-1 p-2'>
                                <p className=''>iPhone 15 pro</p>
                            </td>
                            <td className='w-1/2 md:flex-1 p-2'>
                                <p className=''>Dell K09S</p>
                            </td>
                            {/* <td className='flex-1 p-2'>
                                <p className=''>iPhone 13</p>
                            </td> */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ComparePage;