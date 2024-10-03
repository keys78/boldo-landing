import HeroGraphics from "../../assets/svg/HeroGraphics";
import Marquee from "../shared/Marquee";

const Hero = () => {
  return (
    <div>
      <div className="flex items-center w-full">
        <div className="max-w-[560px]">
          <h2 className="manrope text-[48px] text-white">
            Save time by building <br /> fast with Boldo Template{" "}
          </h2>
          <p className="text-white pt-6 pb-8">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className="flex items-center space-x-4">
            <button className="bg-customGreen text-customNavy px-8 py-4 rounded-full font-semibold">
              Buy Template
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-full font-semibold">
              Explore
            </button>
          </div>
        </div>
        <div className="w-full flex items-center justify-between relative z-10">
            <div>&nbsp;</div>
          <HeroGraphics />
        </div>
      </div>
      <Marquee />
    </div>
  );
};

export default Hero;
