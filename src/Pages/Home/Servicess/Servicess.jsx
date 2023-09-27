import serviceIcon1 from "../../../assets/icon1.webp";
import serviceIcon2 from "../../../assets/icon2.webp";
import serviceIcon3 from "../../../assets/icon3.webp";
import "./Servicess.css";
const Servicess = () => {
  const services = [
    {
      image: serviceIcon1,
      title: "100% MONEY BACK GUARANTEE",
      descripton:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor nibh.",
    },
    {
      image: serviceIcon2,
      title: "FREE SHIPPING ON ODER OVER 500$",
      descripton:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor nibh.",
    },
    {
      image: serviceIcon3,
      title: "ONLINE SUPPORT 24/7",
      descripton:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor nibh.",
    },
  ];
  return (
    <div className="w-10/12 mx-auto mt-9">
      <div className="md:flex justify-between gap-6">
        {services?.map((service, idx) => (
          <div
            key={idx}
            className="imgHoverEffectDiv text-center border p-6 mb-4"
          >
            <img className="mx-auto " src={service.image} alt="" />
            <h1 className="mt-5"> {service.title}</h1>
            <p className="mt-5">{service.descripton}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicess;
