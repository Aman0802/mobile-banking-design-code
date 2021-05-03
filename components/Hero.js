import WbSunnyIcon from "@material-ui/icons/WbSunny";

const Hero = () => {
  return (
    <div className="flex bg-gray-100">
      <div className="flex-1 my-auto py-20 md:py-0">
        <div className="max-w-sm flex-col ml-10 mr-10 lg:mr-0 lg:ml-20">
          <div className="flex items-center">
            <WbSunnyIcon />
            <span className="ml-2 text-black-800 font-medium">
              30 Days free trial
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold my-6 lg:my-8">
            Life should be Easy.
          </h2>
          <p className="text-gray-400 font-semibold">
            financial transactions remotely using a mobile device such as a
            smartphone or tablet
          </p>
          <a className="inline-block text-md bg-gray-800 text-white px-8 lg:px-10 py-3.5 mt-6 rounded-lg font-bold bg-black">
            Get Started
          </a>
        </div>
      </div>
      <div className="hidden md:block flex-1">
        <img src="/hero-image.jpg" />
      </div>
    </div>
  );
};

export default Hero;
