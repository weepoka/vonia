// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

//images import

import brand1 from "../../assets/brand1.webp";
import brand2 from "../../assets/brand2.webp";
import brand3 from "../../assets/brand3.webp";
import brand4 from "../../assets/brand4.webp";
import brand5 from "../../assets/brand5.webp";
import brand6 from "../../assets/brand6.webp";
import { useEffect, useState } from "react";

const Brand = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);
  useEffect(() => {
    const updateSlidesPerView = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 576) {
        // Small devices
        setSlidesPerView(1);
      } else if (screenWidth <= 1024) {
        // Medium devices
        setSlidesPerView(3);
      } else {
        // Large devices
        setSlidesPerView(5);
      }
    };

    // Initial call to set initial slidesPerView
    updateSlidesPerView();

    // Listen to window resize events and update slidesPerView accordingly
    window.addEventListener("resize", updateSlidesPerView);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper w-10/12 mx-auto my-10"
      slidesPerView={slidesPerView}
      spaceBetween={20}
      // pagination={{
      //   clickable: true,
      // }}
    >
      <div className="flex gap-4">
        <SwiperSlide>
          <img src={brand1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand6} alt="" />
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default Brand;
