import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const links = [
    {
      text: "Home",
      href: "/",
      subcategories: [],
    },
    {
      text: "Furniture",
      href: "/furniture",
      subcategories: [
        {
          text: "Dreses",
          href: "/furniture/a",
          items: ["Coctail", "Day", "Evening", "Sports"],
        },
        {
          text: "Shoes",
          href: "/shoes/b",
          items: ["Sports", "Run", "Sandals", "Books"],
        },
        {
          text: "HandBags",
          href: "/products/c",
          items: ["Blazers", "Table", "Coats", "Kids"],
        },
        {
          text: "Clothing",
          href: "/products/c",
          items: ["T-shirts", "Coats", "Jacket", "jeans"],
        },
      ],
    },
    {
      text: "kitchen & Bar",
      href: "/kitchen&bar",
      subcategories: [
        {
          text: "Bags",
          href: "/furniture/a",
          items: ["Bootes Bags", "Blazers", "Sweaters", "Hoodies"],
        },
        {
          text: "Tops & Tees",
          href: "/shoes/b",
          items: ["Long Sleeve", "Polo Short Sleeve", "Short SLeeve"],
        },
        {
          text: "Lingerie",
          href: "/products/c",
          items: ["Bands", "Furniture", "Wedges", "Vests"],
        },
      ],
    },
    {
      text: "Mugs & Cups",
      href: "/mugs&cups",
      subcategories: [
        {
          text: "Footwear Man",
          href: "/furniture/a",
          items: ["Gold Ring", "Platinum Ring", "Silver Ring", "Tungsten Ring"],
        },
        {
          text: "Footwear Womens",
          href: "/shoes/b",
          items: [
            "Gold bands ",
            "platinum bands",
            "Silver Bands",
            "Tungsten Bands",
          ],
        },
      ],
    },
    {
      text: "Bedding",
      href: "/bedding",
      subcategories: [],
    },
    {
      text: "Shop",
      href: "/shop",
      subcategories: [],
    },
  ];
  return (
    <nav className="mainMenu w-[70%] mx-auto">
      <ul className="flex gap-5 justify-around">
        {links.map((link, idx) => (
          <li className="groupeCountry " key={idx}>
            <Link className="uppercase" to={link?.href}>
              {link?.text}
            </Link>
            <div className="subCountry z-20 bg-white  flex w-[400px] shadow-2xl justify-between">
              {link?.subcategories?.map((item, subIdx) => (
                <div className="subcategory p-7 " key={subIdx}>
                  <h1 className="font-semibold mb-2 text-black">{item.text}</h1>
                  <div className="flex flex-col gap-2">
                    {item.items.map((subItem, subItemIdx) => (
                      <p key={subItemIdx}>{subItem}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
