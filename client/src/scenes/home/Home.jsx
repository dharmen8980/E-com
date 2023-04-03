import { Container } from "@mui/material";
import React from "react";
import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";
const Home = () => {
  return (
    <div className="home">
      {/* <MainCarousel /> */}
      {/* <ShoppingList /> */}
      <iframe
        // src="https://www.daraz.com.np/"
        src="https://discountelectronics.com/"
        width="100%"
        height="1200px"
      />
      <Subscribe />
    </div>
  );
};

export default Home;
