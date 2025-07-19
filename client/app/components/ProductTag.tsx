const ProductTag = ({ newProduct, off }: { newProduct: boolean, off: number | boolean }) => {
    return (
        <>
            {newProduct ? (
                <span className="absolute top-4 right-4 bg-[#2EC1AC] text-white px-2 py-1 rounded-full w-12 h-12 flex items-center justify-center">
                    New
                </span>
            ) : off && (
                <span className="absolute top-4 right-4 bg-[#E97171] text-white px-2 py-1 rounded-full w-12 h-12 flex items-center justify-center">
                    -{off}%
                </span>
            )}
        </>
    )
}

export default ProductTag