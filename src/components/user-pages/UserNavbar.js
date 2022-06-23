import React, {useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSeedling, faHome, faGear, faCircleUser, faSearch} from "@fortawesome/free-solid-svg-icons"

function UserNavbar() {
    
      return (
        <nav id="nav-bar" className="navbar navbar-expand-lg fixed-top navbar-light">
            <a className="navbar-brand"><FontAwesomeIcon className="fa-icon icon-user-nav" icon={faSeedling} /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#userNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="userNavbar">
                
                <div className="navbar-nav ms-auto">
                    <form className="form-inline my-2 my-lg-0">
                        <input id="user-search-bar" className="form-control mr-sm-2" type="search" placeholder="Find a Recipe" aria-label="Search"></input>
                        <button id="user-search-btn" className="btn btn-outline-success" type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>
                <a href="#">
                            <FontAwesomeIcon className="nav-link" icon={faHome} />
                        </a>
               
                <a href="#">
                    <FontAwesomeIcon className="fa-icon nav-link" icon={faGear} />
                </a>
                
                <div class="btn-group dropstart">
                    <button className="user-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faCircleUser} />
                    </button>
                    <ul class="dropdown-menu">
                        <a class="dropdown-item" href="#">User Profile</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Logout</a>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
      )
}

export default UserNavbar