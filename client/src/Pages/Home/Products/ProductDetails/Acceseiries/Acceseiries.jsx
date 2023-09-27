import titleImg from "../../../../../assets/bg_title.webp";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
// import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useEffect, useState } from "react";
import SingleProduct from "../../../../../Components/SingleProduct/SingleProduct";
const Acceseiries = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../../../../../../public/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="my-16">
      <div className="flex justify-center ">
        {" "}
        <div className="text-center w-[450px]">
          <div className="mx-auto mb-5">
            <img src={titleImg} alt="" className="mx-auto" />
          </div>
          <div className="flex items-center  mb-9">
            <span className="h-[2px] w-full  bg-black"></span>
            <h1 className="w-full font-bold text-[20px] uppercase">
              Acceseiries
            </h1>
            <span className="h-[2px] w-full  bg-black"></span>
          </div>
        </div>
      </div>
      <div>
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
    </div>
  );
};

export default Acceseiries;
