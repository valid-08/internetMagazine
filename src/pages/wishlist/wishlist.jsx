import { Button } from '@mui/material'
import React from 'react'
import Flashcard from '../../components/flashcard/flashcard'
import jostyk from "../../assets/images/jost.png";

const Wishlist = () => {
    return (
        <>
            <div className='mt-[100px] flex justify-between mb-[100px]'>
                <h1>Wishlist(4)</h1>
                <Button variant='outlined'>Move All To Bag</Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
                <Flashcard price="99.99" name="HAVIT HV-G92 Gamepad" img={jostyk} />
                <Flashcard price="99.99" name="AK-900 Wired Keyboard" img={jostyk} />
                <Flashcard price="99.99" name="IPS LCD Gaming Monitor" img={jostyk} />
                <Flashcard price="99.99" name="S-Series Comfort Chair" img={jostyk} />
            </div>
            <div className='mt-[100px] flex justify-between mb-[100px]'>
                <h1>Just For You</h1>
                <Button variant='outlined'>See All</Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
                <Flashcard price="99.99" name="HAVIT HV-G92 Gamepad" img={jostyk} />
                <Flashcard price="99.99" name="AK-900 Wired Keyboard" img={jostyk} />
                <Flashcard price="99.99" name="IPS LCD Gaming Monitor" img={jostyk} />
                <Flashcard price="99.99" name="S-Series Comfort Chair" img={jostyk} />
            </div>
        </>
    )
}

export default Wishlist