import { useState } from "react";
import { useEffect } from "react";
// import "react-slider/range.css";
// import "react-input-range/lib/css/index.css"; // Import the default CSS for styling
import shopBanner from "../../assets/bedding.webp";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import SingleLandscapeView from "./SingleLandscapeView.jsx/SingleLandscapeView";

const Shop = () => {
  const [showByView, setshowByView] = useState("gridview");
  const [price, setPrice] = useState(50); // Initial value
  const [products, setProducts] = useState([]);
  const [color, setColor] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSliderChange = (event) => {
    const inputPrice = event.target.value;
    setPrice(inputPrice);
    const filterdByPrice = products?.filter(
      (item) => item.regular_price <= inputPrice
    );
    setFilteredProducts(filterdByPrice);
  };

  const handleSort = (e) => {
    const sortValue = e.target.value;
    console.log(sortValue);

    if (sortValue === "lowest") {
      const sortedProducts = [...products]?.sort(
        (a, b) => a.regular_price - b.regular_price
      );
      setFilteredProducts(sortedProducts);
    } else if (sortValue === "highest") {
      const sortedProducts = [...products]?.sort(
        (a, b) => b.regular_price - a.regular_price
      );
      setFilteredProducts(sortedProducts);
    } else if (sortValue === "ascending") {
      const sortedProducts = [...products]?.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setFilteredProducts(sortedProducts);
    } else if (sortValue === "instock") {
      const sortedProducts = products?.filter(
        (product) => product?.stock === true
      );
      setFilteredProducts(sortedProducts);
    } else {
      console.log("hhllo");
      setFilteredProducts(products);
    }
  };

  const colors = [
    { color: "bg-orange-600", name: "orange" },
    { color: "bg-pink-600", name: "pink" },
    { color: "bg-black", name: "black" },
    { color: "bg-blue-600", name: "blue" },
    { color: "bg-sky-600", name: "sky" },
    { color: "bg-red-600", name: "red" },
    { color: "bg-gray-600", name: "gray" },
    { color: "bg-indigo-600", name: "indigo" },
    { color: "bg-yellow-600", name: "yellow" },
    { color: "bg-green-600", name: "green" },
    { color: "bg-black", name: "black" },
  ];

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    const filtered = products?.filter((product) => product.color == color);

    if (filtered.length === 0) {
      return setFilteredProducts(products);
    }
    setFilteredProducts(filtered);
  }, [color]);

  return (
    <div className="w-10/12 mx-auto  mt-5">
      <div className="flex  gap-4 items-center mb-5">
        <Icon icon="ion:home-sharp" className="hover:text-pink-500" />{" "}
        <Icon icon="ic:baseline-greater-than" /> <span>Shop</span>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="md:w-[30%] w-full  ">
          <div className="bg-gray-200 p-5 mb-5">
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
            <div className="ml-3">
              {" "}
              <h2 className="mt-4 uppercase border-b-2 font-semibold max-w-max border-gray-400 pb-1">
                Price
              </h2>
              <input
                type="range"
                min={60}
                max={10000}
                value={price}
                onChange={handleSliderChange}
                className="slider mt-5 w-full"
              />
              <p className="text-orange-500 font-bold"> £60 - £{price}</p>
            </div>
            <div className="ml-3">
              {" "}
              <h2 className="mt-4 uppercase border-b-2 font-semibold max-w-max border-gray-400 pb-1">
                Color
              </h2>
              <div className="grid grid-cols-10 my-4 gap-2">
                {colors?.map((color, indx) => (
                  <span
                    key={indx}
                    className={`inline-block p-2  ${color?.color}`}
                    onClick={() => setColor(color.name)}
                  ></span>
                ))}
              </div>
            </div>
            <div className="ml-3">
              <h2 className="mt-4 uppercase border-b-2 font-semibold max-w-max border-gray-400 pb-1">
                Availibility
              </h2>
              <p className=" flex items-center justify-between py-3 border-b-2 border-gray-300">
                In Stock <span>(14)</span>
              </p>
            </div>
            <div className="ml-3">
              <h2 className="mt-4 uppercase border-b-2 font-semibold max-w-max border-gray-400 pb-1">
                Condition
              </h2>
              <p className=" flex items-center justify-between py-3 border-b-2 border-gray-300">
                New<span>(14)</span>
              </p>
            </div>
            <div className="ml-3">
              <h2 className="mt-4 uppercase border-b-2 font-semibold max-w-max border-gray-400 pb-1">
                Manufacture
              </h2>
              <p className=" flex items-center justify-between py-3 border-b-2 border-gray-300">
                Fashion menufacturer <span>(14)</span>
              </p>
              <p className=" flex items-center justify-between py-3 border-b-2 border-gray-300">
                Adidas <span>(14)</span>
              </p>
              <p className=" flex items-center justify-between py-3 border-b-2 border-gray-300">
                Chanel <span>(14)</span>
              </p>
              <p className=" flex items-center justify-between py-3 border-b-2 border-gray-300">
                Dkny<span>(14)</span>
              </p>
              <p className=" flex items-center justify-between py-3 border-b-2 border-gray-300">
                Dolce <span>(14)</span>
              </p>
            </div>
          </div>
          <div className="bg-gray-200 p-5">
            <h1 className="font-bold mb-3">Tags</h1>
            <div className="flex flex-wrap gap-6">
              <button className="p-3 border border-gray-500  hover:border-orange-500 hover:text-orange-500">
                {" "}
                New
              </button>
              <button className="p-3 border border-gray-500  hover:border-orange-500 hover:text-orange-500">
                {" "}
                Fashion
              </button>
              <button className="p-3 border border-gray-500  hover:border-orange-500 hover:text-orange-500">
                {" "}
                Furniture
              </button>
              <button className="p-3 border border-gray-500  hover:border-orange-500 hover:text-orange-500">
                {" "}
                Sale
              </button>
              <button className="p-3 border border-gray-500  hover:border-orange-500 hover:text-orange-500">
                {" "}
                Accessories
              </button>
              <button className="p-3 border border-gray-500  hover:border-orange-500 hover:text-orange-500">
                {" "}
                Lighting
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-[70%] w-full">
          <div>
            <img src={shopBanner} className="w-full h-full" alt="" />
          </div>
          <div className="">
            <div className="mt-5">
              <div className="flex justify-between items-center ">
                <h2>Bedding </h2>
                <p>There are 13 products</p>
              </div>
              <div className="flex  flex-col md:flex-row md:justify-between md:items-center gap-3 my-5 p-3 border border-gray-500 text-center md:text-start">
                <div className="flex items-center gap-1 text-[20px]">
                  <Icon
                    icon="ic:baseline-window"
                    onClick={() => setshowByView("gridview")}
                  />{" "}
                  <Icon
                    icon="ic:baseline-list"
                    onClick={() => setshowByView("landscapeview")}
                    className="text-[30px]"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <span>sort By</span>
                  <select
                    name=""
                    id=""
                    className="border"
                    onChange={(e) => handleSort(e)}
                  >
                    <option value="">--</option>
                    <option value="lowest">Price: Lowest First</option>
                    <option value="highest">Price: Higest First</option>
                    <option value="ascending">Prduct Name : A to Z</option>
                    <option value="instock">In Stock</option>
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
                <button className="uppercase px-3 py-2 bg-black text-white  text-center md:text-start items-center gap-1">
                  <p className="flex">
                    {" "}
                    compare{" "}
                    <Icon
                      icon="ic:baseline-greater-than"
                      className="text-center md:text-start"
                    />
                  </p>
                </button>
              </div>
            </div>
            <div>
              <div
                className={`${
                  showByView == "gridview"
                    ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                    : "flex flex-col gap-6"
                }`}
              >
                {filteredProducts?.map((product, idx) => (
                  <Link key={idx} to={`/products/${product.id}`}>
                    {showByView == "gridview" ? (
                      <SingleProduct product={product}></SingleProduct>
                    ) : (
                      <SingleLandscapeView
                        product={product}
                      ></SingleLandscapeView>
                    )}
                  </Link>
                ))}
              </div>

              {/* {showByView == "landscapeview" && (
                <div className="flex flex-col gap-6">
                  {products?.map((product, idx) => (
                    <Link key={idx} to={`/products/${product.id}`}>
                      <SingleLandscapeView
                        product={product}
                      ></SingleLandscapeView>
                    </Link>
                  ))}
                </div>
              )} */}
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
