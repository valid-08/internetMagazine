import React from 'react';

const Flashcard = ({ name, img, price }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="h-40 bg-gray-100 flex items-center justify-center rounded-md" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
