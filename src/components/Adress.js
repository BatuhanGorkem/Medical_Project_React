import React from "react";

const Adress = () => {
  return (
    <div className=" md:mt-20 lg:mt-0 lg:w-[80%] lg:ml-10">
      <div>
        <h1 className="font-bold pb-1">Adres</h1>
        <p className="mt-3">
          Mansuroğlu Mahallesi 288/1 Sokak No: 14/G Avcılar Exclusive Bayraklı /
          İZMİR
        </p>
      </div>
      <div>
        <h1 className="font-bold py-2 md:mt-4 lg:mt-8">E-Posta</h1>
        <p>info@bayraklimedikal.com</p>
      </div>
      <div>
        <h1 className="font-bold py-2 md:mt-4 lg:mt-8">Telefon</h1>
        <p>0544 544 544</p>
      </div>
    </div>
  );
};

export default Adress;
