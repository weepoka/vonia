import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import twitterIcon from "@iconify/icons-openmoji/twitter";
// import facebookFill from "@iconify/icons-eva/facebook-fill";

import ImageGallery from "react-image-gallery";
import { useParams } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ProductDetails.css";
import Acceseiries from "./Acceseiries/Acceseiries";
import SameCategory from "./SameCategory/SameCategory";
import App from "./Moredetails/Moredetails";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  //   console.log(id);

  useEffect(() => {
    fetch("../../../../../public/products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data.find((p) => p.id == id)));
  }, []);

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
      thumbnailHeight: "700px",
      originalHeight: "700px",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
      thumbnailHeight: "700px",
      originalHeight: "700px",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
      thumbnailHeight: "700px",
      originalHeight: "700px",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
      thumbnailHeight: 700,
      originalHeight: "700px",
    },
  ];
  console.log(product);
  return (
    <div className="w-10/12 mx-auto">
      <div className="flex gap-4 items-center my-5 ">
        <Icon icon="ion:home-sharp" className="hover:text-pink-500" />{" "}
        <Icon icon="ic:baseline-greater-than" /> <span>Furniture</span>{" "}
        <Icon icon="ic:baseline-greater-than" /> <span>{product?.title}</span>
      </div>
      <div className="flex flex-col md:flex-row gap-5 my-5">
        <div className="md:w-[40%] w-full">
          <div className="md:h-[700px]">
            <ImageGallery
              showPlayButton={false}
              slideOnThumbnailOver={true}
              showFullscreenButton={false}
              slideDuration={50}
              className="w-full h-full"
              items={images}
              thumbnailPosition={"left"}
              showNav={false}
            ></ImageGallery>
          </div>
        </div>
        <div className="md:w-[60%] w-full">
          <h2 className="text-[30px] font-semibold pb-3">
            Faded Short Sleeves T-shirt
          </h2>
          <p className="mb-3">
            <label htmlFor="" className="text-[#7d7d7d] italic">
              Reference:
            </label>
            <span className="text-[#bb0015]">demo_1</span>
          </p>
          <p className="mb-3">
            <label htmlFor="" className="text-[#7d7d7d] italic">
              Condition:
            </label>
            <span className="text-[#bb0015]"> New Product</span>
          </p>
          <div className="content-price mb-3">
            <p className="mb-2">
              <span className="text-[#c06b81] text-[34px] font-[600]">
                £ 16.84
              </span>
              <span> tax incl.</span>
            </p>
            <div className="flex items-center gap-4">
              <p className="bg-yellow-300 p-1 rounded-md text-white"> -15%</p>
              <p className="text-center">
                <span className=" text-[#8e8e8e] line-through text-[30px] font-semibold ">
                  £ 16.84
                </span>
                <span className="line-through"> tax incl.</span>
              </p>
            </div>
          </div>
          <p className="text-[#8e8e8e] mb-3">
            Faded short sleeves t-shirt with high neckline. Soft and stretchy
            material for a comfortable fit. Accessorize with a straw hat and
            you're ready for summer!
          </p>
          <div className="flex items-center gap-3">
            <p>quantity</p>
            <div className="w-[100px] ">
              <input type="number" className="px-4 py-2 w-full border " />
            </div>
            <span className="p-2 border px-4 py-2 hover:bg-[#7d7d7d] hover:text-white">
              -
            </span>
            <span className="p-2 border px-4 py-2 hover:bg-[#7d7d7d] hover:text-white">
              +
            </span>
            <button className="uppercase  md:px-4 py-2 flex items-center gap-3 border border-gray bg-black text-white hover:bg-[#c06b81] font-bold">
              <Icon icon="system-uicons:cart" className="text-[35px]" />
              Add to cart
            </button>
          </div>
          <ul className="mb-5">
            <li className="flex items-center gap-4 text-[#7d7d7d] hover:text-[#c06b81]">
              <Icon icon="mdi-light:email" />
              sent to a friend
            </li>
            <li className="flex items-center gap-4 text-[#7d7d7d] hover:text-[#c06b81]">
              {" "}
              <Icon icon="material-symbols:print-outline" />
              print
            </li>
            <li className="flex items-center gap-4 text-[#7d7d7d] hover:text-[#c06b81]">
              <Icon icon="ph:heart-light" />
              add to whishlist
            </li>
          </ul>
          <div>
            <span className="mr-3 text-[#7d7d7d]">Size</span>
            <select name="" id="" className="w-[300px] border border-gray-500">
              <option value="">S</option>
              <option value="">M</option>
              <option value="">L</option>
            </select>
          </div>
          <div>
            <span className="text-[#7d7d7d]">color</span>{" "}
            <div className="flex gap-3">
              {" "}
              <span className="inline-block w-[25px] h-[25px] bg-orange-500">
                {" "}
              </span>
              <span className="inline-block w-[25px] h-[25px] bg-blue-500">
                {" "}
              </span>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <p className="text-[#7d7d7d]">299 items</p>{" "}
            <button className="px-3 py-1 bg-green-500 text-white border border-black">
              In stock
            </button>
          </div>
          <div className="flex items-center gap-4 mt-3">
            <button className="flex gap-2 border items-center px-2 py-1 hover:bg-blue-400 hover:text-white">
              <Icon icon={twitterIcon} />
              Tweet
            </button>
            <button className="flex gap-2 border items-center px-2 py-1 hover:bg-blue-600 hover:text-white">
              <Icon icon="eva:facebook-fill" />
              facebook
            </button>
            <button className="flex gap-2 border items-center px-2 py-1 hover:bg-orange-500 hover:text-white">
              <Icon icon="ant-design:google-plus-outlined" />
              Google
            </button>
            <button className="flex gap-2 border items-center px-2 py-1 hover:bg-red-600 hover:text-white">
              <Icon icon="ei:sc-pinterest" />
              Pinterest
            </button>
          </div>
          <div className="p-5 border border-gray-400 mt-3">
            <div className="flex gap-2 ">
              <span>Rating</span>
              <div className="flex gap-1 items-center">
                <Icon icon="ic:round-star" className="text-orange-400" />
                <Icon icon="ic:round-star" className="text-orange-400" />
                <Icon icon="ic:round-star" className="text-orange-400" />
                <Icon icon="ic:round-star" className="text-orange-400" />
                <Icon icon="ic:round-star" className="text-orange-400" />
              </div>
            </div>
            <div className="flex gap-2 items-center mt-2">
              <button className="flex gap-2 p-3 items-center  border border-gray-400">
                <Icon icon="ep:chat-round" /> read Reviews
              </button>
              <button className="flex gap-2 p-3 border border-gray-400">
                <Icon icon="icon-park-outline:write" /> write revies
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <App></App>
      </div>
      <div>
        <Acceseiries></Acceseiries>
      </div>
      <div>
        <SameCategory></SameCategory>
      </div>
    </div>
  );
};

export default ProductDetails;
