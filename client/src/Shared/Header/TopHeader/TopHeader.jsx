// import { useState } from "react";
import { Icon } from "@iconify/react";
import "./TopHeader.css";
import Ban from "../../../assets/BangladeshFlag1.png";
import Eng from "../../../assets/FlagEnglish.webp";
import { Link } from "react-router-dom";

const TopHeader = () => {
  // const [showSubcategories, setShowSubcategories] = useState(false);
  // const [showCurrencySubcategories, setShowCurrencySubcategories] =
  //   useState(false);
  return (
    <div className=" flex items-center bg-black text-white  border-2 border-gray-50">
      <div className="w-10/12  mx-auto flex justify-between items-center">
        <div className="">
          <p className="text-[13px] hidden  md:flex items-center justify-center gap-2">
            {" "}
            <Icon icon="mdi:truck-delivery" className="text-[20px]" />
            FREE SHIPPING ON ORDERS OVER $49
          </p>
        </div>
        <div>
          <div className="flex">
            {" "}
            <div className=" border-l-2 groupeCountry  border-r-2 text-sm border-r-gray-50 border-l-gray-50">
              <a
                href="#"
                className="px-4 py-2 flex items-center  gap-1 rounded"
              >
                English{" "}
                <span>
                  <Icon icon="gridicons:dropdown" />
                </span>
              </a>

              <div className=" subCountry shadow-lg  bg-white text-gray-800  rounded-lg">
                <a href="#" className=" px-4 py-2 flex gap-1 items-center">
                  <img
                    src={Eng}
                    alt=""
                    className="h-[15px] w-[15px] object-fill"
                  />
                  English
                </a>
                <a href="#" className="flex px-4 py-2 gap-1 items-center">
                  <img
                    src={Ban}
                    alt=""
                    className="h-[15px] w-[15px] object-fill"
                  />
                  Bangla
                </a>
              </div>
            </div>
            <div className=" text-sm groupeCountry border-r-2 border-r-gray-50 ">
              <a
                href="#"
                className=" px-4 py-2 flex items-center  gap-1 rounded"
              >
                Currency:GBP{" "}
                <span>
                  <Icon icon="gridicons:dropdown" />
                </span>
              </a>

              <div className=" subCountry bg-white text-gray-800 shadow-lg rounded-lg">
                <a href="#" className="block px-4 py-2">
                  Taka (Tk)
                </a>
                <a href="#" className="block px-4 py-2">
                  Dollar (USD)
                </a>
              </div>
            </div>
            <div className=" text-sm groupeCountry border-r-2 border-r-gray-50 ">
              <a
                href="#"
                className=" px-4 py-2 flex items-center  gap-1 rounded"
              >
                My Account{" "}
                <span>
                  <Icon icon="gridicons:dropdown" />
                </span>
              </a>

              <div className=" subCountry bg-white text-gray-800 shadow-lg rounded-lg">
                <Link to="/myaccount" className="block px-4 py-2">
                  My Account
                </Link>
                <Link to="/wishlist" className="block px-4 py-2">
                  My WishList
                </Link>
                <Link to="/contact" className="block px-4 py-2">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
