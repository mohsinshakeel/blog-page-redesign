"use client"
import { FiMenu, FiX } from 'react-icons/fi'; 
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const TopNavbar = () => {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to control mobile menu

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-black">
        <div className="items-center w-full justify-center flex flex-col">
          <div className="text-white py-2 px-4 flex justify-between items-center text-sm w-full md:w-9/12">
            <div className="flex items-center space-x-2 md:space-x-4">
              <span>📞 +61 3 7046 4648</span>
              <span>🏬 The Hamper Boutique</span>
            </div>
            <span className="hidden md:inline">
              Gift Hampers from $59 | FREE Delivery Australia Wide
            </span>
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="focus:outline-none"
                >
                  Available City ▼
                </button>
                {dropdownOpen && (
                  <div className="absolute mt-2 right-0 bg-white text-black py-2 rounded shadow-lg z-50">
                    <ul>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        Australia
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        Sydney
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        Melbourne
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        Brisbane
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        Perth
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        Adelaide
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        Hobart
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        Canberra
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white flex justify-between items-center px-4 md:justify-center">
          <div className="text-2xl font-bold bg-white flex p-2">
            <Image
              src={'/images/Logo.png'}
              alt="Logo"
              width={200} // Adjusted width for better responsiveness
              height={41}
            />
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      <div className={`bg-yellow-500 px-6 z-10 ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="container-fluid flex justify-center items-center">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-6 lg:space-x-12">
            <Link href="#" className="text-black py-4 border-black hover:border-b-4">
              Home
            </Link>
            <Link href="#" className="text-black py-4 border-black hover:border-b-4">
              About Us
            </Link>
            <Link href="#" className="text-black py-4 border-black hover:border-b-4">
              Gift Hampers
            </Link>
            <Link href="#" className="text-black py-4 border-black hover:border-b-4">
              Doing Our Bit
            </Link>
            <Link
              href="blog"
              className={`text-black py-4 border-black hover:border-b-4 ${pathname.includes('blog') ? 'border-b-4 font-bold' : ''}`}
            >
              Blog
            </Link>
            <Link href="#" className="text-black py-4 border-black hover:border-b-4">
              FAQ
            </Link>
            <Link href="#" className="text-black py-4 border-black hover:border-b-4">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
