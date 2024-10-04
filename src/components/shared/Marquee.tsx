import Presto from "../../assets/svg/Presto";
import Boldo from "../../assets/svg/Boldo";

const Marquee = () => {
  const images = [
    <Presto key="presto" className={"s480:w-[148px] w-[90px]"} />,
    <Boldo key="boldo" fill="white" className={"s480:w-[146px] w-[88px]"} />,
  ];

  const repeatedImages = [...Array(20)].flatMap(() => images);

  return (
    <div className="overflow-hidden whitespace-nowrap relative s-480:py-[100px] s480:py-[60px] py-[20px]">
      <div className="bg-customNavy w-[150px] absolute h-[40px] opacity-70 z-10 s480:block hidden"></div>
      <div className="bg-customNavy w-[150px] absolute h-[40px] opacity-70 z-10 s480:block hidden right-0"></div>
      <div className="flex animate-marquee">
        {Array.from({ length: 2 }).map((_, idx) => (
          <div key={idx} className="flex s480:space-x-[100px] space-x-5">
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
