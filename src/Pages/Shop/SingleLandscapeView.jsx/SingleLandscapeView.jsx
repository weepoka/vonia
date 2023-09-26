// import React from 'react';
import { Icon } from "@iconify/react";
import "./SingleLandscapeView.css";
const SingleLandscapeView = ({ product }) => {
  const {
    title,
    image,
    rating,
    newarrival,
    regular_price,
    offer_price,
    onsale,
    reviews,
  } = product;
  return (
    <div className=" singleItemView relative ">
      <div className="flex gap-3 p-1">
        <div className=" w-[40%] relative h-[350px] imgViewDiv">
          <img
            src={image}
            className="h-full w-full object-contain p-5"
            alt=""
          />
          <div className="w-[60%] showDivView mx-auto absolute top-[70%] left-[20%] text-center">
            <button className="uppercase mt-2 w-[90%] font-bold p-2  bg-white text-black hover:bg-[#c06b81] hover:text-white flex items-center justify-center gap-2">
              <Icon icon="mingcute:search-line" className="text-[18px]" />{" "}
              <span>Quick View</span>
            </button>
          </div>
          <div className="overlay"></div>
        </div>
        <div className="w-[60%]">
          <h1 className="text-[20px] font-semibold my-2">{title}</h1>
          <div>
            <div className="flex gap-3 text-[15px] my-3">
              <span className="flex text-[#898989]">
                <Icon icon="uil:star" />
                <Icon icon="uil:star" />
                <Icon icon="uil:star" />
                <Icon icon="uil:star" />
                <Icon icon="uil:star" />
              </span>
              <h2 className="text-[#898989] underline text-[15px]">
                1 <span className="ml-1">Reviews</span>
              </h2>
            </div>
            <div>
              {" "}
              <span className="price mr-4 font-semibold"> £ 36.00 </span>
              <span className="price line-through text-[16px] text-[#999999] font-semibold">
                {" "}
                £ 36.00{" "}
              </span>
            </div>
            <div>
              <p>
                {" "}
                Faded short sleeves t-shirt with high neckline. Soft and
                stretchy material for a comfortable fit. Accessorize with a
                straw hat and you're ready for summer!
              </p>
            </div>
            <div>
              <div className="flex gap-3 my-4 w-[100%] text-center  items-center">
                <span className="border-2 px-3 py-2 border-gray-400 hover:text-white items-center flex gap-2  hover:bg-[#c06b81] text-gray-400">
                  <Icon icon="ion:cart-outline" className="text-[20px]" /> ADD
                  TO CART
                </span>
                <span className="border-2 px-3 py-2 border-gray-400  hover:text-white hover:bg-[#c06b81] text-gray-500">
                  <Icon icon="iconamoon:heart-fill" />
                </span>
                <span className="border-2 px-3 py-2 border-gray-400 hover:text-white  hover:bg-[#c06b81] text-gray">
                  <Icon icon="pajamas:chart" />
                </span>
              </div>
            </div>
            <button className="bg-green-400 font-semibold border-2 border-black text-white px-4 py-2 mt-2">
              Instock
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleLandscapeView;
