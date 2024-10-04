import { useState } from "react";
import Logo from "../../assets/svg/Logo";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      <header className="flex items-center justify-between s1024:pt-[56px] pt-[20px] s1024:pb-[110px] pb-[50px] relative z-10">
        <Logo className={"s480:w-[163px] w-[120px]"} />
        <nav className="s991:flex hidden items-center justify-between space-x-12">
          <ul className="flex items-center justify-between space-x-12 text-white">
            <a href="#" role="link">
              <li>Product</li>
            </a>
            <a href="#" role="link">
              <li>Services</li>
            </a>
            <a href="#" role="link">
              <li>About</li>
            </a>
          </ul>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="rounded-full text-customNavy bg-white px-8 py-2"
          >
            Log In
          </motion.button>
        </nav>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={toggleSidebar}
          className="text-white s991:hidden block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
        </motion.button>
      </header>

      <nav
        className={`fixed top-0 left-0 w-64 h-full bg-customNavy text-white z-20 transform transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center pt-20 space-y-6">
          <a href="#">
            <p>Product</p>
          </a>
          <a href="#">
            <p>Services</p>
          </a>
          <a href="#">
            <p>About</p>
          </a>
          <a href="#">
            <p>Contact</p>
          </a>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="mt-6 rounded-full text-customNavy bg-white px-8 py-2"
          >
            Log In
          </motion.button>
        </div>
      </nav>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Navbar;
