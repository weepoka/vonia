import { Icon } from "@iconify/react";
import "./SingleProduct.css";
const SingleProduct = ({ product }) => {
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
    <div className="  singleItem relative ">
      <div className=" p-1">
        <div className=" relative h-[350px]">
          <img
            src={image}
            className="h-full w-full object-contain p-5"
            alt=""
          />
          <div className="overlay"></div>
        </div>
        <div>
          <h1 className="text-[15px] font-semibold my-2">{title}</h1>
          <div>
            <div className="flex gap-3 text-[12px] my-2">
              <span className="flex text-[#898989]">
                <Icon icon="uil:star" />
                <Icon icon="uil:star" />
                <Icon icon="uil:star" />
                <Icon icon="uil:star" />
                <Icon icon="uil:star" />
              </span>
              <h2 className="text-[#898989] underline">
                1 <span className="ml-1">Reviews</span>
              </h2>
            </div>
            <div>
              {" "}
              <span className="price mr-4 font-semibold">
                {" "}
                £ {regular_price}{" "}
              </span>
              <span className="price line-through text-[16px] text-[#999999] font-semibold">
                {" "}
                £ 36.00{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[60%] showDiv mx-auto absolute top-[50%] left-[20%] text-center">
        <div className="flex gap-2 w-[100%] text-center justify-between items-center">
          <span className="border-2 px-3 py-2 border-white bg-transparent hover:bg-[#c06b81] text-white">
            <Icon icon="ion:cart-outline" />
          </span>
          <span className="border-2 px-3 py-2 border-white bg-transparent hover:bg-[#c06b81] text-white">
            <Icon icon="iconamoon:heart-fill" />
          </span>
          <span className="border-2 px-3 py-2 border-white bg-transparent hover:bg-[#c06b81] text-white">
            <Icon icon="pajamas:chart" />
          </span>
        </div>
        <button className="uppercase mt-2 w-[100%] font-bold px-4 py-2 bg-white text-black hover:bg-[#c06b81] hover:text-white">
          Quick View
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
