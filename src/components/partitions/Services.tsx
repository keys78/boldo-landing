import ArrowRight from "../../assets/svg/ArrowRight";
import si_one from "../../assets/png/si_one.png";
import si_two from "../../assets/png/si_two.png";
import si_three from "../../assets/png/si_three.png";
import charts from "../../assets/png/charts.png";
import charts_two from "../../assets/png/charts_two.png";
import CheckMark from "../../assets/svg/CheckMark";
import Star from "../../assets/svg/Star";
import Eye from "../../assets/svg/Eye";
import Sunlight from "../../assets/svg/Sunlight";
import { motion } from "framer-motion";

const serviceData = [
  {
    img: si_one,
    title: "Cool feature title",
    description: "Learning curve network effects return on investment.",
  },
  {
    img: si_two,
    title: "Cool feature title",
    description: "Learning curve network effects return on investment.",
  },
  {
    img: si_three,
    title: "Cool feature title",
    description: "Learning curve network effects return on investment.",
  },
];

const ServiceCard = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => (
  <div>
    <img src={img} alt={title} className="mb-4  w-full" />
    <h4 className="pt-4">{title}</h4>
    <p className="text-customGray pt-3 pb-6">{description}</p>
    <a href="#">
      <span className="relative inline-block">
        <span className="relative z-10 flex font-semibold">
          <span>Explore page </span>
          <ArrowRight />
        </span>
        <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-black transform translate-y-2"></span>
      </span>
    </a>
  </div>
);

const Services = () => {
  return (
    <div>
      <div className="text-center s767:py-20 py-12">
        <h2 className="text-customGray">Our Services</h2>
        <h3 className="s767:text-[48px] text-[32px] manrope max-w-[900px] mx-auto s480:py-8 py-4">
          Handshake infographic mass market crowdfunding iteration.
        </h3>
      </div>
      <div className="flex s767:flex-row flex-col s767:space-y-0 space-y-12 items-center justify-between s1220:space-x-[200px] s767:space-x-[100px]">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            img={service.img}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <div>
        <div className="flex s991:flex-row flex-col-reverse items-center justify-between s991:space-x-10 s991:pt-[200px] pt-[100px] s991:pb-[100px] pb-[50px]">
          <img src={charts} alt="" />
          <div>
            <div className="max-w-[493px] flex flex-col space-y-5">
              <h3 className="s767:text-[36px] text-[32px] s767:text-left text-center manrope mb-4">
                We connect our customers with the best, and help them keep
                up-and stay open.
              </h3>
              <div className="flex items-center space-x-5 text-[20px]">
                <CheckMark /> <p>We connect our customers with the best.</p>
              </div>
              <div className="flex items-center space-x-5 text-[20px]">
                <CheckMark /> <p>Advisor success customer launch party.</p>
              </div>
              <div className="flex items-center space-x-5 text-[20px]">
                <CheckMark /> <p>Business-to-consumer long tail.</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-white bg-customNavy font-semibold py-4 px-12 rounded-full mt-12 s991:mb-0 mb-16"
            >
              Start Now
            </motion.button>
          </div>
        </div>
      </div>

      <div className="flex s991:flex-row flex-col items-center justify-between s480:pb-0 pb-20">
        <div className="max-w-[493px] flex flex-col space-y-5">
          <h3 className="s767:text-[36px] text-[32px] s767:text-left text-center manrope mb-10">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>
          <div className="s991:pb-0 pb-10">
            <div className="flex items-center space-x-5 px-6 py-5 font-semibold rounded-[6px] bg-customNavy text-white mb-5">
              <Star />
              <span>We connect our customers with the best.</span>
            </div>
            <div className="flex items-center space-x-5 px-6 py-5 font-semibold rounded-[6px] bg-white text-customNavy mb-6 shadow">
              <Eye />
              <span>Advisor success customer launch party.</span>
            </div>
            <div className="flex items-center space-x-5 px-6 py-5 font-semibold rounded-[6px] bg-white text-customNavy mb-6 shadow">
              <Sunlight />
              <span>Business-to-consumer long tail.</span>
            </div>
          </div>
        </div>
        <img src={charts_two} alt="" />
      </div>
    </div>
  );
};

export default Services;
