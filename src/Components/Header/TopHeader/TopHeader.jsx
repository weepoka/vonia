import { useState } from "react";
import { Icon } from "@iconify/react";
import "./TopHeader.css";

const TopHeader = () => {
  const [showSubcategories, setShowSubcategories] = useState(false);
  const [showCurrencySubcategories, setShowCurrencySubcategories] =
    useState(false);
  return (
    <div className=" flex items-center bg-black text-white  border-2 border-gray-50">
      <div className="w-10/12  mx-auto flex justify-between items-center">
        <div>
          <div className="flex">
            {" "}
            <div
              className="relative border-l-2 border-r-2 text-sm border-r-gray-50 border-l-gray-50"
              onMouseEnter={() => setShowSubcategories(true)}
              onMouseLeave={() => setShowSubcategories(false)}
            >
              <a
                href="#"
                className="px-4 py-2 flex items-center  gap-1 rounded"
              >
                English{" "}
                <span>
                  <Icon icon="gridicons:dropdown" />
                </span>
              </a>
              {showSubcategories && (
                <div className="absolute left-0  bg-white text-gray-800  rounded-lg">
                  <a href="#" className="block px-4 py-2">
                    English
                  </a>
                  <a href="#" className="block px-4 py-2">
                    Bangla
                  </a>
                </div>
              )}
            </div>
            <div
              className="relative text-sm group border-r-2 border-r-gray-50 "
              onMouseEnter={() => setShowCurrencySubcategories(true)}
              onMouseLeave={() => setShowCurrencySubcategories(false)}
            >
              <a
                href="#"
                className=" px-4 py-2 flex items-center  gap-1 rounded"
              >
                Currency:GBP{" "}
                <span>
                  <Icon icon="gridicons:dropdown" />
                </span>
              </a>
              {showCurrencySubcategories && (
                <div className="absolute left-0  bg-white text-gray-800 shadow-lg rounded-lg">
                  <a href="#" className="block px-4 py-2">
                    Taka (Tk)
                  </a>
                  <a href="#" className="block px-4 py-2">
                    Dollar (USD)
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
