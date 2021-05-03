const FeatureCard = ({ title, content, imagePath, inverted }) => {
  return (
    <div
      className={`my-32 flex ${
        inverted
          ? "flex-col-reverse md:flex-row-reverse"
          : "flex-col-reverse md:flex-row"
      }`}
    >
      {/* CONTENT */}
      <div className="flex-1 my-auto">
        <div className="max-w-sm lg:ml-20">
          <h3 className="text-3xl md:text-5xl font-bold leading-normal">
            {title}
          </h3>
          {content}
        </div>
      </div>
      {/* IMAGE */}
      <div className="flex-1">
        <img className="w-60 lg:w-80 mx-auto mb-6 lg:ml-20" src={imagePath} />
      </div>
    </div>
  );
};

export default FeatureCard;
