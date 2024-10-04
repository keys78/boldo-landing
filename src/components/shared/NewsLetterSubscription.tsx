import { motion } from "framer-motion";

const NewsLetterSubscription = () => {
  return (
    <div className="relative bg-customNavy rounded-[12px] overflow-auto p-5">
      <div className="absolute top-0 right-0">
        <svg
          width="734"
          height="239"
          viewBox="0 0 734 239"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="646.5" cy="-407.5" r="646.5" fill="#1C3D5B" />
        </svg>
      </div>

      <div className=" pt-[100px] pb-[40px] flex items-center flex-col justify-center relative z-10">
        <h3 className="manrope s-767:text-[48px] text-[28px] text-white max-w-[750px] text-center mx-auto">
          An enterprise template to ramp up your company website
        </h3>
        <form className="flex s480:flex-row flex-col items-center s480:space-x-6 s480:space-y-0 space-y-5 max-w-[700px] py-[48px] text-[20px]">
          <input
            type="text"
            className="rounded-full py-4 bg-white w-full s480:px-24 px-12"
            placeholder="Your email address"
            required
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            type="submit"
            className="text-customNavy bg-customGreen py-4 px-12 rounded-full whitespace-nowrap font-semibold s480:w-auto w-full"
          >
            Start Now
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetterSubscription;
