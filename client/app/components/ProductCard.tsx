import Image from "next/image"

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
    return (
        <div className="rounded-md overflow-hidden bg-[#f5f5f7] relative">

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
        </div>
    )
}

export default ProductCard