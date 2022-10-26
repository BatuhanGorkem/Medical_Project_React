import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    // <div className="bg-gradient-to-l from-cyan-500 to-blue-500 xl:flex xl:text-[20px] xl:items-center xl:w-[100%] xl:h-20  lg:justify-around   ">
    //   <div className="w-[5%]">
    //     <img className="" src={img} alt="" />
    //   </div>
    //   <div>
    //     <ul className="xl:flex xl:gap-7 cursor-pointer ">
    //       <Link to="/">
    //         <li className="hover:text-white">Anasayfa</li>
    //       </Link>
    //       <Link to="/hakkımızda">
    //         <li className="hover:text-white">Hakkımızda</li>
    //       </Link>
    //       <Link to="/urunler">
    //         <li className="hover:text-white">Ürünler</li>
    //       </Link>
    //       <Link to="/urunlerimiz">
    //         <li className="hover:text-white">Ürünlerimiz</li>
    //       </Link>
    //       <Link to="iletisim">
    //         <li className="hover:text-white">İletişim</li>
    //       </Link>
    //     </ul>
    //   </div>
    //   {/* <div>
    //     <input className="border border-black xl:w-[80%]" type="text" />
    //   </div> */}
    // </div>
    <>
      <div>
        <div className="bgimg">
          <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className=" text-center xl:text-left  w-full text-3xl font-bold text-white">
              BAYRAKLI MEDİKAL
            </h1>

            <ul className="hidden md:flex ">
              <Link to="/">
                <li className="p-4 hover:text-[#00df9a] transition-all ">
                  Anasayfa
                </li>
              </Link>
              <Link to="/hakkımızda">
                <li className="p-4 hover:text-[#00df9a] transition-all">
                  Hakkımızda
                </li>
              </Link>
              <Link to="/iletisim">
                <li className="p-4 hover:text-[#00df9a] transition-all">
                  İletişim
                </li>
              </Link>
              <Link to="/ürünler">
                <li className="p-4 hover:text-[#00df9a] transition-all">
                  Ürünler
                </li>
              </Link>
              <li className="p-4"></li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
              {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul
              className={
                nav
                  ? "fixed left-0 top-0 w-[60%] h-full  bg-gradient-to-r from-cyan-500 to-blue-500 ease-in-out duration-500 "
                  : "ease-in-out duration-500 fixed left-[-100%]"
              }
            >
              <Link to="/">
                <li className="p-4 hover:text-[#00df9a] transition-all text-center mt-6 ">
                  Anasayfa
                </li>
              </Link>
              <Link to="/hakkımızda">
                <li className="p-4 hover:text-[#00df9a] transition-all text-center">
                  Hakkımızda
                </li>
              </Link>
              <Link to="/iletisim">
                <li className="p-4 hover:text-[#00df9a] transition-all text-center">
                  İletişim
                </li>
              </Link>
              <Link to="/ürünler">
                <li className="p-4 hover:text-[#00df9a] transition-all text-center">
                  Ürünler
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
