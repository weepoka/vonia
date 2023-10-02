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
    <div
      className="py-2 md:py-4 px-20 md:px-44 md:flex gap-24 rounded-lg text-white mt-5"
      key={item.id}
    >
      <div className="lg:flex  mb-2 items-center gap-5">
        <div>
          <img src={item.image} alt="" className="md:w-20 md:h-20 w-10 h-10" />
        </div>
        <div className="border-b-2 border-white pb-2 md:pb-4">
          <p>{item.name}</p>
          <p>{item?.email}</p>
        </div>
      </div>
      <div>
        <p>{item?.message}</p>
      </div>
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
      className={`bg_reviwes  bg-cover bg-center relative my-10 p-4 md:h-[210px] h-[260px]`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {contentList[currentIndex]}
      <div className="flex justify-center">
        <div className="flex items-center md:mb-4 -ml-60">
          {contentList.map((_, index) => (
            <button
              key={index}
              className={`mr-2    p-2 rounded-full  ${
                currentIndex == index ? "bg-gray-500" : "bg-gray-400 "
              } 
        }`}
              onClick={() => handleClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
