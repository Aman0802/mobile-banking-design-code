import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="mb-20">
      <FeatureCard
        title="Download"
        imagePath="/phone.jpg"
        content={
          <>
            <p className="text-gray-400 font-semibold leading-relaxed my-8">
              Download Besnik mobile banking app for IOS and android. It helps
              you banking quickly and more smartly.
            </p>
            <a className="flex justify-between items-center w-48 font-medium rounded-lg border-2 border-gray-400 px-6 py-3 my-4">
              <img className="w-10" src="app-store.png" />
              App Store
            </a>
            <a className="flex justify-between items-center w-48 font-medium rounded-lg border-2 border-gray-400 px-6 py-3 my-4">
              <img className="w-10" src="play-store.png" />
              Play Store
            </a>
          </>
        }
        inverted
      />
      <FeatureCard
        title="Connecting all your banking needs"
        imagePath="/phone.jpg"
        content={
          <>
            <p className="text-gray-400 font-semibold leading-relaxed my-8">
              financialll transactions remotely using a mobile device such as a
              smartphone or tablet
            </p>
            <a className="inline-block font-medium rounded-lg border-2 border-gray-400 px-6 py-3 my-4">
              Get started
            </a>
          </>
        }
      />
      <hr />
    </div>
  );
};

export default Features;
