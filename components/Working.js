import WorkingCard from "./WorkingCard";

const Working = () => {
  const details = [
    {
      id: 1,
      imagePath: "/card-image.png",
      title: "Information",
      content:
        "Enter your information ensure your details safe and more secure",
    },
    {
      id: 2,
      imagePath: "/working-graph.jpg",
      title: "Data Secure",
      content: "Sending money faster & easier with end to end encryption",
    },
    {
      id: 3,
      imagePath: "/card-image.png",
      title: "Add Cards",
      content:
        "Add multiple cards and tracks your daily expenses with quality interface",
    },
  ];
  return (
    <div className="my-36">
      <h2 className="text-4xl lg:text-5xl font-bold text-center my-6">
        How it works
      </h2>
      <p className="text-gray-500 max-w-md text-lg font-semibold mx-auto text-center leading-relaxed">
        Mobile banking differs from mobile payments, which involves the use of a
        mobile device
      </p>
      <div className="flex flex-col lg:flex-row lg:justify-evenly mt-0 mb-16 lg:mt-20 lg:mb-36">
        {details?.map(({ id, title, imagePath, content }) => (
          <WorkingCard
            key={id}
            title={title}
            content={content}
            imagePath={imagePath}
          />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Working;
