import React from "react";
import Adress from "./Adress";
import "../components/Info.css";
const Info = () => {
  return (
    <>
      <div className="text-center font-semibold text-[50px] pb-40 lg:pb-32 bgimgi text-white">
        <h1 className="text-center font-semibold text-[30px] pt-8 md:pt-10 lg:pt-0 lg:text-[50px] hover:text-[#00df9a] transition-all ">
          HAKKIMIZDA
        </h1>
      </div>
      <div className=" mx-10 md:mx-20 lg:mx-6 xl:mx-20 lg:flex pt-10 lg:mt-10 ">
        <div className=" lg:w-[60%] ">
          <div className=" lg:ml-20 lg:mr-10  ">
            <div>
              <h1 className="font-semibold lg:text-[25px]">Hakkımızda</h1>
              <p className="mt-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                blanditiis odit voluptates consequuntur labore vel enim.
                Accusantium praesentium ex porro, pariatur placeat ipsum sit?
                Neque impedit explicabo id reprehenderit dicta?Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Nesciunt consectetur
                facilis pariatur rem itaque ad minima labore beatae
                exercitationem amet dolorem, ex omnis, quidem quia!
                Reprehenderit delectus in quae, nesciunt earum voluptates,
                mollitia ut soluta dignissimos quaerat quis, quas similique.
              </p>
            </div>
            <div>
              <h1 className="font-semibold lg:text-[25px] mt-6">Vizyonumuz</h1>
              <p className="mt-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                blanditiis odit voluptates consequuntur labore vel enim.
                Accusantium praesentium ex porro, pariatur placeat ipsum sit?
                Neque impedit explicabo id reprehenderit dicta?Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Nesciunt consectetur
                facilis pariatur rem itaque ad minima labore beatae
                exercitationem amet dolorem, ex omnis, quidem quia!
                Reprehenderit delectus in quae, nesciunt earum voluptates,
                mollitia ut soluta dignissimos quaerat quis, quas similique.
              </p>
            </div>
            <div>
              <h1 className="font-semibold lg:text-[25px] mt-6">Misyonumuz</h1>
              <p className="mt-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                unde placeat hic neque, dolorum necessitatibus ullam quidem
                explicabo debitis cupiditate non facilis deleniti consequuntur
                ipsa, perferendis, harum doloribus? Sapiente voluptatibus,
                officiis eaque minus temporibus sit doloremque non commodi
                reiciendis aliquid quo quisquam iusto possimus. Nisi, animi
                expedita. Odit, enim. Blanditiis?
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <Adress></Adress>
        </div>
      </div>
    </>
  );
};

export default Info;
