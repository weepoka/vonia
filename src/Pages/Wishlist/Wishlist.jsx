import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Button from "../../Components/Button/Button";
const Wishlist = () => {
  const [wishLists, setWishLists] = useState([]);

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
      .then((data) => setWishLists(data));
  }, []);
  return (
    <div className="w-10/12 mx-auto">
      <div className="flex gap-4 items-center mb-5">
        <Icon icon="ion:home-sharp" className="hover:text-pink-500" />{" "}
        <Icon icon="ic:baseline-greater-than" /> <span>Wishlist</span>
      </div>
      <div>
        <h1 className="uppercase font-bold py-3 border-b-2 border-gray-100">
          {" "}
          Shopping Cart
        </h1>
        <div className="mt-6">
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
              {wishLists?.map((item, idx) => (
                <tr key={idx}>
                  <td style={cellStyle}>
                    <Icon icon="maki:cross" className="mx-auto" />
                  </td>
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
                    <h1>in stock</h1>
                  </td>
                  <td style={cellStyle}>
                    <Button>add To cart</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
