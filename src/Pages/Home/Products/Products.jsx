import { useEffect } from "react";
import { useState } from "react";
import SingleProduct from "../../../Components/SingleProduct/SingleProduct";
import "./Product.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Products = () => {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);

  const handleCategory = (e) => {
    e.preventDefault();
    const value = e.target.innerText;
    // console.log(value);
    setCategory(value);
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [category]);
  console.log(category);
  return (
    <div className="w-10/12 mx-auto">
      <div className=" text-center my-12">
        <div>
          {" "}
          <span
            className="text-[#777777] text-[20px] font-bold uppercase mr-4 hover:border-b-2 border-gray-200 p-1"
            onClick={(e) => handleCategory(e)}
          >
            new arrival
          </span>
          <span
            className="text-[#777777] text-[20px] font-bold uppercase mr-4 hover:border-b-2 border-gray-200 p-1"
            onClick={(e) => handleCategory(e)}
          >
            onSale
          </span>
          <span
            className="text-[#777777] text-[20px] font-bold uppercase mr-4 hover:border-b-2 border-gray-200 p-1"
            onClick={(e) => handleCategory(e)}
          >
            BestSeller
          </span>
        </div>
      </div>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper "
        slidesPerView={4}
        spaceBetween={20}
        // pagination={{
        //   clickable: true,
        // }}
      >
        <div className="grid grid-cols-4 swiperMainDiv">
          {products?.map((product, idx) => (
            <SwiperSlide key={idx}>
              {" "}
              <SingleProduct product={product}></SingleProduct>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Products;
