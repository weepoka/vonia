import { useEffect, useState } from "react";
import userImg from "../../../assets/userImg.webp";
import bgImg from "../../../assets/bg_testimonials.webp";
const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Reviews = [
    {
      image: userImg,
      name: "Mekirin-h",
      email: "mekirin@gmail.com",
      message:
        "lorem25 you this the best ecommerce website for me just amzing services",
    },
    {
      image: userImg,
      name: "Morsaline",
      email: "mekirin@gmail.com",
      message:
        "lorem25 you this the best ecommerce website for me just amzing services",
    },
    {
      image: userImg,
      name: "Ronnie",
      email: "mekirin@gmail.com",
      message: "l ecommerce website for me just amzing services",
    },
    // Add more content elements as needed
  ];

  const contentList = Reviews.map((item) => (
    <div className="bg-blue-300 p-4 rounded-lg" key={item.id}>
      <h1>{item.name}</h1>
      <p>{item.message}</p>
    </div>
  ));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === contentList.length - 1 ? 0 : prevIndex + 1
      ); // Cycle through content
    }, 2000); // Change content every 2 seconds

    return () => clearTimeout(timeout); // Clear the timeout when the component unmounts
  }, [currentIndex, contentList]);

  const handleClick = (index) => {
    setCurrentIndex(index); // Set the current index on click
  };

  return (
    <div
      className={`bg_reviwes  bg-cover bg-center relative  p-4`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex items-center mb-4">
        {contentList.map((_, index) => (
          <button
            key={index}
            className={`mr-2 p-2 rounded-full focus:outline-none ${
              index === currentIndex ? "bg-blue-400" : "bg-gray-300"
            }`}
            onClick={() => handleClick(index)}
          ></button>
        ))}
      </div>
      {contentList[currentIndex]}
    </div>
  );
};

export default Reviews;
