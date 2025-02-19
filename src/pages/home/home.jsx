import React from "react";
import iphone from "../../assets/images/iphone.png";
import Flashcard from "../../components/flashcard/flashcard";
import jostyk from "../../assets/images/jostyk.png";
import But from "../../components/button/button";
import Brow from "../../components/browsecard/browsecard";
import iconIphone from "../../assets/images/iconIphone.png";
import Bestcard from "../../components/bestcard/bestcard";
import jbl from "../../assets/images/JBL.png";
import ps5 from "../../assets/images/PS5.png";
import Last from "../../components/lasthome/lasthome";
import kamaz from "../../assets/images/kamaz.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-2 bg-white p-4 shadow-md rounded-lg hidden md:block">
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

        <div className="md:col-span-10">
          <div className="relative">
            <img src={iphone} alt="" className="rounded-lg w-full" />
          </div>
        </div>
      </div>

      <section className="mt-10">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <h1 className="text-xl sm:text-2xl font-bold">Flash Sales</h1>
          <p className="text-red-500 text-lg">03 : 23 : 19 : 56</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
          <Flashcard name="HAVIT HV-G92 Gamepad" img={jostyk} />
          <Flashcard name="AK-900 Wired Keyboard" img={jostyk} />
          <Flashcard name="IPS LCD Gaming Monitor" img={jostyk} />
          <Flashcard name="S-Series Comfort Chair " img={jostyk} />
        </div>
      </section>

      <div className="flex justify-center mt-6">
        <Link to="/products">
          <But name="View All Products" />
        </Link>
      </div>

      <h1 className="text-xl sm:text-2xl font-bold mt-10">Browse By Category</h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-6">
        <Brow name="Phones" img={iconIphone} />
        <Brow name="Computers" img={iconIphone} />
        <Brow name="SmartWatch" img={iconIphone} />
        <Brow name="Camera" img={iconIphone} />
        <Brow name="HeadPhones" img={iconIphone} />
        <Brow name="Gaming" img={iconIphone} />
      </div>

      <h1 className="text-xl sm:text-2xl font-bold mt-16 mb-6">Best Selling Products</h1>
      <div className="flex justify-center">
        <Link to="/products">
          <But name="View All" />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
        <Bestcard name="The north coat" img={iphone} price="78.99" />
        <Bestcard name="Gucci duffle bag" img={iphone} price="78.99" />
        <Bestcard name="RGB liquid CPU Cooler" img={iphone} price="78.99" />
        <Bestcard name="Small BookSelf" img={iphone} price="78.99" />
      </div>

      <div className="w-full md:w-[80%] mx-auto mt-10">
        <img src={jbl} alt="" className="w-full rounded-lg" />
      </div>

      <h1 className="text-xl sm:text-2xl font-bold mt-16 mb-6">Explore Our Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
        <Flashcard name="HAVIT HV-G92 Gamepad" img={jostyk} />
        <Flashcard name="AK-900 Wired Keyboard" img={jostyk} />
        <Flashcard name="IPS LCD Gaming Monitor" img={jostyk} />
        <Flashcard name="S-Series Comfort Chair " img={jostyk} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
        <Flashcard name="HAVIT HV-G92 Gamepad" img={jostyk} />
        <Flashcard name="AK-900 Wired Keyboard" img={jostyk} />
        <Flashcard name="IPS LCD Gaming Monitor" img={jostyk} />
        <Flashcard name="S-Series Comfort Chair " img={jostyk} />
      </div>
      <div className="flex justify-center mt-6">
        <Link to="/products">
          <But name="View All Products" />
        </Link>
      </div>

      <h1 className="text-xl sm:text-2xl font-bold mt-16 mb-6">New Arrival</h1>
      <div className="w-full md:w-[80%] mx-auto">
        <img src={ps5} alt="" className="w-full rounded-lg" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-16">
        <Last img={kamaz} name="FREE AND FAST DELIVERY" desc="Free delivery for all orders over $140" />
        <Last img={kamaz} name="24/7 CUSTOMER SERVICE" desc="Friendly 24/7 customer support" />
        <Last img={kamaz} name="MONEY BACK GUARANTEE" desc="We return money within 30 days" />
      </div>
    </div>
  );
};

export default Home;
