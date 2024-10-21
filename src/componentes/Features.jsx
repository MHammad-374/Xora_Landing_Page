import React from 'react'
import FeatureBox from './FeatureBox'
import Img1 from '../assets/feature-1.png'
import Img2 from '../assets/feature-2.png'

function Features() {
  return (
    <section className='features py-24 px-5 lg:px-24 xl:px-44'>
      <div className='features_container'>
        <div className="left">
          <FeatureBox
            Img={Img1}
            sub_heading="Easy integration"
            heading="Work smarter not harder"
            text="We designed XORA AI Video Editor to be an easy to use, quick to learn and surprisingly powerful."
            btn_text = "Watech the demo"
            symbol={true}
            symbol1={true}
            />
        </div>
        <div className="right">
          <FeatureBox
            Img={Img2}
            sub_heading='Secure & trustworthy'
            heading="Sleep easy, we got your back"
            text="Your data security is our priority. With state-of-the-art encryption and robust privacy controls, Xora helps keeps your information secure and locked up tighter than Fort Knox."
            btn_text = "Read the docs"
            symbol={true}
          />
        </div>
      </div>
    </section>
  )
}

export default Features
