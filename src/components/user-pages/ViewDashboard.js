import React, {useRef, useState} from "react"
import { useReactToPrint } from "react-to-print";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPrint, faStar, faTrashCan} from "@fortawesome/free-solid-svg-icons"
import RecipeDashboard from "./RecipeDashboard";
import ConfirmDeleteModal from "../multi-use/ConfirmDeleteModal";


const ViewDashboard= React.forwardRef((props, ref) => {

    const [isFavorite, setIsFavorite] = useState(false)
    const [deleteIsClicked, setDeleteIsClicked] = useState(false)
    
    const favoriteClickHandler = (event) =>{
        event.preventDefault()
        setIsFavorite(!isFavorite)
    }

    const deleteClickHandler = () =>{
      setDeleteIsClicked(!deleteIsClicked)
    }

    const componentRef = useRef();
    
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      pageStyle: "@page { size: 12in 13in }"
    });

  return (
    <div className="view-dashboard-print-section col-lg-10 user-dashboard">
        <button id="favorite-btn" value={isFavorite} title="Favorite?" onClick={favoriteClickHandler} style={{color: isFavorite && "#C29B06"}}><FontAwesomeIcon className="fa-fw" icon={faStar} /></button>
        <button id="print-btn" onClick={handlePrint} title="Print"><FontAwesomeIcon className="fa-fw" icon={faPrint} /></button>
        <button id="delete-btn" onClick={deleteClickHandler} title="Delete" ><FontAwesomeIcon className="fa-fw" icon={faTrashCan} /></button>
        {deleteIsClicked && <ConfirmDeleteModal closeModal={deleteClickHandler} />}
        {!deleteIsClicked && <RecipeDashboard ref={componentRef} />}
    </div>
  )
})

export default ViewDashboard