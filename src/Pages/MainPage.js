import React from "react";
import Social from "../components/Social";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MainProducts from "../components/MainProducts";
const MainPage = () => {
  return (
    <>
      {/* <Social></Social> */}
      <Navbar></Navbar>
      <Hero></Hero>
      <Slider></Slider>
      <Search></Search>
      <MainProducts></MainProducts>
      <Footer></Footer>
    </>
  );
};

export default MainPage;
