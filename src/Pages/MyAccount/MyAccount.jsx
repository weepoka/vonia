import { Icon } from "@iconify/react";
const MyAccount = () => {
  return (
    <div className="w-10/12 mx-auto py-6">
      <div className="flex gap-4 items-center mb-5">
        <Icon icon="ion:home-sharp" className="hover:text-pink-500" />{" "}
        <Icon icon="ic:baseline-greater-than" /> <span>My Account</span>
      </div>
      <div className="my-8">
        <h1 className="uppercase font-bold py-3 border-b-2 border-gray-100">
          {" "}
          My Account
        </h1>
        <div className="flex gap-3 items-center mt-5">
          <div className=" w-[50%] border border-black">
            <div className="p-5">
              {" "}
              <h1 className="uppercase  text-gray-400 font-bold py-3 border-b-2 border-gray-100">
                {" "}
                Login
              </h1>
              <div>
                <label htmlFor="" className="">
                  <span className="my-5"> Email Address</span>
                </label>{" "}
                <br />
                <input
                  type="email"
                  name=""
                  id=""
                  className="border w-full mt-2 p-2"
                />
              </div>
              <div>
                <label htmlFor="" className="py-5">
                  Password
                </label>{" "}
                <br />
                <input
                  type="password"
                  name=""
                  id=""
                  className="border w-full mt-2 p-2"
                />
              </div>
            </div>
            <div className="bg-gray-100 py-7 px-2 mt-5 flex items-center justify-between ">
              <div>
                <h1 className=" text-[13px]">Lost your Password ?</h1>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <label htmlFor=""> Remember me</label>
                <button className="bg-black text-white font-bold items-center  hover:bg-[#f25d76] flex gap-2 px-3 py-2">
                  Login
                </button>
              </div>
            </div>
          </div>
          <div className=" w-[50%] border border-black">
            <div className="p-5">
              {" "}
              <h1 className="uppercase  text-gray-400 font-bold py-3 border-b-2 border-gray-100">
                {" "}
                Register
              </h1>
              <div>
                <label htmlFor="" className="">
                  <span className="my-5"> Email Address</span>
                </label>{" "}
                <br />
                <input
                  type="email"
                  name=""
                  id=""
                  className="border w-full mt-2 p-2"
                />
              </div>
              <div>
                <label htmlFor="" className="py-5">
                  Password
                </label>{" "}
                <br />
                <input
                  type="password"
                  name=""
                  id=""
                  className="border w-full mt-2 p-2"
                />
              </div>
            </div>
            <div className="bg-gray-100 py-7 px-2 mt-5 flex items-center justify-between ">
              <div>
                <h1 className=" text-[13px]"></h1>
              </div>
              <div className="flex items-center gap-2">
                <button className="bg-black text-white font-bold items-center  hover:bg-[#f25d76] flex gap-2 px-3 py-2">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
