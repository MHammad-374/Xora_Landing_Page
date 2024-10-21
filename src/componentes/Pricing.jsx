import React, { useState } from 'react'
import Plans from './Plans';
import Img1 from '../assets/plan-1.png'
import Img2 from '../assets/plan-2.png'
import Img3 from '../assets/plan-3.png'

function Pricing() {
    const pricingFeatures_1 = [
        "100MB Cloud storage",
        "100+ prompt templates",
        "5 projects",
        "24/7 support"
    ]
    const pricingFeatures_2 = [
        "All Starter features",
        "1TB additional storage",
        "Unlimited projects",
        "Analytics"
    ]
    const pricingFeatures_3 = [
        "All Overdrive features",
        "10TB additional storage",
        "50% off per member",
        "Real-time collaboration"
    ]




    const [active, setActive] = useState(true);


    return (
        <section className='pricing py-24 px-5 mt-16'>
            <h1 className="h3 head-ing text-center">Flexible pricing <br />for teams of all sizes</h1>
            <div className="pricing_btn">
                <button className="btn_btn" id="btn_month"
                    style={active ? { backgroundColor: "#3e528d", boxShadow: 'inset 0px -50px 50px #1A3070' } : {}}
                    onClick={() => setActive(true)}
                >
                    Monthly
                </button>
                <button className="btn_btn" id="btn_annual"
                    style={active ? {} : { backgroundColor: "#3e528d", boxShadow: 'inset 0px -50px 50px #1A3070' }}
                    onClick={() => setActive(false)}
                >
                    Annualy
                </button>
            </div>
            <div className="plans">
                <Plans Img={Img1} point="core" price="12" line="Best for solo creators" pricingFeatures={pricingFeatures_1}/>
                <Plans Img={Img2} point="overdrive" color={true} price="59" line="Most popular plan" pricingFeatures={pricingFeatures_2}/>
                <Plans Img={Img3} point="team" price="29" line="Exclusively for teams" pricingFeatures={pricingFeatures_3}/>
            </div>
        </section>
    )
}

export default Pricing
