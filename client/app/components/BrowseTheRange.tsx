import Image from "next/image"
import Link from "next/link"


const BrowseTheRange = () => {
    return (
        <section className="max-w-[1300px] mx-auto p-8 md:pt-16 pb-8">
            <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold">Browse The Range</h2>
                <p className="text-sm md:text-base mt-2 text-gray-800">Explore our wide range of products tailored to your needs.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                <Link href="/" className=" mx-auto">
                    <Image src='/images/dining.png' alt="image" width={350} height={200} className="object-cover w-[350px] h-[400px] rounded-lg" />
                    <span className="block text-center mt-6 text-lg font-semibold">Dining</span>
                </Link>
                <Link href="/" className=" mx-auto">
                    <Image src='/images/living.png' alt="image" width={350} height={200} className="object-cover w-[350px] h-[400px] rounded-lg" />
                    <span className="block text-center mt-6 text-lg font-semibold">Living</span>
                </Link>
                <Link href="/" className=" mx-auto">
                    <Image src='/images/bedroom1.png' alt="image" width={350} height={200} className="object-cover w-[350px] h-[400px] rounded-lg" />
                    <span className="block text-center mt-6 text-lg font-semibold">Bedroom</span>
                </Link>
            </div>

        </section>
    )
}

export default BrowseTheRange