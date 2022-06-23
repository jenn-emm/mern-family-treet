import React, {useRef, useState} from "react"
import { useReactToPrint } from "react-to-print";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPrint, faStar} from "@fortawesome/free-solid-svg-icons"
import RecipeDashboard from "./RecipeDashboard";


const ViewDashboard= React.forwardRef((props, ref) => {

    const [isFavorite, setIsFavorite] = useState(false)
    
    const clickHandler = (event) =>{
        event.preventDefault()
        setIsFavorite(!isFavorite)
    }

    const componentRef = useRef();
    
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      pageStyle: "@page { size: 12in 13in }"
    });

  return (
    <div className="view-dashboard-print-section col-lg-10 user-dashboard">
        <button id="favorite-btn" value={isFavorite} title="Favorite?" onClick={clickHandler} style={{color: isFavorite && "#C29B06"}}><FontAwesomeIcon className="fa-fw" icon={faStar} /></button>
        <button id="print-btn" onClick={handlePrint} title="Print"><FontAwesomeIcon className="fa-fw" icon={faPrint} /></button>
        <RecipeDashboard ref={componentRef} />
    </div>
  )
})

export default ViewDashboard