import { useEffect } from "react";
import { useState } from "react";
import SingleProduct from "../../../Components/SingleProduct/SingleProduct";
import "./Product.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Link } from "react-router-dom";

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
      <div className="swiperMainDiv ">
        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper py-12 border-b-[1px] border-[#e5e5e5]"
          slidesPerView={4}
          // slidesPerColumn={2}
          // slidesPerGroup={2}
          spaceBetween={20}
          // pagination={{
          //   clickable: true,
          // }}
        >
          <div>
            {products?.map((product, idx) => (
              <SwiperSlide key={idx}>
                {" "}
                <Link to={`/products/${product.id}`}>
                  <SingleProduct product={product}></SingleProduct>
                </Link>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Products;
