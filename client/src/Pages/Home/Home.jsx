import Banner from "./Banner/Banner";
import Products from "./Products/Products";
import Reviews from "./Reviews/Reviews";
import Servicess from "./Servicess/Servicess";
import SpecialLook from "./SpecialLook/SpecialLook";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Servicess></Servicess>
      <Products></Products>
      <SpecialLook></SpecialLook>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
