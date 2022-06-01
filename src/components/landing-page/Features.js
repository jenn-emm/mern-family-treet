import React from 'react'
import BakingFood from "../../images/baking-food-resized.jpg"


function Features() {
  return (
    <div className='features-section'>
        <div className='row align-items-center'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
            <img className="baking-img img-fluid" src={BakingFood}/>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='first-feature-caption'>
                    <h2 className='first-feature-caption-header'>Easily Share Private Recipes.</h2>
                    <p className='first-feature-caption-p'>Create an individual profile and join an existing family profile, or create a new one and start sharing recipes with your family today!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features