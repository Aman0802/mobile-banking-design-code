const NewsLetter = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center">Subscribe Newsletter</h2>
      <p className="text-gray-400 font-semibold text-center my-3">
        financial transactions remotely using mobile
      </p>
      <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center my-10">
        <input
          className="rounded-lg mb-4 sm:my-0 sm:mr-4 py-2 px-3 border-2 border-gray-400"
          type="email"
          placeholder="Enter your email."
        />
        <a className="flex justify-center items-center text-md bg-gray-800 text-white px-8 lg:px-10 py-2 rounded-lg font-bold bg-black">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default NewsLetter;
