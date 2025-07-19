import ProductCard from "./ProductCard";

const products = [
    { id: 1, name: "Product 1", category: "stylish cafe chair", price: 29.99, prevPrice: 35.60, off: 30, new: false, image: "/images/image 1.png" },
    { id: 2, name: "Product 2", category: "stylish cafe chair", price: 25.99, new: true, image: "/images/image 2.png" },
    { id: 3, name: "Product 3", category: "stylish cafe chair", price: 37.99, prevPrice: 44.60, off: 20, new: false, image: "/images/image 3.png" },
    { id: 4, name: "Product 4", category: "stylish cafe chair", price: 29.99, prevPrice: 35.60, off: 30, new: false, image: "/images/image 1.png" },
    { id: 5, name: "Product 5", category: "stylish cafe chair", price: 25.99, new: false, image: "/images/image 2.png" },
    { id: 6, name: "Product 6", category: "stylish cafe chair", price: 37.99, prevPrice: 44.60, off: 20, new: false, image: "/images/image 3.png" },
    { id: 7, name: "Product 7", category: "stylish cafe chair", price: 29.99, prevPrice: 35.60, off: 30, new: false, image: "/images/image 1.png" },
    { id: 8, name: "Product 8", category: "stylish cafe chair", price: 25.99, new: true, image: "/images/image 2.png" },
    { id: 9, name: "Product 9", category: "stylish cafe chair", price: 37.99, prevPrice: 44.60, off: 20, new: false, image: "/images/image 3.png" },
];

const ProductsContainer = ({ homepage = true }) => {
    return (
        <section className="max-w-[1300px] mx-auto p-8 mt-8">
            {homepage && <h2 className="text-3xl md:text-[40px] font-bold mb-10 text-center text-gray-700">
                Our Products
            </h2>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}

export default ProductsContainer
