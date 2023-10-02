import sideBanner1 from "../../../assets/sidebanner1.webp";
import sideBanner2 from "../../../assets/sidebanner2.webp";
import banner from "../../../assets/banner1.webp";
import banner3 from "../../../assets/banner3.webp";
import productBanner1 from "../../../assets/productBanner1.webp";
import productBanner2 from "../../../assets/productBanner2.webp";
import "./Banner.css";

//swipper imports
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="w-10/12 mx-auto md:flex md:gap-7 md:mt-16">
      <div className="md:w-[70%] ">
        {/* <div>
          <img className="h-[80vh] " src={banner} alt="" />
        </div> */}
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="relative w-full h-[80vh]">
                <img
                  className="object-cover h-full w-full "
                  src={banner}
                  alt=""
                />
                <div className="text-gray-500 absolute top-28 left-[110px] w-[30%] text-center">
                  <h1 className="text-[70px] font-semibold mb-2">Sale!</h1>
                  <p className="px-1 text-white py-3 mb-2  text-[20px] bg-pink-500">
                    10% of all product{" "}
                  </p>
                  <br />
                  <button className="uppercase border-2 hover:bg-white  hover:text-black hover:transition-all hover:duration-150 border-white p-2">
                    shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-[80vh]">
                <img
                  className="h-full w-full object-cover "
                  src={banner3}
                  alt=""
                />
                <div className="text-gray-500 absolute top-28 left-[110px] w-[30%] text-center">
                  <h1 className="text-[70px] font-semibold mb-2">Sale!</h1>
                  <p className="px-1 text-white py-3 mb-2  text-[20px] bg-pink-500">
                    10% of all product{" "}
                  </p>
                  <br />
                  <button className="uppercase border-2 hover:bg-white  hover:text-black hover:transition-all hover:duration-150 border-white p-2">
                    shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex justify-around items-center my-8">
          <div>
            <h2 className="text-[#363636] uppercase font-bold text-[28px]">
              sign up and get
              <span className="text-[#c06b81]"> 25% off</span>
            </h2>
            <p className="text-[#959595]">
              Lorem Ipsum is simply dummy text of the printing
            </p>
          </div>
          <div>
            <button className="bg-[#c06b81] text-white font-bold text-[14px] py-3 px-8 uppercase">
              ShopNow
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-3 sm:justify-around">
          <div className="relative">
            <div className="relative hoverAnimation">
              <img src={productBanner1} className="w-full h-full" alt="" />
            </div>
            <div className="absolute  left-0 md:my-8 top-0 ">
              <div className="relative w-full h-full">
                <h2 className="absolute top-2 left-4 leading-none text-white font-bold text-[20px] uppercase">
                  FURNITURE <br />
                  <span className="w-[70px] inline-block bg-white mt-[-10px] h-[2px]"></span>
                </h2>
                <a
                  className=" mt-48 sm:mt-36 ml-6  inline-block text-[#363636] underline text-[13px]"
                  href="#"
                >
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
          <div className="relative  mt-6 sm:mt-0">
            <div className="relative hoverAnimation">
              <img src={productBanner2} className="w-full h-full" alt="" />
            </div>
            <div className="absolute  left-0 md:my-8 top-0 ">
              <div className="relative w-full h-full">
                <h2 className="absolute top-2 left-4 leading-none text-white font-bold text-[20px] uppercase">
                  bathroom <br />
                  <span className="w-[70px] inline-block bg-white mt-[-10px] h-[2px]"></span>
                </h2>
                <a
                  className=" mt-48 sm:mt-36 ml-6  inline-block text-[#363636] underline text-[13px]"
                  href="#"
                >
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[30%] overflow-hidden">
        <div className=" cursor-pointer  flex flex-col sm:flex-row md:block  gap-5 mt-6 md:mt-0  mainAnimationDiv">
          <div
            href=""
            className="relative hoverAnimation w-full h-full sm:w-[300px] sm:h-[300px] md:h-[500px]"
          >
            {" "}
            <img
              className="w-full h-full   object-cover md:h-[500px]"
              src={sideBanner1}
              alt=""
            />
          </div>
          <div
            href=""
            className="relative hoverAnimation h-full w-full sm:w-[300px] sm:h-[300px] md:h-[500px] "
          >
            <img
              className="w-full h-full  object-cover md:h-[500px]"
              src={sideBanner2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
