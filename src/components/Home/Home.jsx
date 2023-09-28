import React from "react";
import HomeSlider from "./HomeSlider";
import NewArrivals from "./NewArrivals";
import BuyBYRoom from "./BuyBYRoom";
import BestSeelingCat from "./BestSeelingCat";
import HomeBanner from "./HomeBanner";
import HelpSection from "./HelpSection";
import BottomBanner from "./BottomBanner";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <NewArrivals />
      <BuyBYRoom />
      <BestSeelingCat />
      <HomeBanner />
      <HelpSection />
      <BottomBanner />
    </div>
  );
};

export default Home;
