import HeroGraphics from "../../assets/svg/HeroGraphics";
import Marquee from "../shared/Marquee";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div className="s1024:flex items-center w-full relative z-10 pb-20">
        <div className="max-w-[560px] mx-auto s767:text-left text-center">
          <h2 className="manrope s767:text-[48px] text-[32px] text-white">
            Save time by building <br /> fast with Boldo Template{" "}
          </h2>
          <p className="text-white pt-6 pb-8">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className="flex s480:flex-row flex-col items-center s480:space-x-4 s480:space-y-0 space-y-5 s1024:justify-start justify-center s1024:mb-0 mb-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-customGreen text-customNavy px-8 py-4 rounded-full font-semibold s480:w-auto w-full"
            >
              Buy Template
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="border-2 border-white text-white px-12 py-4 rounded-full font-semibold s480:w-auto w-full"
            >
              Explore
            </motion.button>
          </div>
        </div>
        <div className="w-full flex s1024:flex-row flex-col-reverse items-center justify-between relative z-10 ">
          <div>&nbsp;</div>
          <HeroGraphics className={"s480:w-[494px] w-[330px]"} />
        </div>
      </div>
      <Marquee />
    </div>
  );
};

export default Hero;
