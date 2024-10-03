import Presto from "../../assets/svg/Presto";
import Boldo from "../../assets/svg/Boldo";

const Marquee = () => {
  const images = [<Presto key="presto" />, <Boldo key="boldo"  fill="white"/>];

  const repeatedImages = [...Array(20)].flatMap(() => images);

  return (
    <div className="overflow-hidden whitespace-nowrap relative py-[100px]">
      <div className="bg-customNavy w-[150px] absolute h-[40px] opacity-70 z-10"></div>
      <div className="bg-customNavy w-[150px] absolute h-[40px] opacity-70 z-10 right-0"></div>
      <div className="flex animate-marquee">
        {Array.from({ length: 2 }).map((_, idx) => (
          <div key={idx} className="flex space-x-[100px]">
            {repeatedImages.map((image) => (
              <div key={image.key} className="inline-block">
                {image}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
