import React from 'react';
import img1 from "../../assets/images/Fill Eye.png";
import img2 from "../../assets/images/Fill Heart (1).png";
import { Link } from 'react-router-dom';

const Flashcard = ({ name, img, price }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md relative">
            <div
                className="h-40 bg-gray-100 flex items-center justify-center rounded-md relative"
                style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <Link to="/info">
                    <img
                        src={img1}
                        alt="Info"
                        className="absolute top-2 right-2 w-6 h-6 cursor-pointer opacity-80 hover:opacity-100 transition"
                    />
                </Link>

                <img
                    src={img2}
                    alt="Info"
                    className="absolute top-10 right-2 w-6 h-6 cursor-pointer opacity-80 hover:opacity-100 transition"
                />
            </div>
            <p className="mt-2 font-semibold">{name}</p>
            <p className="text-red-500">${price}</p>
            <button className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
                Add to Cart
            </button>
        </div>
    );
};

export default Flashcard;
