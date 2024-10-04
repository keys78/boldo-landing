import { useState } from "react";
import author_one from "../../assets/png/author_one.png";
import ArrowRight from "../../assets/svg/ArrowRight";
import { motion } from "framer-motion";


const items = [
  {
    id: 1,
    quote:
      "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    authorImg: author_one,
  },
  {
    id: 2,
    quote:
      "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    authorImg: author_one,
  },
  {
    id: 3,
    quote:
      "“Release facebook responsive web design business model canvas seed money monetization.”",
    authorImg: author_one,
  },
  {
    id: 4,
    quote:
      "“Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus cupiditate amet quae vero quaerat quod ut esse aspernatur! Minima, eligendi.”",
    authorImg: author_one,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView =
    window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;

  const nextItem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (items.length - itemsPerView + 1)
    );
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - itemsPerView : prevIndex - 1
    );
  };

  return (
    <div className="max-w-[1400px] overflow-x-auto s480:pt-0 py-5">
      <h2 className="s767:text-[48px] text-[32px] s767:text-left text-center manrope text-white max-w-[700px] pb-5">
        An enterprise template to ramp up your company website
      </h2>
      <div className="flex items-center justify-end mt-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={prevItem}
          className="mr-4 bg-white rounded-full p-4 rotate-180"
        >
          <ArrowRight />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="bg-white rounded-full p-4"
          onClick={nextItem}
        >
          <ArrowRight />
        </motion.button>
      </div>
      <div className="overflow-hidden mt-6">
        <div
          className="flex items-start transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="min-w-[350px] bg-white text-[24px] rounded-[8px] p-[40px] mx-2"
            >
              {item.quote}
              <div className="w-full mt-4">
                <img src={item.authorImg} alt={`Author ${item.id}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
