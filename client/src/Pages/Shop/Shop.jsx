import { useState } from "react";
import { useEffect } from "react";
// import "react-slider/range.css";
// import "react-input-range/lib/css/index.css"; // Import the default CSS for styling
import shopBanner from "../../assets/bedding.webp";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Shop = () => {
  const [value, setValue] = useState(50); // Initial value
  const [products, setProducts] = useState([]);

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="w-10/12 mx-auto  mt-5">
      <div className="flex gap-4 items-center mb-5">
        <Icon icon="ion:home-sharp" className="hover:text-pink-500" />{" "}
        <Icon icon="ic:baseline-greater-than" /> <span>Shop</span>
      </div>
      <div className="flex gap-5">
        <div className="w-[30%] bg-gray-200 p-5">
          <h1 className="pb-5 border-b-2 pl-3 font-bold mt-4 border-gray-400 uppercase">
            Catalog
          </h1>
          <div className="ml-3">
            <h2 className="mt-4 uppercase border-b-2 font-semibold max-w-max border-gray-400 pb-1">
              Categories
            </h2>
            <p className=" flex items center justify-between py-3 border-b-2 border-gray-300">
              Bags <span>(14)</span>
            </p>
            <p className=" flex items center justify-between py-3 border-b-2 border-gray-300">
              Top & fees <span>(14)</span>
            </p>
            <p className=" flex items center justify-between py-3 border-b-2 border-gray-300">
              Lingiries <span>(14)</span>
            </p>
          </div>
          <input
            type="range"
            min={0}
            max={10000}
            value={value}
            onChange={handleSliderChange}
            className="slider mt-5 w-full"
          />
          <p>Value: ${value}</p>
          <div className="ml-3">
            <h2 className="mt-4 uppercase border-b-2 font-semibold max-w-max border-gray-400 pb-1">
              Availibility
            </h2>
            <p className=" flex items center justify-between py-3 border-b-2 border-gray-300">
              In Stock <span>(14)</span>
            </p>
          </div>
          <div className="ml-3">
            <h2 className="mt-4 uppercase border-b-2 font-semibold max-w-max border-gray-400 pb-1">
              Condition
            </h2>
            <p className=" flex items center justify-between py-3 border-b-2 border-gray-300">
              New<span>(14)</span>
            </p>
          </div>
          <div className="ml-3">
            <h2 className="mt-4 uppercase border-b-2 font-semibold max-w-max border-gray-400 pb-1">
              Manufacture
            </h2>
            <p className=" flex items center justify-between py-3 border-b-2 border-gray-300">
              Fashion menufacturer <span>(14)</span>
            </p>
            <p className=" flex items center justify-between py-3 border-b-2 border-gray-300">
              Adidas <span>(14)</span>
            </p>
            <p className=" flex items center justify-between py-3 border-b-2 border-gray-300">
              Chanel <span>(14)</span>
            </p>
            <p className=" flex items center justify-between py-3 border-b-2 border-gray-300">
              Dkny<span>(14)</span>
            </p>
            <p className=" flex items center justify-between py-3 border-b-2 border-gray-300">
              Dolce <span>(14)</span>
            </p>
          </div>
        </div>
        <div className="w-[70%]">
          <div>
            <img src={shopBanner} className="w-full h-full" alt="" />
          </div>
          <div className="">
            <div className="mt-5">
              <div className="flex justify-between items-center ">
                <h2>Bedding </h2>
                <p>There are 13 products</p>
              </div>
              <div className="flex justify-between items-center gap-3 my-5 p-3 border border-gray-500">
                <div className="flex items-center gap-1">
                  <Icon icon="ic:baseline-window" />
                  <Icon icon="uis:chart" />
                </div>
                <div className="flex items-center gap-1">
                  <span>sort By</span>
                  <select name="" id="">
                    <option value="">--</option>
                    <option value="">Price: Lowest First</option>
                    <option value="">Price: Higest First</option>
                    <option value="">Prduct Name : A to Z</option>
                    <option value="">In Stock</option>
                    <option value="">Reference : Lowest First</option>
                  </select>
                </div>
                <div className="flex items-center gap-1">
                  <span>Show</span>
                  <select name="" id="">
                    <option value="">24</option>
                    <option value="">12</option>
                  </select>
                  <span>per page</span>
                </div>
                <button className="uppercase px-3 py-2 bg-black text-white flex items-center gap-1">
                  compare <Icon icon="ic:baseline-greater-than" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {products?.map((product, idx) => (
                <Link key={idx} to={`/products/${product.id}`}>
                  <SingleProduct product={product}></SingleProduct>
                </Link>
              ))}
            </div>
            <div className="flex gap-2 items-center mt-3">
              <span className="p-2 border">
                <Icon icon="ic:baseline-less-than" />
              </span>
              <span className="p-2 border">1</span>
              <span className="p-2 border">2</span>
              <span className="p-2 border">
                <Icon icon="ic:baseline-greater-than" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
