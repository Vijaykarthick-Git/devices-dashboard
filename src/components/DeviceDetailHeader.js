import storageIcon from "../assets/pie-chart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import "../pages/DeviceDetail.css";

export const DeviceDetailHeader = ({ device }) => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>{device.serialNo}</h1>
        <p className="theatre-name">{device.theatreName}</p>
        <p className="theatre-location">
          {device.location.city}, {device.location.state},{" "}
          {device.location.country}
        </p>
        <div className="status-bar">
          <span className="status-text">
            {" "}
            <span
              className={`status-indicator ${device.deviceStatus.toLowerCase()}`}
            ></span>
            {device.deviceStatus}
          </span>
          <span className="storage-text">
            {" "}
            <span className="storage-indicator">
              <img
                src={storageIcon}
                alt="Storage Icon"
                style={{ width: "12px", height: "12px" }}
              />
            </span>
            {device.storage}
          </span>
        </div>
        <div className="bottom-line"></div>
      </div>
      <div className="header-actions">
        <button className="action-button">
          <FontAwesomeIcon icon={faArrowTrendUp} /> Speedtest
        </button>
        <button className="action-button">
          {" "}
          <FontAwesomeIcon icon={faFileAlt} /> Logs
        </button>
      </div>
      <div className="tabs">
        <button className="active">Details</button>
        <button>Content</button>
        <button>Bandwidth</button>
      </div>
    </div>
  );
};
