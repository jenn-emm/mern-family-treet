import React, {useState} from 'react'

function CallToAction() {
    const [hovered, setHovered] = useState(false)

 const hoverOnHandler = () =>{
     setHovered(true)
 }
 const hoverOffHandler = () =>{
    setHovered(false)
}

  return (
    <div className='call-to-action-section'>
    <h1 className='cta-h1'>Create Your Free Profile Today</h1>
    <button style={{color: hovered ? "#464646" : "#2c5d37"}} onMouseOver={hoverOnHandler} onMouseOut={hoverOffHandler} className='btn cta-btn' id="cta-btn" type='submit'>Register New Account</button>
    </div>
  )
}

export default CallToAction