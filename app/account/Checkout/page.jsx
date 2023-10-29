import React from 'react';
import { FaCcVisa, FaCcStripe, FaCcMastercard, FaCcDiscover, FaShippingFast, FaCreditCard, FaShoppingCart } from 'react-icons/fa';

const page = () => {
    return (
        <div className='flex justify-center gap-6 bg-gray-100 min-h-screen'>
            <div className="flex items-center justify-center py-14 w-[70%]">
                <div className="bg-[#EB9478] p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl text-center mb-4 text-[#493B76] font-semibold">
                        <FaShippingFast className='inline' /> Shipping Details
                    </h1>
                    <div className="name flex">
                        <div className="w-1/2 pr-2">
                            <label htmlFor="f-name" className="block mb-2">
                                First
                            </label>
                            <input
                                type="text"
                                name="f-name"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="w-1/2 pl-2">
                            <label htmlFor="l-name" className="block mb-2">
                                Last
                            </label>
                            <input
                                type="text"
                                name="l-name"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="street">
                        <label htmlFor="name" className="block mb-2">
                            Street
                        </label>
                        <input
                            type="text"
                            name="address"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="address-info flex">
                        <div className="w-1/3 pr-2">
                            <label htmlFor="city" className="block mb-2">
                                City
                            </label>
                            <input
                                type="text"
                                name="city"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="w-1/3 px-2">
                            <label htmlFor="state" className="block mb-2">
                                State
                            </label>
                            <input
                                type="text"
                                name="state"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="w-1/3 pl-2">
                            <label htmlFor="zip" className="block mb-2">
                                Zip
                            </label>
                            <input
                                type="text"
                                name="zip"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <h1 className="text-3xl text-center mt-8 text-[#493B76] font-semibold">
                        <FaCreditCard className='inline' /> Payment Information
                    </h1>
                    {/* <label className="block mb-2">Accepted Cards</label> */}
                    <div className="icon-container mb-2 flex gap-3 justify-center py-3">
                        <FaCcVisa style={{ color: 'navy', fontSize: "40px" }} />
                        <FaCcMastercard style={{ color: 'blue', fontSize: "40px" }} />
                        <FaCcDiscover style={{ color: 'red', fontSize: "40px" }} />
                        <FaCcStripe style={{ color: 'green', fontSize: "40px" }} />
                    </div>
                    <div className="cc-num">
                        <label htmlFor="card-num" className="block mb-2">
                            Credit Card No.
                        </label>
                        <input
                            type="text"
                            name="card-num"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="cc-info flex">
                        <div className="w-1/2 pr-2">
                            <label htmlFor="expire" className="block mb-2">
                                Exp
                            </label>
                            <input
                                type="text"
                                name="expire"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="w-1/2 pl-2">
                            <label htmlFor="security" className="block mb-2">
                                CCV
                            </label>
                            <input
                                type="text"
                                name="security"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="btns flex flex-col items-end mt-4">
                        <button className="text-white bg-[#4A3B76] py-2 px-4 rounded-md">
                            Purchase
                        </button>
                        <button className="text-white bg-[#4A3B76] py-2 px-4 rounded-md mt-2">
                            Back to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div class="w[30%]">
                <div className="col-25">
                    <div className="container bg-gray-200 px-14 py-6 mt-14 border border-gray-300 rounded-md">
                        <h4 className="text-lg font-semibold flex justify-between gap-10 mb-4">
                            Cart{' '}
                            <span className="price text-gray-700 flex justify-center items-center gap-1">
                                <FaShoppingCart /> <span>4</span>
                            </span>
                        </h4>
                        <p className='flex justify-between gap-10 mb-1'>
                            <a href="#">Product 1</a>{' '}
                            <span className="price">$15</span>
                        </p>
                        <p  className='flex justify-between gap-10 mb-1'>
                            <a href="#">Product 2</a>{' '}
                            <span className="price">$5</span>
                        </p>
                        <p  className='flex justify-between gap-10 mb-1'>
                            <a href="#">Product 3</a>{' '}
                            <span className="price">$8</span>
                        </p>
                        <p  className='flex justify-between gap-10 mb-1'>
                            <a href="#">Product 4</a>{' '}
                            <span className="price">$2</span>
                        </p>
                        <hr className='bg-green-600 w-full h-1 my-3'/>
                        <p  className='flex justify-between gap-6 font-semibold'>
                            <a>Total</a>
                            <span className="price text-gray-700">
                                $30
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
