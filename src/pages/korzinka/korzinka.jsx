import React, { useState } from 'react';
import monic from "../../assets/images/Monitor-Cart-Small.png";
import { Button, TextField, Select, MenuItem } from '@mui/material';

const Korzinka = () => {
    let [data, setData] = useState([
        {
            id: 1,
            name: 'LCD Monitor',
            price: 850,
            count: 1,
            img: monic,
            subtotal: 850
        },
        {
            id: 2,
            name: 'Hi Gamepad',
            price: 550,
            count: 2,
            img: monic,
            subtotal: 1100
        }
    ]);

    return (
        <div className="max-w-5xl mx-auto p-6">
            <p className="text-gray-500 text-sm sm:text-base">Home / Cart</p>
            <div className="overflow-x-auto">
                <table className='w-full text-center mt-10 border-collapse min-w-[600px]'>
                    <thead>
                        <tr className='border-b'>
                            <th className='pb-4'>Product</th>
                            <th className='pb-4'>Price</th>
                            <th className='pb-4'>Quantity</th>
                            <th className='pb-4'>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(el => (
                            <tr key={el.id} className='border-b h-20'>
                                <td className='flex items-center gap-4 p-4'>
                                    <img src={el.img} alt={el.name} className='w-12 h-12 sm:w-16 sm:h-16' />
                                    <span className='text-sm sm:text-base'>{el.name}</span>
                                </td>
                                <td className='text-sm sm:text-base'>${el.price}</td>
                                <td>
                                    <Select value={el.count} size='small'>
                                        {[...Array(10).keys()].map(n => (
                                            <MenuItem key={n + 1} value={n + 1}>{n + 1}</MenuItem>
                                        ))}
                                    </Select>
                                </td>
                                <td className='font-bold text-sm sm:text-base'>${el.subtotal}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div className='flex flex-col sm:flex-row justify-between mt-8 gap-4'>
                <div className='flex gap-2 flex-wrap'>
                    <Button variant="outlined">Return To Shop</Button>
                    <Button variant="outlined">Update Cart</Button>
                    <Button variant="outlined" color="error">Remove all</Button>
                </div>
                
                <div className='flex gap-2 flex-wrap'>
                    <TextField label="Coupon Code" variant="outlined" size="small" />
                    <Button variant="contained" color="error">Apply</Button>
                </div>
            </div>

            <div className='border p-6 mt-8 w-full sm:w-80 ml-auto'>
                <p className='font-bold text-lg'>Cart Total</p>
                <div className='flex justify-between mt-2'>
                    <span>Subtotal:</span>
                    <span>$1750</span>
                </div>
                <div className='flex justify-between mt-2'>
                    <span>Shipping:</span>
                    <span>Free</span>
                </div>
                <div className='flex justify-between mt-4 font-bold text-lg'>
                    <span>Total:</span>
                    <span>$1750</span>
                </div>
                <Button variant="contained" color="error" className='w-full mt-4'>Process to checkout</Button>
            </div>
        </div>
    );
};

export default Korzinka;