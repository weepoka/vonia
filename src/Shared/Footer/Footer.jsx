import Brand from "../Brand/brand";
import FooterLogo from "../../assets/logo-footer.webp";
import { Icon } from "@iconify/react";
import paymentsMethodImg from "../../assets/payment-methodsIMG.webp";

const Footer = () => {
  return (
    <div>
      <Brand></Brand>
      <div className="bg-[#363636]">
        <div className="w-10/12 mx-auto">
          <div className=" w-full ">
            <img src={FooterLogo} alt="" className="mx-auto py-12 " />
          </div>
          <div className="">
            <div className="py-6 flex flex-col sm:flex-row text-center sm:text-start gap-5 text-white border-y-2 border-gray-500">
              <div className="w-full">
                <h1 className="capitalize font-semibold text-[20px] mb-4">
                  Shop Location
                </h1>
                <p className="py-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                  rem unde placeat repellat eum qui natus ducimus in nisi rerum
                  nobis animi amet, temporibus neque?
                </p>
                <p className="text-[#c06b81] flex gap-2 mb-3 ">
                  <span>
                    <Icon icon="ion:home" className="text-[14px]" />
                  </span>{" "}
                  <span className="-mt-1 text-[14px]">
                    {" "}
                    No. 96, Jecica City, NJ 07305, New York, USA
                  </span>
                </p>
                <p className="text-[#c06b81] flex gap-2 mb-3 ">
                  <span>
                    <Icon icon="foundation:mobile" className="text-[14px]" />
                  </span>{" "}
                  <span className="-mt-1 text-[14px]"> +0123456789</span>
                </p>
                <p className="text-[#c06b81] flex gap-2 mb-3 ">
                  <span>
                    <Icon icon="mdi-light:email" className="text-[14px]" />
                  </span>{" "}
                  <span className="-mt-1 text-[14px]">demo@example.com</span>
                </p>
              </div>
              <div className="w-full">
                <h1 className="capitalize font-semibold text-[20px] mb-4">
                  Information
                </h1>
                <div className="flex flex-col gap-5 h-full">
                  {" "}
                  <p className="flex gap-1 items-center text-[14px]  hover:transition-all duration-4000 hover:text-[#c06b81] hover:ml-2 ">
                    {" "}
                    <Icon icon="ic:baseline-greater-than" />
                    Specials
                  </p>
                  <p className="flex gap-1 items-center text-[14px]  hover:transition-all duration-4000 hover:text-[#c06b81] hover:ml-2 ">
                    {" "}
                    <Icon icon="ic:baseline-greater-than" />
                    New Products
                  </p>
                  <p className="flex gap-1 items-center text-[14px]  hover:transition-all duration-4000 hover:text-[#c06b81] hover:ml-2 ">
                    {" "}
                    <Icon icon="ic:baseline-greater-than" />
                    Best Sellers
                  </p>
                  <p className="flex gap-1 items-center text-[14px]  hover:transition-all duration-4000 hover:text-[#c06b81] hover:ml-2 ">
                    {" "}
                    <Icon icon="ic:baseline-greater-than" />
                    Our Stores
                  </p>
                  <p className="flex gap-1 items-center text-[14px]  hover:transition-all duration-4000 hover:text-[#c06b81] hover:ml-2 ">
                    {" "}
                    <Icon icon="ic:baseline-greater-than" />
                    Contact Us
                  </p>
                  <p className="flex gap-1 items-center text-[14px]  hover:transition-all duration-4000 hover:text-[#c06b81] hover:ml-2 ">
                    {" "}
                    <Icon icon="ic:baseline-greater-than" />
                    Sitemap
                  </p>
                </div>
              </div>
              <div className="w-full">
                <h1 className="capitalize font-semibold text-[20px] mb-4">
                  My Account
                </h1>
                <div className="flex flex-col gap-5 h-full">
                  {" "}
                  <p className="flex gap-1 items-center text-[14px]  hover:transition-all duration-4000 hover:text-[#c06b81] hover:ml-2 ">
                    {" "}
                    <Icon icon="ic:baseline-greater-than" />
                    My Orders
                  </p>
                  <p className="flex gap-1 items-center text-[14px]  hover:transition-all duration-4000 hover:text-[#c06b81] hover:ml-2 ">
                    {" "}
                    <Icon icon="ic:baseline-greater-than" />
                    My creditslips
                  </p>
                  <p className="flex gap-1 items-center text-[14px]  hover:transition-all duration-4000 hover:text-[#c06b81] hover:ml-2 ">
                    {" "}
                    <Icon icon="ic:baseline-greater-than" />
                    My Addresses
                  </p>
                  <p className="flex gap-1 items-center text-[14px]  hover:transition-all duration-4000 hover:text-[#c06b81] hover:ml-2 ">
                    {" "}
                    <Icon icon="ic:baseline-greater-than" />
                    My Personal Info
                  </p>
                </div>
              </div>
              <div className="w-full">
                <h1 className="capitalize font-semibold text-[20px] mb-4">
                  Newsletter
                </h1>
                <div>
                  <input
                    type="email"
                    name=""
                    placeholder="Enter your email"
                    id=""
                    className="p-3 bg-transparent border"
                  />
                  <button className="uppercase py-2 px-4 mt-4 font-semibold bg-pink-500 text-white hover:bg-white hover:text-pink-500">
                    Subscribe
                  </button>
                </div>
                <div>
                  <h1 className="text-[20px] my-5">follow Us</h1>
                  <div className="flex">
                    <span>
                      {" "}
                      <Icon
                        icon="ri:facebook-fill"
                        className="text-[30px] p-[3px] bg-blue-500 text-white hover:bg-pink-500"
                      />
                    </span>
                    <span>
                      {" "}
                      <Icon
                        icon="la:twitter"
                        className="text-[30px] p-[3px] bg-sky-400 text-white hover:bg-pink-500"
                      />
                    </span>
                    <span>
                      {" "}
                      <Icon
                        icon="material-symbols:wifi"
                        className="text-[30px] p-[3px] bg-orange-400 text-white hover:bg-pink-500"
                      />
                    </span>
                    <span>
                      {" "}
                      <Icon
                        icon="fa:youtube"
                        className="text-[30px] p-[3px] bg-red-500 text-white hover:bg-pink-500"
                      />
                    </span>
                    <span>
                      {" "}
                      <Icon
                        icon="mdi:google-plus"
                        className="text-[30px] p-[3px] bg-orange-700 text-white hover:bg-pink-500"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center py-6">
              <img src={paymentsMethodImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2f2f2f] p-16 text-white flex flex-col sm:flex-row text-center mb-6 sm:mb-0 justify-between">
        <div className="">
          <p>
            © 2021 <strong>Vonia</strong> Made with{" "}
            <a href="" className="underline text-pink-500">
              Hashthemes
            </a>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row text-center sm:text-start gap-5 items-center">
          <p className="hover:text-pink-500">Customer Service</p>
          <p className="hover:text-pink-500">Secure Payment</p>
          <p className="hover:text-pink-500">Term of use</p>
          <p className="hover:text-pink-500">About Us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
