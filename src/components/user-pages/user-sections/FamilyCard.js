import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPeopleRoof} from "@fortawesome/free-solid-svg-icons"

function FamilyCard() {
  return (
    <div className="col-lg-5">
        <div className="card user-main-card">
            <div className="card-body family-member-card">
                <h5 className="card-title family-member-title"><FontAwesomeIcon className="fa-icon fa-fw" icon={faPeopleRoof} /> O'Meara Family Members</h5>
                <ul className="fam-list">
                    <li className="family-member">Jenn O'Meara</li>
                    <li className="family-member">Douglas O'Meara</li>
                    <li className="family-member">Porg Flipperton-O'Meara</li>
                    <li className="family-member">Merp</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FamilyCard