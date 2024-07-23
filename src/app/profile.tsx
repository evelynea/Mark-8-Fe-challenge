"use client";
import { useState } from 'react';
import Cart from './cart';

export default function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center border-2 py-4 px-2 rounded-r-lg"
      >
        <img src={`/vector.png`} alt="vector" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-8 flex flex-col gap-8">
          <div className="flex justify-center items-center gap-4">
             <img src={`profile.svg`} alt="store image" className='w-10 h-10 rounded-lg'/>
             <div className="">
               <p className="font-semibold py-2">Yves Honore B.</p>
               <p className="text-gray-500 ">yveshonore@awesomity.rw</p>
             </div>
           </div>
           <div className='border border-grey-900 border-t-1 border-l-0 border-r-0 border-b-1 py-4'>
            <ul>
              <li className='flex gap-4'>
                <img src={`user.svg`} alt="user" />
                <a href="/saved" className="block py-2 text-sm text-gray-700 hover:bg-gray-100">My Account</a>
              </li>
              <li className='flex gap-4'>
                <img src={`cart.svg`} alt="orders" />
                <a href="#" className="block py-2 text-sm text-gray-700 hover:bg-gray-100"  onClick={toggleSidebar}>My Orders</a>
              </li>
              <li className='flex gap-4'>
                <img src={`customer-service-01.svg`} alt="help" />
                <a href="#" className="block py-2 text-sm text-gray-700 hover:bg-gray-100">Help</a>
              </li>
              <li className='flex gap-4'>
                <img src={`alert-circle.svg`} alt="about" />
                <a href="#" className="block py-2 text-sm text-gray-700 hover:bg-gray-100">About</a>
              </li>
              <li className='flex gap-4'>
                <img src={`settings-01.svg`} alt="settings" />
                <a href="#" className="block py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
              </li>
              
            </ul>
           </div>
              <li className='flex gap-4'>
                <img src={`logout-03.svg`} alt="settings" />
                <a href="/login" className="block py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
              </li>

        </div>
      )}
      <Cart isOpen={isSidebarOpen} onClose={toggleSidebar} />

    </div>
  );
}
