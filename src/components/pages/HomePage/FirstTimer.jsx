import React from 'react'
import Button from '../../helpers/Button'
import Container from '../../helpers/Container'

const FirstTimer = () => {
    return (
        <div>
            <Container>
                <div className='text-center bg-[#494949] rounded-lg py-10'>
                    <p className=' md:text-[3.5rem] text-[2rem] font-bold text-white py-4'>FIRST TIME HERE? </p>
                    <p className='text-white text-[1.5rem] py-6'>
                        We’re glad you are here and considering Fellowship Church. <br /> We hope you are able to join us Sunday.
                    </p>
                    <p className='text-blue-200 underline text-[1.3rem] font-semibold py-5'>

                        Opposite Federal Polytechnic Offa <br />
                        Behind NNPC Filling Station, <br />
                        Offa Kwara State
                    </p>
                    <p className='text-white text-[1.5rem] py-5'>
                        Sunday Service begins at 8:30 am

                    </p>

                    <Button cl text={"PLAN YOUR VISIT"} margin />
                </div>
            </Container >
        </div >
    )
}

export default FirstTimer