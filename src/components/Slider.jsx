import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

const Slider = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleSwitch = () => {
        setIsChecked(!isChecked);
        if (!isChecked) {
            setTimeout(() => {
                setIsChecked(false);
            }, 700); // 700 milliseconds
        }
    };

    return (
        <div className="relative flex items-center space-x-2 py-10 px-[100px]">
            <div
                className={`relative inline-flex h-[62px] w-[300px] items-center rounded-full cursor-pointer transition-colors ${
                    isChecked ? 'bg-gray-300' : 'bg-blue-500'
                }`}
                onClick={toggleSwitch}
            >
                {!isChecked && (
                    <span
                        className={`absolute inset-0 flex items-center justify-center text-white text-xl font-light opacity-80 transition-opacity ps-8 duration-300 ${
                            isChecked ? 'opacity-0' : 'opacity-100'
                        }`}
                    >
                        SWIPE TO BUY
                    </span>
                )}
                
                <span
                    className={`relative inline-block h-14 w-14 ms-1 transform bg-white rounded-full transition-transform duration-300 ${
                        isChecked ? 'translate-x-[235px]' : 'translate-x-0'
                    }`}
                >
                    <IoIosArrowForward
                        className="absolute inset-0 m-auto text-black"
                        style={{ fontSize: '24px' }} 
                    />
                </span>

            </div>
        </div>
    );
};

export default Slider;
