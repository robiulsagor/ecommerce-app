import BrowseTheRange from "./components/BrowseTheRange";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductsContainer from "./components/ProductsContainer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrowseTheRange />
        <ProductsContainer />
      </main>
    </>
  );
}
