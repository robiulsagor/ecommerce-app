'use client'
import Image from "next/image"
import ProductTag from "./ProductTag";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { GiShare } from "react-icons/gi";
import { GoArrowSwitch, GoHeart } from "react-icons/go";
import { toast } from "react-hot-toast";

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    prevPrice?: number;
    off?: number;
    new?: boolean;
    image: string;
}

const ProductCard = ({ product }: { product: Product }) => {
    const [isHovered, setIsHovered] = useState(false)

    const addToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        toast.success(`${product.name} added to cart!`);
        console.log(`${product.name} added to cart!`);
    }

    const handleShare = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        navigator.clipboard.writeText(window.location.href);
        toast.success("Product link copied to clipboard!");
    }

    const handleLike = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        toast.success("Product liked!");
    }

    return (
        <Link href={'/'} className="rounded-md overflow-hidden bg-[#f5f5f7] relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <ProductTag newProduct={product?.new || false} off={product?.off || false} />
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute w-full h-full bg-[#3A3A3A]/80 left-0 top-0 flex flex-col items-center justify-center gap-8 text-white px-5">

                        <button type="button" onClick={addToCart}
                            className="bg-white text-primary hover:bg-slate-300 text-sm font-bold py-3 px-10 cursor-pointer transition">ADD TO CART</button>

                        <div className="w-full flex items-center justify-between text-sm">
                            <div className="inline-flex items-center gap-2" onClick={handleShare} >
                                <GiShare className="text-xl cursor-pointer" />
                                <span>Share</span>
                            </div>
                            <div className="inline-flex items-center gap-2">
                                <GoArrowSwitch className="text-xl cursor-pointer" />
                                <span>Compare</span>
                            </div>
                            <div className="inline-flex items-center gap-2" onClick={handleLike}>
                                <GoHeart className="text-xl cursor-pointer" />
                                <span>Like</span>
                            </div>
                        </div>
                    </motion.div>
                )}

            </AnimatePresence>

            <Image src={product.image} alt={product.name} width={200} height={250} className="w-full h-64 " />
            <div className="p-4 flex flex-col gap-2">
                <h3 className="text-2xl text-gray-700 font-semibold">{product.name}</h3>
                <p className="text-md text-gray-400 font-medium">{product.category}</p>
                <div className="flex items-center justify-between ">
                    <p className="text-gray-600 font-semibold text-xl">
                        ${product.price.toFixed(2)}
                    </p>
                    {product.prevPrice && (
                        <p className="text-gray-400 line-through text-lg">
                            ${product.prevPrice.toFixed(2)}
                        </p>
                    )}
                </div>
            </div>
        </Link>
    )
}

export default ProductCard