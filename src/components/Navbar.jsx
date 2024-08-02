import { FaArrowLeftLong } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
    // Initialize with 'option1' to make NSE active by default
    const [selectedOption, setSelectedOption] = useState('option1');

    return (
        <div className="bg-neutral-100 w-full p-5 flex justify-between items-center">
            <div>
                <FaArrowLeftLong size={35} cursor='pointer' />
            </div>
            <div>
                <div>
                    <p className="font-normal text-xl text-center">
                        HDFCBANK
                    </p>

                    <div className="flex flex-row pt-2 space-x-5">
                        <div className="flex items-center">
                            <input
                                id="radio-option-1"
                                name="radio-group"
                                type="radio"
                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                checked={selectedOption === 'option1'}
                                onChange={() => setSelectedOption('option1')}
                            />
                            <label 
                                htmlFor="radio-option-1" 
                                className={`ml-2 block text-sm font-medium ${selectedOption === 'option1' ? 'text-blue-600' : 'text-gray-900'}`}>
                                NSE: ₹ 1,618.15
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="radio-option-2"
                                name="radio-group"
                                type="radio"
                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                checked={selectedOption === 'option2'}
                                onChange={() => setSelectedOption('option2')}
                            />
                            <label 
                                htmlFor="radio-option-2" 
                                className={`ml-2 block text-sm font-medium ${selectedOption === 'option2' ? 'text-blue-600' : 'text-gray-900'}`}>
                                BSE: ₹ 1,617.80
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <BsThreeDotsVertical size={35} cursor='pointer' />
            </div>
        </div>
    );
}

export default Navbar;
