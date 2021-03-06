import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faCopyright} from "@fortawesome/free-regular-svg-icons"

function Copyright() {
  return (
    <div className="copyright-section">
        <FontAwesomeIcon className="FA-Icon" icon={faFacebookF} />
        <FontAwesomeIcon className="FA-Icon" icon={faTwitter} />
        <FontAwesomeIcon className="FA-Icon" icon={faInstagram} />
        <p className="copyright"><FontAwesomeIcon icon={faCopyright} /> 2022 FamilyTreet </p>
    </div>
  )
}

export default Copyright