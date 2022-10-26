import React from "react";
import Adress from "./Adress";
import "../components/Contact.css";
const Contact = () => {
  return (
    <>
      <div className="text-center font-semibold text-[30px] pb-40  lg:text-[50px] pb-32 bgimgc text-white   ">
        <h1 className="hover:text-[#00df9a] transition-all pt-8 md:pt-10 lg:pt-0 ">
          İLETİŞİM
        </h1>
      </div>
      <div className="mx-2 md:mx-20 lg:ml-20 lg:flex lg:mb-20 pt-10 lg:pt-20">
        <div className=" lg:w-[100%] xl:w-[50%]">
          <h1 className=" mx-8 lg:mx-20 pb-5">
            Herhangi bir konuda iletişime geçebilirsiniz.
          </h1>
          <div className=" mx-8  lg:mx-20 ">
            <div className="">
              <form className=" flex flex-col" action="">
                <label className="font-bold pb-3 " htmlFor="name">
                  İsim
                </label>
                <input
                  className="border border-gray-500 rounded-md p-1 hover:p-2 hover:border-blue-700 focus:p-2 transition-all"
                  id="name"
                  type="text"
                />
                <label className="font-bold py-3" htmlFor="email">
                  E-mail
                </label>
                <input
                  className="border border-gray-500 rounded-md p-1 hover:p-2 hover:border-blue-700 focus:p-2 transition-all"
                  id="email"
                  type="text"
                />
                <label className="font-bold py-3" htmlFor="topic">
                  Konu
                </label>
                <input
                  className="border border-gray-500 rounded-md p-1 hover:p-2 hover:border-blue-700 focus:p-2 transition-all"
                  type="text"
                  id="topic"
                />
                <label className="font-bold py-3" htmlFor="">
                  Mesajınız
                </label>
                <textarea
                  className="border border-gray-500 rounded-md p-1 hover:p-2 hover:border-blue-700 focus:p-2 transition-all"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <button type="submit"></button>
              </form>
            </div>
          </div>
        </div>
        <div className=" mx-8 lg:mx-20 pt-6">
          <Adress />
        </div>
      </div>
    </>
  );
};

export default Contact;
