import { Toaster } from "react-hot-toast";
import BrowseTheRange from "./components/BrowseTheRange";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductsContainer from "./components/ProductsContainer";

export default function Home() {
  return (
    <>
      <Toaster /> {/* Toaster for notifications */}
      <Navbar />
      <main>
        <Hero />
        <BrowseTheRange />
        <ProductsContainer />
      </main>
    </>
  );
}
