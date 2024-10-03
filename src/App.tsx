import Footer from "./components/navigation/Footer";
import Navbar from "./components/navigation/Navbar";
import Hero from "./components/partitions/Hero";
import Services from "./components/partitions/Services";

function App() {

  return (
    <main>
      <section className="bg-customNavy px-[100px]">
        <div className="absolute top-0 right-0">
          <svg
            width="623"
            height="504"
            viewBox="0 0 623 504"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="646.5" cy="-142.5" r="646.5" fill="#1C3D5B" />
          </svg>
        </div>

        <Navbar />
        <Hero />
      </section>

      <section className="px-[100px]">
        <Services />
      </section>

      <section className="p-[100px]">
        <Footer />
      </section>
    </main>
  );
}

export default App
