import BrowseTheRange from "./components/BrowseTheRange";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrowseTheRange />
      </main>
    </>
  );
}
