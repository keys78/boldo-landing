import Boldo from "../../assets/svg/Boldo";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-start space-x-5">
        <div className="min-w-[500px]">
          <Boldo fill="#0A2640" />
          <p className="max-w-[300px] text-customGray pt-5">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-40 text-customGray">
          <div className="flex flex-col space-y-5">
            <h3 className="text-customNavy font-semibold text-[20px]">
              Landings
            </h3>
            <p>Home</p>
            <p>Products</p>
            <p>Services</p>
          </div>
          <div className="flex flex-col space-y-5">
            <h3 className="text-customNavy font-semibold text-[20px]">
              Company
            </h3>
            <p>Home</p>
            <p>
              Career{" "}
              <span className="bg-customGreen py-1 px-4 text-customNavy rounded-full">
                Hiring!
              </span>
            </p>
            <p>Services</p>
          </div>
          <div className="flex flex-col space-y-5">
            <h3 className="text-customNavy font-semibold text-[20px]">
              Resources
            </h3>
            <p>Blog</p>
            <p>Products</p>
            <p>Services</p>
          </div>
        </div>
      </div>
      <p className="text-customGray">All rights reserved.</p>
    </footer>
  );
};

export default Footer;
