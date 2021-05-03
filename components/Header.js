import MenuIcon from "@material-ui/icons/Menu";

const Header = () => (
  <div className="flex justify-between h-16 lg:h-20">
    <div className="hidden md:w-full md:flex md:justify-between md:items-center">
      <h2 className="font-bold text-2xl">Besnik</h2>
      <div>
        <span className="font-bold mx-3 lg:mx-6 text-md">Business</span>
        <span className="mx-3 lg:mx-6 text-md font-semibold text-gray-400">
          Pricing
        </span>
        <span className="mx-3 lg:mx-6 text-md font-semibold text-gray-400">
          Features
        </span>
        <span className="mx-3 lg:mx-6 text-md font-semibold text-gray-400">
          About
        </span>
      </div>
      <div>
        <a className="text-md text-gray-800 px-6 py-2.5 lg:py-3 rounded-lg font-bold">
          Log In
        </a>
        <a className="text-md bg-gray-800 text-white px-6 py-2.5 lg:py-3 rounded-lg font-bold bg-black ml-2">
          Sign Up
        </a>
      </div>
    </div>
    <div className="flex justify-between items-center w-full md:hidden">
      <h2 className="font-bold text-2xl">Besnik</h2>
      <MenuIcon />
    </div>
  </div>
);

export default Header;
