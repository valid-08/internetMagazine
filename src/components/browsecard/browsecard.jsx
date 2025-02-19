import React from 'react'

const Browsecard = ({img, name}) => {
  return (
    <>
    <div className='w-[150px] h-[60px] border-b-2 p-[60px_0px]'>
        <img src={img} className='ml-[40px]' alt="" />
        <p className='text-center'>{name}</p>
    </div>
    </>
  )
}

export default Browsecard