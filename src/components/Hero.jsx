import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoReloadOutline } from "react-icons/io5";
import Slider from './Slider';

const Hero = () => {
    const [activeProduct, setActiveProduct] = useState('Intraday');
    const [activeType, setActiveType] = useState('Market');

    const handleProductClick = (productType) => {
        setActiveProduct(productType);
    };

    const handleTypeClick = (type) => {
        setActiveType(type);
    };

    return (
        <div className='absolute top-[370px] bg-white w-[520px] h-[500px] rounded-t-[40px] text-center'>
            {/* Product Section */}
            <div className='border-b-[1px] border-slate-300 py-4'>
                <p className='text-left text-2xl py-3 ps-8'>Product</p>
                <div className='flex justify-between ps-10 pb-6'>
                    <p
                        className={`h-[50px] w-[200px] text-lg rounded-md border-2 py-2 cursor-pointer ${
                            activeProduct === 'Intraday' ? 'border-blue-500 text-blue-500' : 'border-gray-300'
                        }`}
                        onClick={() => handleProductClick('Intraday')}
                    >
                        Intraday 
                        <span className={`ps-5 ${activeProduct === 'Intraday' ? 'text-blue-500' : 'text-gray-500'}`}>
                            MIS
                        </span>
                    </p>
                    <p
                        className={`h-[50px] w-[200px] me-8 text-lg rounded-md border-2 py-2 cursor-pointer ${
                            activeProduct === 'Longterm' ? 'border-blue-500 text-blue-500' : 'border-gray-300'
                        }`}
                        onClick={() => handleProductClick('Longterm')}
                    >
                        Longterm 
                        <span className={`ps-5 ${activeProduct === 'Longterm' ? 'text-blue-500' : 'text-gray-500'}`}>
                            CNC
                        </span>
                    </p>
                </div>
            </div>

            {/* Type Section */}
            <div className='border-b-[1px] border-slate-300 py-4'>
                <p className='text-left text-2xl pt-2 ps-8'>Type</p>
                <div className='flex ps-10 py-5'>
                    <p
                        className={`h-[50px] w-[100px] ms-5 text-lg rounded-md border-2 py-2 cursor-pointer ${
                            activeType === 'Market' ? 'border-blue-500 text-blue-500' : 'border-gray-300'
                        }`}
                        onClick={() => handleTypeClick('Market')}
                    >
                        Market
                    </p>
                    <p
                        className={`h-[50px] w-[100px] mx-8 text-lg rounded-md border-2 py-2 cursor-pointer ${
                            activeType === 'Limit' ? 'border-blue-500 text-blue-500' : 'border-gray-300'
                        }`}
                        onClick={() => handleTypeClick('Limit')}
                    >
                        Limit
                    </p>
                    <p
                        className={`h-[50px] w-[60px] me-8 text-lg rounded-md border-2 py-2 cursor-pointer ${
                            activeType === 'SL' ? 'border-blue-500 text-blue-500' : 'border-gray-300'
                        }`}
                        onClick={() => handleTypeClick('SL')}
                    >
                        SL
                    </p>
                    <p
                        className={`h-[50px] w-[80px] me-8 text-lg rounded-md border-2 py-2 cursor-pointer ${
                            activeType === 'SL-M' ? 'border-blue-500 text-blue-500' : 'border-gray-300'
                        }`}
                        onClick={() => handleTypeClick('SL-M')}
                    >
                        SL-M
                    </p>
                </div>
            </div>

            {/* Tags Section */}
            <div className="flex justify-between text-xl border-b-[1px] border-slate-300 px-8 py-8">
                <p className='pt-1.5'>Tags</p>
                <div className="flex items-center border-2 text-blue-600 border-blue-500 cursor-pointer rounded-md px-5 py-1.5">
                    <IoMdAdd />
                    <p className=''>Add Tags</p>
                </div>
            </div>

            {/* More Section */}
            <p className='text-center text-xl cursor-pointer py-5'>
                More
                <IoIosArrowDown className='absolute inset-x-[250px]' />
            </p>

            {/* Margin and Charges Section */}
            <div className="bg-neutral-100 h-[60px] flex items-center justify-between rounded-md mt-4">
                <div className="flex space-x-5 ps-10">
                    <p>
                        Margin <span className='text-blue-600'>₹323.63</span>
                    </p>
                    <p>
                        Charges <span className='text-blue-600'>₹0.64</span>
                    </p>
                </div>
                <div className='me-4'>
                    <IoReloadOutline className='rotate-180 w-5 h-5' />
                </div>
            </div>

            {/* Slider Section */}
            <div className="h-[100px]">
                <Slider />
            </div>
        </div>
    );
};

export default Hero;
