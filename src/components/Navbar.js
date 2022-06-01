import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSeedling} from "@fortawesome/free-solid-svg-icons"
import '../index.css';

function Navbar() {
  const [hovered, setHovered] = useState({
    buttonOne: false,
    buttonTwo: false
  })

  const hoverOnHandler = (event) =>{
    const {name} = event.target
    setHovered((prevValue) =>{
      return {
        ...prevValue,
        [name]: true
      }

    })
  }

  const hoverOffHandler = (event) =>{
    const {name} = event.target
    setHovered((prevValue) =>{
      return {
        ...prevValue,
        [name]: false
      }

    })
  }

  return (
    <nav id="nav-bar" className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" id="navbar-brand" href="#">
        <FontAwesomeIcon className="fa-icon" icon={faSeedling} />
          FamilyTreet
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
                <li id="nav-item-one" className="nav-item">
                <a className="nav-link" href="#">Home</a>
                </li>
                <li id="nav-item-two" className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
                </li>
                <li id="nav-item-three" className="nav-item">
                <a className="nav-link" href="#">Features</a>
                </li>
            </ul>
            <button name="buttonOne" style={{color: hovered.buttonOne ? "#E1DFDD" : "white"}} onMouseOver={hoverOnHandler} onMouseOut={hoverOffHandler} id="btn-home-one" className="btn ml-auto" type="submit">Register</button>
            <button name="buttonTwo" style={{color: hovered.buttonTwo ? "#E1DFDD" : "white"}} onMouseOver={hoverOnHandler} onMouseOut={hoverOffHandler} id="btn-home-two" className="btn" type="submit">Sign In</button>
        </div>
    </nav>
  )
}

export default Navbar