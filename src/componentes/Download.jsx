import React from 'react'
import Img from "../assets/screen.jpg"
import Logo from './Logo'
import AppleSvg from './AppleSvg'
import PlaystoreSvg from './PlaystoreSvg'
import WindowsSvg from './WindowsSvg'
import Browser from './Browser'
function Download() {
    return (
        <section className='download px-5 lg:px-24 xl:px-44'>
            <div className="download_col">
                <Logo />
                <h2 className="text py-8 sm:text-2xl lg:text-3xl">Try it now for free on iOS, Android, PC, Web - whatever your flavor, we’ve got you covered.</h2>
                <ul className="download_links">
                    <li className='li_svg'><AppleSvg /></li>
                    <li className='li_svg'><PlaystoreSvg /></li>
                    <li className='li_svg'><WindowsSvg /> </li>
                    <li className='li_svg'><Browser /></li>
                </ul>
            </div>
            <div className="download_preview">
                <img src={Img} alt="" className="screenImg" />
            </div>
        </section>
    )
}

export default Download
