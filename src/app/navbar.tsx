import Link from "next/link"
import { useState } from "react";
import DropdownButton from "./profile"
import Cart from "./cart"

export default function Navbar(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

    return(
        <div className=" relative flex items-center justify-between py-1 px-14 text-xs text-gray-600 border-2">
            <div className="flex gap-10 items-center justify-between">
                <div className="flex items-center justify-between gap-2">
                    <Link href="/products">
                    <img src= {`/mark8-logo.png`} alt="Logo" className='w-10 h-10' />
                    </Link>
                    <div className=''>
                        <p className="font-bold text-black">Mark8</p>
                        <p>By Awesomity Lab</p>
                    </div>
                </div>
                <Link href="/products">
                    <div className="flex gap-2">
                        
                        <img src={`/home-04.png`} alt="Home icon" className="w-4 h-4"/>
                        <p>Home</p>
                    </div>
                </Link>
                <Link href="/stores">
                <div className="flex gap-2">
                    <img src={`/store-01.svg`} alt="store icon" className="w-4 h-4"  />
                    <p>Stores</p>
                </div>
                </Link>
            </div>
            <div className="flex justify-center items-center gap-10">
                <img src={`/search-01.png`} alt="search icon" className="w-4 h-4" />
                <div className="flex justify-center items-center gap-2 cursor-pointer"
                     onClick={toggleSidebar} >
                    <img src={`/shopping-cart-02.png`} alt="shopping cart" className="w-4 h-4"/>
                    <p>My Cart</p>
                    
                </div>
                <Link href="/saved">
                    <div className="flex justify-center items-center gap-2">
                        <img src={`favourite.png`} alt="favourite" />
                        <p>Saved</p>
                    </div>
                </Link>
                <button 
                    className="py-3 px-6 flex justify-center items-center border-2 font-bold gap-2 rounded-md text-black">Open A Store 
                    <img src={`/store-02.svg`} alt="cart" className="w-4 h-4"/>
                </button>
                <div className="flex">

                <button> <img src={`/user.png`} alt="user profile" className="border-2 p-2 rounded-l-lg"/> </button>
                {/* <button> <img src={`/vector.png`} alt="vector" className="border-2 py-4 px-2 rounded-r-lg" /> </button> */}
                <DropdownButton/>
                </div>
            </div>

              {/* Include Sidebar */}
            <Cart isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </div>
    )
}