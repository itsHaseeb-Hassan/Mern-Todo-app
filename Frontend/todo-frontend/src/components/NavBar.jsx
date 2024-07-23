import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Navbar = ({ handleLogout }) => {
    const name  = useSelector((state) => state.user.loginInfo.name);
    const  profileImage  = useSelector((state) => state.user.loginInfo.profileImage);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <h1 className='text-3xl text-white'>TodoApp</h1>
                </div>
                <div className="flex-grow"></div>
                <div className="relative flex items-center">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="h-10 w-10 rounded-full cursor-pointer"
                        onClick={toggleDropdown}
                    />
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-56 w-48 bg-white rounded-md shadow-lg py-2 z-90">
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">{name}</a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</a>
                            <p  className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLogout}>Logout</p>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
