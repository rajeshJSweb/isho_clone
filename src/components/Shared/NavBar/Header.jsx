import React from "react";
import TopNav from "./TopNav";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <div className="md:mx-16 md:px-7 z-10">
        <TopNav />
        <Nav />
      </div>
    </>
  );
};

export default Header;
