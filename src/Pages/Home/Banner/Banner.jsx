import sideBanner1 from "../../../assets/sidebanner1.webp";
import sideBanner2 from "../../../assets/sidebanner2.webp";
import banner from "../../../assets/banner1.webp";
import productBanner1 from "../../../assets/productBanner1.webp";
import productBanner2 from "../../../assets/productBanner2.webp";
const Banner = () => {
  return (
    <div className="w-10/12 mx-auto flex gap-7 mt-16">
      <div className="w-[70%] ">
        <div>
          <img className="h-[80vh] " src={banner} alt="" />
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
        <div className="flex gap-3 justify-around">
          <div className="relative">
            <div>
              <img src={productBanner1} className="w-full h-full" alt="" />
            </div>
            <div className="absolute flex-col  pl-8 my-8 top-0 ">
              <h2 className=" leading-none text-white font-bold text-[20px] uppercase">
                FURNITURE <br />
                <span className="w-[70px] inline-block bg-white mt-[-10px] h-[2px]"></span>
              </h2>
              <a
                className="mt-32 inline-block text-[#363636] underline text-[13px]"
                href="#"
              >
                SHOP NOW
              </a>
            </div>
          </div>
          <div className="relative">
            <div>
              <img src={productBanner2} className="w-full h-full" alt="" />
            </div>
            <div className="absolute flex-col  pl-8 my-8 top-0 ">
              <h2 className=" leading-none text-white font-bold text-[20px] uppercase">
                BATHROOM <br />
                <span className="w-[70px] inline-block bg-white mt-[-10px] h-[2px]"></span>
              </h2>
              <a
                className="mt-32 inline-block text-[#363636] underline text-[13px]"
                href="#"
              >
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30%]">
        <img
          className="w-full object-cover h-[500px]"
          src={sideBanner1}
          alt=""
        />
        <img
          className="w-full  object-cover h-[500px]"
          src={sideBanner2}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
