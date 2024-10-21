import React from 'react'
import Button from './Button'


function Hero() {
    return (
        <section className='hero pb-10 pt-36 px-5 lg:pl-24 xl:pl-44'>
            <div className="text-container md:w-1/2">
                <p className='yellow'>Video editing</p>
                <h1 className="md:h2 lg:h1 heading">AMAZINGLY SAMPLE</h1>
                <h2 className="text sm:text-2xl lg:text-3xl">We designed XORA AI Video Editor to be an easy to use, quick to learn and surprisingly powerful.</h2>
                <Button />
            </div>
        </section>
    )
}

export default Hero
