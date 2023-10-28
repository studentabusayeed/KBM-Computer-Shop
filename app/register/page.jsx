import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaLinkedin, FaGoogle, FaRegEnvelope, FaUser } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

const page = () => {

    return (
        <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center mb-10'>
            <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
                <div className="w-3/4 p-5">
                    <div className="text-left font-bold">
                        <span className='text-green-600'>Company</span>Name
                    </div>
                    <div className='py-10'>
                        <h2 className="text-3xl font-bold text-green-500 mb-2">
                            Sign Up to Account
                        </h2>
                        <div className="boreder-2 w-10 border-green-500 inline-block mb-2"></div>
                        <div className="flex justify-center my-2">
                            <a href="" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                <FaFacebook className='text-sm' />
                            </a>
                            <a href="" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                <FaLinkedin className='text-sm' />
                            </a>
                            <a href="" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                <FaGoogle className='text-sm' />
                            </a>
                        </div>
                        <p className='text-gray-400 my-3'>or use your email account</p>
                        <form>
                            <div className="flex flex-col items-center">
                                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                    <FaUser className='text-gray-400 m-2' />
                                    <input type="name" name="name" placeholder='Your Name' className='bg-gray-100 outline-none text-sm flex-1' />
                                </div>
                                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                    <FaRegEnvelope className='text-gray-400 m-2' />
                                    <input type="email" name="email" placeholder='Your Email' className='bg-gray-100 outline-none text-sm flex-1' />
                                </div>
                                <div className="bg-gray-100 w-64 p-2 flex items-center">
                                    <MdLockOutline className='text-gray-400 m-2' />
                                    <input type="password" name="password" placeholder='Your Password' className='bg-gray-100 outline-none text-sm flex-1' autoComplete="new-password" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-2/5 bg-green-600 text-white rounded-tr-2xl rounded-br-2xl py-20 px-12">
                    <h2 className='text-3xl font-bold mb-2'>Hello, Friend!</h2>
                    <div className="border-2 w-10 border-white inline-block mb-2"></div>
                    <p className='mb-10'>
                        Fill up personal information and start journey with us.
                    </p>
                    <Link href="/login" className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500'>
                        Sign In
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default page;