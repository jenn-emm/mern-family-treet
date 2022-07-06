import React, {useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPeopleGroup, faStar, faSliders, faAdd, faSort, faArrowDownAZ, faArrowUpZA, faClockRotateLeft, faUsers, faUserPen, faPersonCirclePlus, faPeopleArrowsLeftRight} from "@fortawesome/free-solid-svg-icons"


function SideNav() {
    const [isHovered, setIsHovered] = useState({
        favorites:false,
        addRecipe:false,
        sortBy:false,
        settings:false
    })

    const hoverOnHandler = (event) => {
        const {name} = event.target
        setIsHovered((prevValue)=>{
            return{
                ...prevValue,
                [name]: true
            }
        })
    }

    const hoverOffHandler = (event) => {
        const {name} = event.target

        setIsHovered((prevValue)=>{
            return{
                ...prevValue,
                [name]: false
            }
        })
    }
  return (
    <div className="col-lg-2" style={{backgroundColor:"white", paddingTop:"4.75rem"}}>
    <ul className="side-nav-list">
        <li>
             <a name="favorites" value={isHovered.favorites} 
             onMouseEnter={hoverOnHandler} onMouseLeave={hoverOffHandler} 
             style={{backgroundImage: isHovered.favorites && "linear-gradient(to right, #f3f1f1, #f6f5f5, #fefafa , #fcfafa, #ffff)"}}  
             className="side-nav-btn btn d-inline-flex align-items-center"><FontAwesomeIcon className="fa-icon fa-fw" icon={faStar} />Favorites</a>
        </li>
        <li>
            <a name="addRecipe" value={isHovered.addRecipe} 
            onMouseEnter={hoverOnHandler} onMouseLeave={hoverOffHandler} 
            style={{backgroundImage: isHovered.addRecipe && "linear-gradient(to right, #f3f1f1, #f6f5f5, #fefafa , #fcfafa, #ffff)"}} 
            className="side-nav-btn btn d-inline-flex align-items-center"><FontAwesomeIcon className="fa-icon fa-fw" icon={faAdd} />Add Recipe</a>
        </li>
        <li>
            <button name="sortBy" value={isHovered.sortBy} 
            onMouseEnter={hoverOnHandler} onMouseLeave={hoverOffHandler} 
            style={{backgroundImage: isHovered.sortBy && "linear-gradient(to right, #f3f1f1, #f6f5f5, #fefafa , #fcfafa, #ffff)"}}
            id="sort-by-btn" className="side-nav-btn btn d-inline-flex align-items-center" 
            data-bs-toggle="collapse" aria-expanded data-bs-target="#sort-collapse"><FontAwesomeIcon className="fa-icon fa-fw" icon={faSort} />Sort By</button>
            
            <div className="collapse" id="sort-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" className="link-dark d-inline-flex text-decoration-none"><FontAwesomeIcon className="fa-icon fa-fw" icon={faArrowDownAZ} />Ascending</a></li>
                    <li><a href="#" className="link-dark d-inline-flex text-decoration-none"><FontAwesomeIcon className="fa-icon fa-fw" icon={faArrowUpZA} />Descending</a></li>
                    <li><a href="#" className="link-dark d-inline-flex text-decoration-none"><FontAwesomeIcon className="fa-icon fa-fw" icon={faClockRotateLeft} />Date Added</a></li> 
                </ul>
            </div>
        </li>
        <li>
            <button name="settings" value={isHovered.settings} 
            onMouseEnter={hoverOnHandler} onMouseLeave={hoverOffHandler} 
            style={{backgroundImage: isHovered.settings && "linear-gradient(to right, #f3f1f1, #f6f5f5, #fefafa , #fcfafa, #ffff)"}} id="settings-btn" 
            className="side-nav-btn btn d-inline-flex align-items-center" 
            data-bs-toggle="collapse" data-bs-target="#settings-collapse" aria-expanded="false"><FontAwesomeIcon className="fa-icon fa-fw" icon={faSliders} />Settings</button>
            
            <div className="collapse" id="settings-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded"><FontAwesomeIcon className="fa-icon fa-fw" icon={faUsers} />Change Family Profile View</a></li>
                    <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded"><FontAwesomeIcon className="fa-icon fa-fw" icon={faPeopleGroup} />Create New Family Profile</a></li>
                    <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded"><FontAwesomeIcon className="fa-icon fa-fw" icon={faPeopleArrowsLeftRight} />Join Existing Family Profile</a></li>
                    <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded"><FontAwesomeIcon className="fa-icon fa-fw" icon={faPersonCirclePlus} />Share Family Profile</a></li>
                    <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded"><FontAwesomeIcon className="fa-icon fa-fw" icon={faUserPen} />Edit Your Profile</a></li>
                </ul>
            </div>
        </li>
    </ul>
</div>
  )
}

export default SideNav