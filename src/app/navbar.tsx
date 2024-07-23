import Link from "next/link";
import { useState } from "react";
import DropdownButton from "./profile";
import Cart from "./cart";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative flex items-center justify-between py-1 px-4 md:px-14 text-xs text-gray-600 border-2">
      <div className="flex items-center justify-between gap-2 md:gap-10">
        <div className="flex items-center justify-between gap-2 cursor-pointer" onClick={toggleSidebar}>
          <img src={`/mark8-logo.png`} alt="Logo" className="w-10 h-10" />
          <div className="hidden md:block">
            <p className="font-bold text-black">Mark8</p>
            <p>By Awesomity Lab</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 md:gap-10">
        <img src={`/search-01.png`} alt="search icon" className="w-4 h-4" />
        <div
          className="flex items-center justify-center gap-2 cursor-pointer"
          onClick={toggleSidebar}
        >
          <img src={`/shopping-cart-02.png`} alt="shopping cart" className="w-4 h-4" />
          <p>My Cart</p>
        </div>
        <Link href="/saved">
          <div className="flex items-center justify-center gap-2">
            <img src={`favourite.png`} alt="favourite" />
            <p>Saved</p>
          </div>
        </Link>
        <button className="hidden md:flex py-3 px-6 justify-center items-center border-2 font-bold gap-2 rounded-md text-black">
          Open A Store
          <img src={`/store-02.svg`} alt="cart" className="w-4 h-4" />
        </button>
        <div className="flex items-center">
          <button>
            <img src={`/user.png`} alt="user profile" className="border-2 p-2 rounded-l-lg" />
          </button>
          <DropdownButton />
        </div>
      </div>
      <Cart isOpen={isSidebarOpen} onClose={toggleSidebar} />

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
          <div className="bg-white w-64 p-5">
            <div className="flex justify-between items-center">
              <img src={`/mark8-logo.png`} alt="Logo" className="w-10 h-10" />
              <button onClick={closeSidebar}>X</button>
            </div>
            <div className="mt-5">
              <Link href="/products" className="block py-2" onClick={closeSidebar}>
                Home
              </Link>
              <Link href="/stores" className="block py-2" onClick={closeSidebar}>
                Stores
              </Link>
              <Link href="/saved" className="block py-2" onClick={closeSidebar}>
                Saved
              </Link>
              <Link href="/cart" className="block py-2" onClick={closeSidebar}>
                My Cart
              </Link>
              <button
                className="block w-full text-left py-2"
                onClick={closeSidebar}
              >
                Open A Store
              </button>
            </div>
          </div>
          <div className="flex-1" onClick={closeSidebar}></div>
        </div>
      )}
    </div>
  );
}
