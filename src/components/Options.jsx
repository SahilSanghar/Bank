import React, { useState } from 'react';
import { BsStack } from "react-icons/bs";
import { FaEyeDropper } from "react-icons/fa6";
import BgLine from '../assets/bgLine.jpg';

const Options = () => {
    // Initialize with 'Regular' as the default active option
    const [selectedOption, setSelectedOption] = useState('Regular');

    const handleClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className='bg-neutral-100 h-[350px]'>
            <ul className="flex justify-start items-center text-lg space-x-10 pt-4 pb-24 pl-8">
                <li
                    className={`cursor-pointer ${selectedOption === 'Regular' ? 'text-blue-600' : 'text-gray-900'}`}
                    onClick={() => handleClick('Regular')}>
                    Regular
                    <hr className={`${selectedOption === 'Regular' ? 'border-blue-600' : 'border-transparent'} border-2 rounded-3xl mt-1`} />
                </li>
                <li
                    className={`cursor-pointer ${selectedOption === 'Cover' ? 'text-blue-600' : 'text-gray-900'}`}
                    onClick={() => handleClick('Cover')}>
                    Cover
                    <hr className={`${selectedOption === 'Cover' ? 'border-blue-600' : 'border-transparent'} border-2 rounded-3xl mt-1`} />
                </li>
                <li
                    className={`cursor-pointer ${selectedOption === 'AMO' ? 'text-blue-600' : 'text-gray-900'}`}
                    onClick={() => handleClick('AMO')}>
                    AMO
                    <hr className={`${selectedOption === 'AMO' ? 'border-blue-600' : 'border-transparent'} border-2 rounded-3xl mt-1`} />
                </li>
                <li
                    className={`cursor-pointer ${selectedOption === 'Iceberg' ? 'text-blue-600' : 'text-gray-900'}`}
                    onClick={() => handleClick('Iceberg')}>
                    Iceberg
                    <hr className={`${selectedOption === 'Iceberg' ? 'border-blue-600' : 'border-transparent'} border-2 rounded-3xl mt-1`} />
                </li>
            </ul>
            <div className="bg-white absolute top-[200px] w-[480px] h-[180px] rounded-md grid grid-cols-2 gap-4 text-left mx-[20px]">
                <div className="">
                    <p className='text-xl py-5 ps-[25px]'>
                        Quantity
                    </p>
                    <div className='w-[200px] h-[80px] flex justify-between items-center rounded-md ms-[25px] pb-[10px] px-2 border-2'>
                        <p className="text-4xl ms-2">
                            1
                        </p>
                        <div className="ms-[65px] text-gray-500">
                            <BsStack className='w-[50px] h-[30px]' />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <p className='text-xl py-5 ps-[15px]'>
                        Price <span className='text-sm text-gray-500 ps-[50px]'>Tick size 0.05</span>
                    </p>
                    <img src={BgLine} alt="Background" className="w-[200px] h-[80px] object-cover opacity-30 rounded-md ms-[10px]" />
                    <div className="absolute top-[80px] flex justify-between items-center text-gray-500 px-4">
                        <p className="text-4xl ms-2">
                            0.00
                        </p>
                        <div className="ms-[65px]">
                            <FaEyeDropper className='w-[50px] h-[30px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Options;
