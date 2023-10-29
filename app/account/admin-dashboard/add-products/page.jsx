import React from 'react';
const AddProductsPage = () => {

    return (
        <div className="container  p-6 bg-white">
            <h1 className="text-2xl font-semibold mb-4">Product Information</h1>

            {/* Product Name */}
            <div className='grid grid-cols-2 gap-5 w-full'>
                <div className="input-field mb-4 w-4/5">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Product Name
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="name"
                        placeholder="Enter product name"
                    />
                </div>

                {/* Product Description */}
                <div className="input-field mb-4 w-4/5">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Product Description
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="description"
                        placeholder="Enter product description"
                    />
                </div>

                {/* Model */}
                <div className="input-field mb-4 w-4/5">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="model">
                        Model
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="model"
                        placeholder="Enter model"
                    />
                </div>

                {/* Product SKU */}
                <div className="input-field mb-4 w-4/5">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Product_SKU">
                        Product SKU
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="Product_SKU"
                        placeholder="Enter Product SKU"
                    />
                </div>

                {/* Brand */}
                <div className="input-field mb-4 w-4/5">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
                        Brand
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="brand"
                        placeholder="Enter brand"
                    />
                </div>

                {/* Summary */}
                <div className="input-field mb-4 w-4/5">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="summary">
                        Summary
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="summary"
                        placeholder="Enter summary"
                    />
                </div>

                {/* Warranty */}
                <div className="input-field mb-4 w-4/5">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="warranty">
                        Warranty
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="warranty"
                        placeholder="Enter warranty"
                    />
                </div>
            </div>
            {/* Image input fields */}
            <div className="input-field mb-4 mt-8">
                <label className="block text-gray-700 text-sm font-bold mb-2">Product Images</label>
                <div className='grid grid-cols-3 gap-10'>
                    <div>
                        <input type="file" accept="image/*" />
                        <div className="border border-dashed border-gray-500 p-4 rounded-md mt-3">
                            <div className="text-gray-600 text-center">
                                <svg
                                    className="mx-auto h-12 w-12"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 48 48"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M18 12h12m0 0l-4 4m4-4l4-4m-12 5l-4 4"
                                    ></path>
                                </svg>
                                <p>Drag and drop your images here or click to browse</p>
                            </div>
                            <input type="file" accept="image/*" className="hidden" />
                        </div>
                    </div>
                    <div>
                        <input type="file" accept="image/*" />
                        <div className="border border-dashed border-gray-500 p-4 rounded-md mt-3">
                            <div className="text-gray-600 text-center">
                                <svg
                                    className="mx-auto h-12 w-12"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 48 48"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M18 12h12m0 0l-4 4m4-4l4-4m-12 5l-4 4"
                                    ></path>
                                </svg>
                                <p>Drag and drop your images here or click to browse</p>
                            </div>
                            <input type="file" accept="image/*" className="hidden" />
                        </div>
                    </div>
                    <div>
                        <input type="file" accept="image/*" />
                        <div className="border border-dashed border-gray-500 p-4 rounded-md mt-3">
                            <div className="text-gray-600 text-center">
                                <svg
                                    className="mx-auto h-12 w-12"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 48 48"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M18 12h12m0 0l-4 4m4-4l4-4m-12 5l-4 4"
                                    ></path>
                                </svg>
                                <p>Drag and drop your images here or click to browse</p>
                            </div>
                            <input type="file" accept="image/*" className="hidden" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductsPage;