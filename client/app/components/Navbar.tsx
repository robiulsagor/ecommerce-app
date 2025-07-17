import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

import Image from "next/image";
import Link from "next/link";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

const Navbar = () => {
    return (
        <nav className="bg-white">
            <div className="max-w-[1300px] mx-auto py-8 px-8 flex justify-between items-center">

                <Image src={"/images/logo.png"} className="w-[130px]" alt="Logo" width={150} height={50} />

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
                    <IoSearch className="text-[16px] lg:text-[20px]" />
                    <FaRegHeart className="text-[16px] lg:text-[20px]" />
                    <FiShoppingCart className="text-[16px] lg:text-[20px]" />
                </div>

            </div>
        </nav>
    )
}

export default Navbar