import React from "react";
import Product from "./Product";
const MainProducts = () => {
  let items = ["Item 1", "Item 2", "Item 3", "Item 1", "Item 2", "Item 3"];
  return (
    <>
      <div>
        <div className="text-center font-semibold text-[50px] lg:pb-32   ">
          <h1 className="text-center font-semibold text-[30px] lg:text-[50px] hover:text-[#00df9a] transition-all">
            ÜRÜNLER
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-y-5 md:gap-y-8  xl:mx-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-10 mt-10 lg:mt-0">
          {items.map((item, index) => {
            return <Product />;
          })}
        </div>
      </div>
    </>
  );
};

export default MainProducts;
