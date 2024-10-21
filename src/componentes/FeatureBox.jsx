import React from 'react'

import Button from './Button'

function FeatureBox({ Img, sub_heading, heading, text, btn_text, symbol, symbol1 }) {
    return (
        <>
            <div className='content_box'>
                <div>
                    <img className='feature_Img' src={Img} alt="" />
                    <p className='yellow'>{sub_heading}</p>
                    <h1 className='feature_heading'>{heading}</h1>
                    <h2 className="text sm:text-2xl lg:text-3xl">{text}</h2>
                </div>
                <div className="btn">
                    <Button text={btn_text} symbol={symbol} symbol1={symbol1} />
                </div>
            </div>

        </>
    )
}

export default FeatureBox
