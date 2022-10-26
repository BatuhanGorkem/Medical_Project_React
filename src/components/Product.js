import React, { useEffect, useState } from "react";
import img from "../img/slider.png";
const Product = () => {
  return (
    <div className="">
      <div className=" mx-8 lg:w-[70%] lg:mx-[15%] shadow-rgb rounded-md ">
        <div>
          <img
            className="rounded-md hover:translate-y-2 transition-all"
            src={img}
            alt=""
          />
        </div>
        <div className="text-center pt-4  ">
          <h1 className="lg:text-[20px]  lg:mt-5 font-semibold">Ürün İsmi</h1>
          <h1 className=" lg:text-[18px]  mt-2 lg:mt-3 pb-4">30.00 ₺</h1>
        </div>
      </div>
    </div>
  );
};

export default Product;
