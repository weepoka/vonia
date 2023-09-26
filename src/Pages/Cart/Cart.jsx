import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
  };

  const cellStyle = {
    border: "1px solid #000",
    padding: "20px",
    textAlign: "center",
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);
  return (
    <div className="w-10/12 mx-auto">
      <div className="flex gap-4 items-center mb-5">
        <Icon icon="ion:home-sharp" className="hover:text-pink-500" />{" "}
        <Icon icon="ic:baseline-greater-than" /> <span>cart</span>
      </div>
      <div>
        <h1 className="uppercase font-bold py-3 border-b-2 border-gray-100">
          {" "}
          Shopping Cart
        </h1>
        <div className="mt-3">
          <table border="1" style={tableStyle}>
            <thead>
              <tr>
                {" "}
                <th style={cellStyle}>Image</th>
                <th style={cellStyle} className="w-[30%]">
                  Product
                </th>
                <th style={cellStyle}>Price</th>
                <th style={cellStyle}>Quantity</th>
                <th style={cellStyle}> Total</th>
                <th style={cellStyle} className="w-[15%]">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item, idx) => (
                <tr key={idx}>
                  <td style={cellStyle}>
                    <img
                      src={item?.image}
                      className="w-[80px] h-[80px]"
                      alt=""
                    />
                  </td>
                  <td style={cellStyle}>{item?.title}</td>
                  <td style={cellStyle}>{item?.offer_price}</td>
                  <td style={cellStyle}>
                    <input type="number" value={item?.offer_price} />
                  </td>
                  <td style={cellStyle}>{item?.offer_price}</td>
                  <td style={cellStyle}>
                    <Icon icon="maki:cross" className="mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-7">
            <div>
              <div className="flex gap-2">
                <Button>Update Cart</Button> <Button>Continue Shopping</Button>
              </div>
              <div className="mt-7">
                <h1 className="uppercase mb-2">coupon</h1>
                <p>Enter your coupon code if you have one.</p>
                <div className="flex items-center gap-2 justify-center mt-3">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="p-2 border"
                  />
                  <div className="-mt-5">
                    {" "}
                    <Button>Apply coupon</Button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-end uppercase  text-[30px] border-b-2 border-black">
                {" "}
                cart Totals
              </div>
              <div className="flex justify-between">
                <h2>SUBTOTAL</h2> <p className="text-[#c06b81]">£215.00</p>
              </div>
              <div className="flex justify-between mt-3">
                <h2>SHIPPING</h2>{" "}
                <div>
                  <h2>
                    Flate Rate : <span className="text-[#c06b81]">£215.00</span>
                  </h2>
                  <h2>Free Shipping</h2>
                </div>
              </div>
              <div className="flex justify-between mt-3">
                <h2>TOTAL</h2>{" "}
                <div>
                  <h2>calculate Shipping</h2>
                  <div className="text-end">
                    {" "}
                    <h2 className="text-[#c06b81]">£215.00 </h2>
                  </div>
                </div>
              </div>
              <div className="text-end uppercase  border-b-2 ">
                {" "}
                <Link to="/checkout">
                  {" "}
                  <Button>Procced to Checkout</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
