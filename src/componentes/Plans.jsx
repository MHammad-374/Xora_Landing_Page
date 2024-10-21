import React from 'react'
import liImg from '../assets/check.png'
import Button from './Button'


function Plans({ Img, point, color = false, price, line, pricingFeatures }) {




    return (
        <div className='plan'>
            <img className='plan_Img' src={Img} alt="" />
            <div className="point" style={color ? { border: "3px solid #C8EA80", color: "#b4db76" } : { border: "3px solid rgb(115, 227, 255)", color: "rgb(115, 227, 255)" }}>{point}</div>
            <div className="pricing">
                <h1 className="price" style={{ color: color ? "#C8EA80" : "whiite" }}>${price}</h1>
                <span className='sup'>/MO</span>
            </div>
            <h2 className="line sm:text-xl lg:text-2xl">{line}</h2>
            <ul className='pricing_features'>
                {
                    pricingFeatures.map(pf => {
                        return (
                            <li className='pf_li'>
                                <img className='li_img' src={liImg} alt="" />
                                {pf}
                            </li>
                        )
                    })
                }
            </ul>
            <div className="flex justify-center">
                <Button />
            </div>
        </div>
    )
}

export default Plans
