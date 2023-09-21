import MainHeader from "./MainHeader/MainHeader";
import Navbar from "./Navbar/Navbar";
import TopHeader from "./TopHeader/TopHeader";

const Header = () => {
  return (
    <div>
      <TopHeader></TopHeader>
      <MainHeader></MainHeader>
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
