import React from 'react'

const Container = (props) => {
    return (
        <section className='md:mx-[7rem] mx-[1rem] my-[1.5rem] '>
            {props.children}
        </section>
    )
}

export default Container