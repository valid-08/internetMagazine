import React from 'react';
import Flashcard from '../../components/flashcard/flashcard';
import jostyk from "../../assets/images/jostyk.png";

const Products = () => {
    return (
        <div className='max-w-7xl mx-auto p-4 grid grid-cols-12 gap-6'>
            <div className='col-span-12 md:col-span-3 bg-white p-4 shadow-md rounded-lg'>
                <select className='w-full p-2 border rounded-md mb-4'>
                    <option value="">Popularity</option>
                </select>

                <h2 className='font-semibold mb-2'>Category</h2>
                <ul className='space-y-2 mb-4'>
                    <li>All products</li>
                    <li>Electronics</li>
                    <li>Home & Lifestyle</li>
                    <li>Medicine</li>
                    <li>Sports & Outdoor</li>
                    <li className='text-red-500 cursor-pointer'>See all</li>
                </ul>

                <h2 className='font-semibold mb-2'>Brands</h2>
                <ul className='space-y-2 mb-4'>
                    <li><input type='checkbox' /> Samsung</li>
                    <li><input type='checkbox' /> Apple</li>
                    <li><input type='checkbox' /> Huawei</li>
                    <li><input type='checkbox' /> Pocco</li>
                    <li><input type='checkbox' /> Lenovo</li>
                    <li className='text-red-500 cursor-pointer'>See all</li>
                </ul>

                <h2 className='font-semibold mb-2'>Features</h2>
                <ul className='space-y-2 mb-4'>
                    <li><input type='checkbox' /> Metallic</li>
                    <li><input type='checkbox' /> Plastic cover</li>
                    <li><input type='checkbox' /> 8GB Ram</li>
                    <li><input type='checkbox' /> Super power</li>
                    <li><input type='checkbox' /> Large Memory</li>
                    <li className='text-red-500 cursor-pointer'>See all</li>
                </ul>

                <h2 className='font-semibold mb-2'>Price range</h2>
                <input type="range" className='w-full mb-2' />
                <button className='w-full bg-red-500 text-white py-2 rounded-md'>Apply</button>
            </div>

            <div className='col-span-12 md:col-span-9'>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
                    <Flashcard name="HAVIT HV-G92 Gamepad" img={jostyk} />
                    <Flashcard name="AK-900 Wired Keyboard" img={jostyk} />
                    <Flashcard name="IPS LCD Gaming Monitor" img={jostyk} />
                    <Flashcard name="S-Series Comfort Chair " img={jostyk} />
                    <Flashcard name="S-Series Comfort Chair " img={jostyk} />
                    <Flashcard name="S-Series Comfort Chair " img={jostyk} />
                    <Flashcard name="S-Series Comfort Chair " img={jostyk} />
                    <Flashcard name="S-Series Comfort Chair " img={jostyk} />
                    <Flashcard name="S-Series Comfort Chair " img={jostyk} />
                    <Flashcard name="S-Series Comfort Chair " img={jostyk} />
                </div>
            </div>
        </div>
    );
};

export default Products;