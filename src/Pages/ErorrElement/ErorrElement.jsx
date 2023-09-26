import { Link } from "react-router-dom";

const ErorrElement = () => {
  return (
    <div className="bg-gray-400 min-h-screen flex justify-center items-center">
      <div className="">
        <div className="text-center">
          <h1 className="text-[#333333] text-[70px] font-bold">
            <span className="text-[#c06b81]">404</span>NOT FOUND!
          </h1>
          <p className="text-[#000]">
            The page you are looking for is not found! Please check the url
            again.{" "}
          </p>
          <Link to="/">
            <button className="bg-black text-white font-bold   hover:bg-[#f25d76]  px-5 text-center mt-6  py-4">
              Back to home page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErorrElement;
