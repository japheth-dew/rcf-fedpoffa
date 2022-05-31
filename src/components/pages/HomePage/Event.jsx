import React from 'react'
import "./event.css"
import Container from '../../helpers/Container'
import Button from '../../helpers/Button'



const Event = () => {
    return (
        <div className='w-full ' id='event'>
            <Container>
                <div className='flex flex-col items-center'>

                    <p className=' text-black text-[2rem] md:text-[4rem] font-bold '>Upcoming Events</p>
                    <p className='text-white font-semibold md:text-[1.5rem] text-[1rem]'>We are the happiest People on Campus</p>
                </div>
            </Container>

        </div>
    )
}

export default Event