const Button = ({ children }) => {
  return (
    <button className="bg-black text-white  hover:bg-[#f25d76]  px-3 text-center mt-6  py-2 uppercase ">
      {children}
    </button>
  );
};

export default Button;
