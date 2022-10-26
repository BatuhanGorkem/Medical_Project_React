import React, { useEffect, useState } from "react";
import Product from "./Product";
import "../components/Products.css";

const Products = () => {
  let items = ["Item 1", "Item 2", "Item 3", "Item 1", "Item 2", "Item 3"];

  return (
    <div>
      <div className="text-center font-semibold pb-40  lg:pb-32 bgimgp text-white ">
        <h1 className="text-center font-semibold text-[30px] md:text-[40px] pt-8 md:pt-0  lg:text-[50px] hover:text-[#00df9a] transition-all">
          {" "}
          ÜRÜNLER
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-y-5 md:gap-y-8 xl:mx-32 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-10 mt-10 lg:mt-20">
        {items.map((item, index) => {
          return <Product />;
        })}
      </div>
    </div>
  );
};

export default Products;
