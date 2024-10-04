import Footer from "./components/navigation/Footer";
import Navbar from "./components/navigation/Navbar";
import Accordion from "./components/partitions/Accordion";
import Blog from "./components/partitions/Blog";
import Carousel from "./components/partitions/Carousel";
import Hero from "./components/partitions/Hero";
import Services from "./components/partitions/Services";
import NewsLetterSubscription from "./components/shared/NewsLetterSubscription";

function App() {
  return (
    <main className="">
      <section className="bg-customNavy s1220:px-[100px] s1024:px-[40px] px-[20px]">
        <div className="absolute top-0 right-0 s767:block hidden">
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

      <section className="s1220:px-[100px] s1024:px-[40px] px-[20px]">
        <Services />
      </section>

      <section className="bg-customNavy s1220:p-[100px] s1024:p-[40px] p-[20px]">
        <Carousel />
      </section>

      <section className="s1220:p-[100px] s1024:p-[40px] p-[20px] mt-10">
        <Accordion />
      </section>

      <section className="s767:pb-[100px] pb-[40px] s767:py-0 py-[60px]">
        <Blog />
      </section>

      <section className="s1220:p-[100px] s1024:p-[40px] p-[20px]">
        <NewsLetterSubscription />
        <Footer />
      </section>
    </main>
  );
}

export default App;
