import React from 'react';
import happyYouths from "../../../images/happyYouths.jpg"
import Button from '../../helpers/Button';
import Container from '../../helpers/Container'

const Welcome = () => {
    return (
        <div>
            <Container>

                <div className='overflow-hidden rounded-lg md:h-[38rem] flex  relative' >
                    <img className=" w-full opacity-80 " src={happyYouths} alt="bg" />
                    <div className='absolute bottom-8 left-8 '>

                        <Button text="Join Us This Sunday" margin />

                        <p className=' text-white text-[2rem] md:text-[4rem] font-bold '>Welcome to Church</p>
                        <p className='text-white font-semibold md:text-[1.5rem] text-[1rem]'>We are the happiest People on Campus</p>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Welcome