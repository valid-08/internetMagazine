import React, { useEffect, useState } from "react";
import iphone from "../../assets/images/iphone.png";
import Flashcard from "../../components/flashcard/flashcard";
import jostyk from "../../assets/images/jost.png";
import But from "../../components/button/button";
import Brow from "../../components/browsecard/browsecard";
import iconIphone from "../../assets/images/iconIphone.png";
import Bestcard from "../../components/bestcard/bestcard";
import jbl from "../../assets/images/JBL.png";
import ps5 from "../../assets/images/PS5.png";
import Last from "../../components/lasthome/lasthome";
import kamaz from "../../assets/images/kamaz.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";



const Home = () => {
  const [data, setData] = useState([])
  const get = async () => {
    try {
      const { data } = await axios.get("https://store-api.softclub.tj/Product/get-products")
      setData(data.data)
    } catch (error) {
      console.error(error);
    }
  }



  const addToCart = async (id) => {
    try {
      const data = await axios.post(`https://store-api.softclub.tj/Cart/add-product-to-cart?id=${id}`, {}, {
        headers: {
          "authorization": `Bearer ${localStorage.getItem('access_token')}`,
        }
      })
      console.log(data);

    } catch (error) {
      console.error(error);

    }
  }

  useEffect(() => {
    get()
  }, [])





  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 23,
    seconds: 19,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="max-w-7xl mx-auto p-4 mt-[100px]">
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
            <Swiper navigation={true} modules={[Navigation]}>
              <SwiperSlide>
                <img src={iphone} alt="" className="rounded-lg w-full" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={iphone} alt="" className="rounded-lg w-full" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={iphone} alt="" className="rounded-lg w-full" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <h1 className="text-xl sm:text-2xl font-bold">Flash Sales</h1>
          <p className="text-red-500 text-lg font-semibold">
            {String(timeLeft.hours).padStart(2, "0")} :{" "}
            {String(timeLeft.minutes).padStart(2, "0")} :{" "}
            {String(timeLeft.seconds).padStart(2, "0")}
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
          {/* <Flashcard price="99.99" name="HAVIT HV-G92 Gamepad" img={jostyk} />
          <Flashcard price="99.99" name="AK-900 Wired Keyboard" img={jostyk} />
          <Flashcard price="99.99" name="IPS LCD Gaming Monitor" img={jostyk} />
          <Flashcard price="99.99" name="S-Series Comfort Chair" img={jostyk} /> */}
          {data?.products?.length > 0 && data.products.map((el) => {
            return <Flashcard key={el.id}>
              <h2>{el.productName}</h2>
              <p>{el.categoryName}</p>
              <p>{el.price}</p>
              <button onClick={() => addToCart(el.id)}>Add to Cart</button>
            </Flashcard>
          })}

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
        {/* <Flashcard price="99.99" name="HAVIT HV-G92 Gamepad" img={jostyk} />
        <Flashcard price="99.99" name="AK-900 Wired Keyboard" img={jostyk} />
        <Flashcard price="99.99" name="IPS LCD Gaming Monitor" img={jostyk} />
        <Flashcard price="99.99" name="S-Series Comfort Chair " img={jostyk} /> */}
        {data?.products?.length > 0 && data.products.map((el) => {
          return <Flashcard key={el.id}>
            <h2>{el.productName}</h2>
            <p>{el.categoryName}</p>
            <p>{el.price}</p>
            <button onClick={() => addToCart(el.id)}>Add to Cart</button>
          </Flashcard>
        })}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
        {/* <Flashcard price="99.99" name="HAVIT HV-G92 Gamepad" img={jostyk} />
        <Flashcard price="99.99" name="AK-900 Wired Keyboard" img={jostyk} />
        <Flashcard price="99.99" name="IPS LCD Gaming Monitor" img={jostyk} />
        <Flashcard price="99.99" name="S-Series Comfort Chair " img={jostyk} /> */}
        {data?.products?.length > 0 && data.products.map((el) => {
          return <Flashcard key={el.id}>
            <h2>{el.productName}</h2>
            <p>{el.categoryName}</p>
            <p>{el.price}</p>
            <button onClick={() => addToCart(el.id)}>Add to Cart</button>
          </Flashcard>
        })}
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
