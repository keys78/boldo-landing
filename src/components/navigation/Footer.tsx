import Boldo from "../../assets/svg/Boldo";

const Footer = () => {
  return (
    <footer className="s991:pt-[200px] pt-[100px]">
      <div className="flex s767:flex-row flex-col items-start s1220:space-x-[170px] s767:space-x-[80px] s767:space-y-0 space-y-8">
        <div className="max-w-[500px]">
          <Boldo fill="#0A2640" />
          <p className="s480:max-w-[300px] text-customGray pt-5">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
        </div>

        <div className="grid s991:grid-cols-3 grid-cols-2 s991:gap-40 gap-16 text-customGray list-none">
          <div className="flex flex-col space-y-5">
            <h3 className="text-customNavy font-semibold text-[20px]">
              Landings
            </h3>
            <li>Home</li>
            <li>Products</li>
            <li>Services</li>
          </div>
          <div className="flex flex-col space-y-5">
            <h3 className="text-customNavy font-semibold text-[20px]">
              Company
            </h3>
            <li>Home</li>
            <li className="whitespace-nowrap">
              Career{" "}
              <span className="bg-customGreen py-1 px-4 text-customNavy rounded-full">
                Hiring!
              </span>
            </li>
            <li>Services</li>
          </div>
          <div className="flex flex-col space-y-5">
            <h3 className="text-customNavy font-semibold text-[20px]">
              Resources
            </h3>
            <li>Blog</li>
            <li>Products</li>
            <li>Services</li>
          </div>
        </div>
      </div>
      <p className="text-customGray s480:pt-0 pt-10">All rights reserved.</p>
    </footer>
  );
};

export default Footer;
