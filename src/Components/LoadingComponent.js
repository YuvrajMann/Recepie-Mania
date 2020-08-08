import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faSync } from "@fortawesome/free-solid-svg-icons";

export const Loading = () => {
  return (
    <div className="spinner">
      <FontAwesomeIcon icon={faSync} className="fa-spin" />
    </div>
  );
};
