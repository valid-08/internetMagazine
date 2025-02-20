import React, { useState } from "react";

const Info = () => {
  return (
    <div className="flex gap-8 max-w-4xl mt-[100px]">
      <div className="flex flex-col gap-4">
        <div className="w-20 h-20 bg-gray-200 rounded-md flex items-center justify-center">
          <p className="text-gray-400">[Фото 1]</p>
        </div>
        <div className="w-20 h-20 bg-gray-200 rounded-md flex items-center justify-center">
          <p className="text-gray-400">[Фото 2]</p>
        </div>
        <div className="w-20 h-20 bg-gray-200 rounded-md flex items-center justify-center">
          <p className="text-gray-400">[Фото 3]</p>
        </div>
        <div className="w-20 h-20 bg-gray-200 rounded-md flex items-center justify-center">
          <p className="text-gray-400">[Фото 4]</p>
        </div>
      </div>

      <div className="flex-1 bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-400">[Тут будет главное фото]</p>
      </div>

      <div className="max-w-lg">
        <h1 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h1>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-yellow-500">★★★★★</span>
          <span className="text-gray-500">(150 Reviews)</span>
          <span className="text-green-600 font-semibold">In Stock</span>
        </div>
        <p className="text-red-500 text-3xl font-bold mt-2">$192.00</p>
        <p className="text-gray-600 mt-2">
          PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.
        </p>
        
        <div className="mt-4 flex items-center gap-2">
          <span className="font-semibold">Colours:</span>
          <span className="w-6 h-6 rounded-full border bg-red-500"></span>
          <span className="w-6 h-6 rounded-full border bg-black"></span>
        </div>
        
        <div className="mt-4">
          <span className="font-semibold">Size:</span>
          <div className="mt-2 flex gap-2">
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <button key={size} className="px-3 py-1 border rounded-md hover:bg-gray-200">{size}</button>
            ))}
          </div>
        </div>
        
        <div className="mt-4 flex items-center gap-4">
          <input
            type="number"
            min="1"
            defaultValue="1"
            className="w-16 border p-1 rounded-md text-center"
          />
          <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
            Buy Now
          </button>
        </div>
        
        <div className="mt-6 border-t pt-4 text-gray-700">
          <p className="flex items-center gap-2">🚚 <span>Free Delivery</span></p>
          <p className="flex items-center gap-2 mt-2">🔄 <span>Free 30 Days Delivery Returns</span></p>
        </div>
      </div>
    </div>
  );
};

export default Info;