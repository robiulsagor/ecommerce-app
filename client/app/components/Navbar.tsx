"use client"

import { AnimatePresence, motion } from "motion/react"

import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ShowSearchComp from "./ShowSearchComp";


const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility
    const [showSearch, setShowSearch] = useState(false); // State to manage search input visibility
    const searchRef = useRef<HTMLInputElement>(null)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    // Toggle the mobile menu visibility

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    useEffect(() => {
        if (showSearch) {
            searchRef.current?.focus(); // Focus the search input when it is shown
        }
    }, [showSearch]);

    return (
        <nav className=" relative bg-white">
            <div className="max-w-[1300px] mx-auto py-8 px-8 flex justify-between items-center relative z-10 bg-white h-[80px]">

                <Image src={"/images/logo.png"} className="w-[100px] sm:w-[120px] md:w-[130px]" alt="Logo" width={150} height={50} />

                <ul className="hidden md:flex space-x-8 lg:space-x-12 text-sm lg:text-base font-[500]">
                    {
                        navItems.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className="text-gray-700 hover:text-gray-400 transition ">
                                    {item.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                <div className="hidden md:flex space-x-6 lg:space-x-10 text-gray-700">
                    <FaRegUser className="text-[16px] lg:text-[20px]" />
                    <ShowSearchComp showSearch={showSearch} toggleSearch={toggleSearch} />
                    <FaRegHeart className="text-[16px] lg:text-[20px]" />
                    <FiShoppingCart className="text-[16px] lg:text-[20px]" />
                </div>

                <div className="flex items-center space-x-4 md:hidden">
                    <ShowSearchComp showSearch={showSearch} toggleSearch={toggleSearch} />

                    <FiShoppingCart className="text-[16px] lg:text-[20px]" />

                    {
                        isOpen ? (
                            <RxCross2 size={26} className="text-xl cursor-pointer" onClick={toggleMenu} />
                        ) : <HiBars3BottomLeft size={26} className="cursor-pointer md:hidden" onClick={toggleMenu} />
                    }

                </div>

                <AnimatePresence>
                    {showSearch && (
                        <motion.div key="box" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="absolute top-16 right-0 w-full max-w-md bg-white shadow-lg rounded-md p-4 z-10">
                            <input type="text" placeholder="Search..." ref={searchRef}
                                onBlur={() => setShowSearch(false)}
                                className="bg-white border border-blue-400 shadow focus:shadow-lg focus:shadow-blue-900/20 w-full py-1.5 px-2 rounded-sm outline-none" />
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>

            <div
                style={{ height: 'calc(100vh - 80px)' }}
                className={`w-full absolute  left-0 ${isOpen ? 'top-full' : '-top-[100vh] '} transition-all duration-300 ease-in-out z-1 flex flex-col md:hidden bg-gray-800 text-white items-center justify-center`}>
                <div>
                    <ul className="flex flex-col space-y-6 text-lg text-center">
                        {
                            navItems.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-white hover:text-gray-400 transition ">
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="flex flex-col space-y-10  text-center items-center mt-8">
                        <FaRegUser className="text-[16px] lg:text-[20px]" />
                        <FaRegHeart className="text-[16px] lg:text-[20px]" />
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar