import React from "react";

const Search = () => {
  return (
    <div className="">
      <div className="flex justify-center py-10  ">
        <input
          className="shadow-rgb border border-black rounded-3xl p-2 px-10 hover:px-16 focus:px-16 hover:border-blue-700 active:border-blue-700 hover:shadow-xxl transition-all"
          type="text"
          placeholder="Search.."
        />
      </div>
    </div>
  );
};

export default Search;
