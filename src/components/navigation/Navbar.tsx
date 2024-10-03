import Logo from "../../assets/svg/Logo"

const Navbar = () => {
  return (
    <header className="flex items-center justify-between pt-[56px] pb-[110px] relative z-10">
      <Logo />
      <nav className="flex items-center justify-between space-x-12">
        <ul className="flex items-center justify-between space-x-12 text-white">
          <a href="#" role="link"><li>Product</li></a>
          <a href="#" role="link"><li>Services</li></a>
          <a href="#" role="link"><li>About</li></a>
        </ul>
        <button className="rounded-full text-customNavy bg-white px-8 py-2">Log In</button>
      </nav>
    </header>
  );
}

export default Navbar