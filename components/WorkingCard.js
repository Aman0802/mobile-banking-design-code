const WorkingCard = ({ title, imagePath, content }) => {
  return (
    <div className="w-3/5 lg:w-1/5 flex-col mx-auto mt-10 lg:m-0">
      <img
        className="h-auto lg:h-56 xl:h-64 w-4/5 md:w-3/5 lg:w-48 xl:w-56 mx-auto"
        src={imagePath}
      />
      <h3 className="text-2xl md:text-3xl font-bold text-center my-3 lg:my-6">
        {title}
      </h3>
      <p className="text-gray-400 text-lg font-medium text-center max-w-sm mx-auto lg:max-w-xs leading-relaxed">
        {content}
      </p>
    </div>
  );
};

export default WorkingCard;
