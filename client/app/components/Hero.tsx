const Hero = () => {
    return (
        <section className="min-h-[85vh] bg-[url('/images/hero-bg.png')] bg-center relative w-[100vw]">
            <div className="bg-[#FFF3E3] text-primary w-[95%] max-w-lg absolute top-[50%] -translate-y-[50%] right-[50%] translate-x-[50%] md:translate-x-[0%]  md:right-[10%] p-8 rounded-lg shadow-lg">
                <p className="font-semibold">New Arrival</p>
                <h1 className="text-4xl md:text-5xl font-bold leading-10 md:leading-[60px] max-w-[90%] mt-1">Discover Our New Collection</h1>
                <p className="text-sm md:text-base font-medium mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis optio totam vel pariatur consectetur</p>
                <button className="mt-8  px-8 py-2.5 text-sm font-bold bg-primary border border-primary text-white cursor-pointer hover:bg-transparent hover:text-primary active:translate-y-0.5  transition">BUY NOW</button>
            </div>
        </section>
    )
}

export default Hero