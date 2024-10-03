// import author_one from "../../assets/png/author_one.png";

// const Carousel = () => {
//   return (
//     <div>
//       <h2 className="text-[36px] manrope text-white">
//         An enterprise template to ramp up your company website
//       </h2>
//       <div>
//         <button>Prev</button>
//         <button>Next</button>
//       </div>
//       <div className="flex items-start">
//         <div className="max-w-[350px] bg-white text-[24px] rounded-[8px] p-[40px]">
//           “Buyer buzz partner network disruptive non-disclosure agreement
//           business”
//           <div className="w-full">
//             <img src={author_one} alt="" />
//           </div>
//         </div>
//         <div className="max-w-[350px] bg-white text-[24px] rounded-[8px] p-[40px]">
//           “Learning curve infrastructure value proposition advisor strategy user
//           experience hypotheses investor.” business”
//           <div className="w-full">
//             <img src={author_one} alt="" />
//           </div>
//         </div>
//         <div className="max-w-[350px] bg-white text-[24px] rounded-[8px] p-[40px]">
//           “Release facebook responsive web design business model canvas seed
//           money monetization.”
//           <div className="w-full">
//             <img src={author_one} alt="" />
//           </div>
//         </div>
//         <div className="max-w-[350px] bg-white text-[24px] rounded-[8px] p-[40px]">
//           “Koko By Kloe.”
//           <div className="w-full">
//             <img src={author_one} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

// import { useState } from "react";
// import author_one from "../../assets/png/author_one.png";

// const items = [
//   {
//     id: 1,
//     quote:
//       "“Buyer buzz partner network disruptive non-disclosure agreement business”",
//     authorImg: author_one,
//   },
//   {
//     id: 2,
//     quote:
//       "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
//     authorImg: author_one,
//   },
//   {
//     id: 3,
//     quote:
//       "“Release facebook responsive web design business model canvas seed money monetization.”",
//     authorImg: author_one,
//   },
//   {
//     id: 4,
//     quote:
//       "“Release facebook responsive web design business model canvas seed money monetizationhd shsjksksf fjfksfws sfjsfkfs.”",
//     authorImg: author_one,
//   },
// ];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsPerView = 3;

//   const nextItem = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex + 1) % (items.length - itemsPerView + 1)
//     );
//   };

//   const prevItem = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? items.length - itemsPerView : prevIndex - 1
//     );
//   };

//   return (
//     <div className="border border-red-500 max-w-[1200px] overflow-x-auto">
//       <h2 className="text-[36px] manrope text-white max-w-[550px]">
//         An enterprise template to ramp up your company website
//       </h2>
//       <div className="flex items-center justify-center mt-4">
//         <button onClick={prevItem} className="mr-4">
//           Prev
//         </button>
//         <button onClick={nextItem}>Next</button>
//       </div>
//       <div className="overflow-hidden mt-6">
//         <div
//           className="flex max-w-[350px] transition-transform duration-300"
//           style={{
//             transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
//           }}
//         >
//           {items.map((item) => (
//             <div
//               key={item.id}
//               className="min-w-[350px] bg-white text-[24px] rounded-[8px] p-[40px] mx-2"
//             >
//               {item.quote}
//               <div className="w-full mt-4">
//                 <img src={item.authorImg} alt={`Author ${item.id}`} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
import { useState } from "react";
import author_one from "../../assets/png/author_one.png";
import ArrowRight from "../../assets/svg/ArrowRight";

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
  const itemsPerView = 3;

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
    <div className="max-w-[1400px] overflow-x-auto">
      <h2 className="text-[48px] manrope text-white max-w-[700px]">
        An enterprise template to ramp up your company website
      </h2>
      <div className="flex items-center justify-end mt-4">
        <button
          onClick={prevItem}
          className="mr-4 bg-white rounded-full p-4 rotate-180"
        >
          <ArrowRight />
        </button>
        <button className="bg-white rounded-full p-4" onClick={nextItem}>
          <ArrowRight />
        </button>
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
