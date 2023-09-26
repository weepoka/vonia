import contactForm from "../../assets/contact-form.webp";
import { Icon } from "@iconify/react";
const Contact = () => {
  return (
    <div className="w-10/12 mx-auto py-6">
      <div className="flex gap-4 items-center mb-5">
        <Icon icon="ion:home-sharp" className="hover:text-pink-500" />{" "}
        <Icon icon="ic:baseline-greater-than" /> <span>contact</span>
      </div>
      <div>
        <h1 className="uppercase font-bold py-3 border-b-2 border-gray-100">
          {" "}
          customer service - contact us
        </h1>
        <div className="mt-5 shadow-lg">
          <div
            className=" bg-repeat-x w-full h-2"
            style={{ backgroundImage: `url(${contactForm})` }}
          ></div>
          <div className="mt-1 p-5">
            <h1 className="font-bold">Send a Message</h1>
            <div className="flex gap-5">
              <div className="w-[30%]">
                <div>
                  <label htmlFor=""> Select Heading</label> <br />
                  <select name="" id="" className="border w-full mt-2">
                    <option value="">--Choose--</option>
                    <option value="">Customer Service</option>
                    <option value="">webmaster</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="" className="mt-5">
                    Email Address
                  </label>{" "}
                  <br />
                  <input
                    type="email"
                    name=""
                    id=""
                    className="border w-full mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="" className="mt-2">
                    Attach file
                  </label>{" "}
                  <br />
                  <input
                    type="file"
                    name=""
                    id=""
                    className="border w-full mt-2"
                  />
                </div>
                <button className="bg-black text-white font-bold items-center mt-10 hover:bg-[#f25d76] flex gap-2 px-3 py-2">
                  Send{" "}
                  <Icon icon="ic:round-greater-than" className="font-bold" />
                </button>
              </div>
              <div className="w-[70%]">
                <label htmlFor="">massage</label> <br />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="w-full border"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
