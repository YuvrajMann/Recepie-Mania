import React from "react";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(props) {
  return (
    <div className="footer-section">
      <div>Recepie Mania</div>
      <div>Powered by Edaman</div>
      <div>
        <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>
        2020,All rights are reserved
      </div>
    </div>
  );
}
export default Footer;
