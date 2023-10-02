import titleImg from "../../../assets/bg_title.webp";
import SpecialLook1 from "../../../assets/about1.webp";
import SpecialLook2 from "../../../assets/about2.webp";
import SpecialLook3 from "../../../assets/about3.webp";
const SpecialLook = () => {
  return (
    <div className="w-9/12 mx-auto my-10 ">
      <div className="flex justify-center">
        {" "}
        <div className="text-center w-[450px]">
          <div className="mx-auto mb-5">
            <img src={titleImg} alt="" className="mx-auto" />
          </div>
          <div className="flex items-center  mb-9">
            <span className="h-[2px] w-full  bg-black"></span>
            <h1 className="w-full font-bold text-[20px] uppercase">
              Special Look
            </h1>
            <span className="h-[2px] w-full  bg-black"></span>
          </div>
        </div>
      </div>
      <div className="md:flex">
        <div className="relative hoverAnimation ">
          <img src={SpecialLook1} alt="" className="w-full md:object-contain" />
        </div>
        <div>
          <div className="relative hoverAnimation">
            <img src={SpecialLook2} alt="" />
          </div>
          <div className="relative hoverAnimation">
            <img src={SpecialLook3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialLook;
