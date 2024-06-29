import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/DeviceDetail.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Breadcrumb = ({ device }) => {
  const navigate = useNavigate();

  const handleDevicesClick = () => {
    navigate(-1);
  };

  return (
    <div className="breadcrumb">
      <span className="breadcrumb-link" onClick={handleDevicesClick}>
        Devices
      </span>
      <span className="breadcrumb-separator">
        {" "}
        <FontAwesomeIcon icon={faChevronRight} />{" "}
      </span>
      <span className="breadcrumb-values">{device.serialNo}</span>
    </div>
  );
};

export default Breadcrumb;
