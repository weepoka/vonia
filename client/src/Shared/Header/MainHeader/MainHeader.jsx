import { Icon } from "@iconify/react";
import logo from "../../../assets/Vonia logo.webp";
import { Link } from "react-router-dom";
const MainHeader = () => {
  return (
    <div className="w-[83%] my-14 text-center mx-auto flex justify-around items-center gap-40">
      <div className="text-lg hidden  md:flex items-center border-b-[1px] border-[#898989] p-1">
        <input
          className="border-none w-[100%] outline-none text-sm"
          type="text"
          placeholder="Search"
        />
        <span className="text-3xl color-[#898989]">
          <Icon
            className="text-3xl text-[#898989]"
            icon="iconamoon:search-thin"
          />
        </span>
      </div>
      <div className="text-center -ml-4">
        <img src={logo} alt="" />
      </div>
      <div className=" text-center">
        <div className="flex items-center gap-2">
          <Link to="/cart">
            {" "}
            <span className="text-3xl">
              <Icon icon="fluent:cart-20-regular" />
            </span>{" "}
          </Link>
          <h1>Cart2Items</h1>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
