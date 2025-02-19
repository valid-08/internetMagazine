import React from "react";
import iphone from "../../assets/images/iphone.png";
import Flashcard from "../../components/flashcard/flashcard";
import jostyk from "../../assets/images/jostyk.png"
import But from "../../components/button/button"

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-2 bg-white p-4 shadow-md rounded-lg">
          <ul className="space-y-3 text-gray-700">
            <p>Woman’s Fashion</p>
            <p>Men’s Fashion</p>
            <p>Electronics</p>
            <p>Home & Lifestyle</p>
            <p>Medicine</p>
            <p>Sports & Outdoor</p>
            <p>Baby’s & Toys</p>
            <p>Groceries & Pets</p>
            <p>Health & Beauty</p>
          </ul>
        </div>

        <div className="col-span-10">
          <div className="relative">
            <img src={iphone} alt="" className="rounded-lg w-[90%]" />
          </div>
        </div>
      </div>

      <section className="mt-10">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Flash Sales</h1>
          <p className="text-red-500 text-lg">03 : 23 : 19 : 56</p>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-6">
          <Flashcard name="HAVIT HV-G92 Gamepad" img={jostyk} />
          <Flashcard name="AK-900 Wired Keyboard" img={jostyk} />
          <Flashcard name="IPS LCD Gaming Monitor" img={jostyk} />
          <Flashcard name="S-Series Comfort Chair " img={jostyk} />
        </div>
      </section>
      <div className="ml-[41.5%] mt-[60px]" >
      <But name="View All Products" />
      </div>
    </div>
  );
};

export default Home;
