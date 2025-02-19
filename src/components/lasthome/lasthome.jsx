import React from 'react'

const Lasthome = ({ img, name, desc }) => {
    return (
        <>
            <div>
                <img className='ml-[40%]' src={img} alt="" />
                <h2>{name}</h2>
                <p>{desc}</p>
            </div>
        </>
    )
}

export default Lasthome