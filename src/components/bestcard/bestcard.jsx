import React from 'react'

const Bestcard = ({name, img, price}) => {
    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="h-40 bg-gray-100 flex items-center justify-center rounded-md">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
                <p className="mt-2 font-semibold">{name}</p>
                <p className="text-red-500">${price}</p>
            </div>
        </>
    )
}

export default Bestcard