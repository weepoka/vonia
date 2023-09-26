import { Icon } from "@iconify/react";
import { useState } from "react";
import ShippingAddress from "../../Components/ShippingAddress/ShippingAddress";
const Checkout = () => {
  const [cuponDiv, setCuponDiv] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // Step 2: Create an event handler to update the state
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className="w-10/12 mx-auto">
      <div className="flex gap-4 items-center my-5">
        <Icon icon="ion:home-sharp" className="hover:text-pink-500" />{" "}
        <Icon icon="ic:baseline-greater-than" /> <span>Checkout</span>
      </div>{" "}
      <div>
        {" "}
        <h1 className="uppercase font-bold py-3 border-b-2 border-gray-100">
          {" "}
          Checkout
        </h1>
        <div className="mt-10">
          <div className="bg-gray-100 border-t-4 flex gap-1 items-center border-[#c06b81] p-4">
            {" "}
            <Icon icon="tabler:folder" className="mr-5" />{" "}
            <span>Have a cupon?</span>
            <span
              onClick={() => setCuponDiv(!cuponDiv)}
              className="hover:text-[#f25d76]"
            >
              {" "}
              click here to your code
            </span>{" "}
          </div>
          <div>
            {" "}
            {cuponDiv && (
              <div className="mt-4">
                <input type="text" className="p-2 border" />{" "}
                <button className="bg-black text-white font-bold   hover:bg-[#f25d76]  px-3 py-2">
                  Add Cuppon
                </button>
              </div>
            )}
          </div>
          <div className="flex gap-2 mt-6">
            <div className="w-[50%] mt-4 ">
              <h1 className="uppercase text-[34px] text-gray-500 py-3 border-b-2 border-gray-100">
                {" "}
                Billing Details
              </h1>
              <div>
                {" "}
                <ShippingAddress></ShippingAddress>
              </div>
              <div className="mt-5">
                <input type="checkbox" name="" id="" className="mr-5" />
                Create an account?
              </div>
              <h1 className="uppercase text-[34px] mt-6 text-gray-500 py-3 border-b-2 border-gray-100">
                {" "}
                SHIP TO A DIFFERENT ADDRESS?{" "}
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="ml-5"
                />
              </h1>
              <div> {isChecked && <ShippingAddress></ShippingAddress>}</div>
              <div className="w-full mt-3">
                <div>
                  <label htmlFor="">
                    Order Notes <span>*</span>
                  </label>
                </div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  className="w-full border p-4"
                ></textarea>
              </div>
            </div>
            <div className="w-[50%] ">
              <div className=" bg-gray-100 px-8 py-6 ">
                {" "}
                <h1 className="uppercase text-[34px] text-gray-500 py-3 border-b-2 border-gray-200">
                  {" "}
                  your order
                </h1>
                <div>
                  <div className="flex items-center justify-around uppercase border-b-2 border-gray-200 p-5 mt-3">
                    <h1>Product</h1>
                    <h1>Total</h1>
                  </div>
                </div>
                <div className="flex items-center justify-around uppercase border-b-2 border-gray-200 p-2 mt-3">
                  <span>Product1</span>
                  <h1>£165.00</h1>
                </div>
                <div className="flex items-center justify-around uppercase border-b-2 border-gray-200 p-2 mt-3">
                  <span>Product2</span>
                  <h1>£65.00</h1>
                </div>
                <div className="flex items-center justify-around uppercase border-b-2 border-gray-200 p-2 mt-3">
                  <span>Cart SubTotal</span>
                  <h1>£265.00</h1>
                </div>
                <div className="flex items-center justify-around uppercase border-b-2 border-gray-200 p-2 mt-3">
                  <span>Shipping</span>
                  <div>
                    <h1>
                      <input type="radio" name="" id="" /> Flate Rate:5{" "}
                    </h1>
                    <h1>
                      <input type="radio" name="" id="" /> FreShipping{" "}
                    </h1>
                  </div>
                </div>
                <div className="flex items-center justify-around uppercase border-b-2 border-gray-200 p-2 mt-3">
                  <span>Order Total</span>
                  <h1>£365.00</h1>
                </div>
                <div className="flex justify-around ml-5 mt-6 text-[#777777] flex-col gap-3 text-[25px]">
                  <h1>Direct Bank Transfer</h1>
                  <h1>Cheque Payment</h1>
                  <h1>Paypal</h1>
                </div>
                <button className="bg-black text-white font-bold   hover:bg-[#f25d76]  px-3 text-center mt-6 w-full py-2">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
