import DeviceStatusSummary from "../components/DeviceStatusSummary";
import { Link } from "react-router-dom";
import "../pages/DeviceTable.css";
import React, { useEffect, useState } from "react";
import DeviceHeader from "../components/DeviceHeader";
import { getDevices } from "../services/DeviceApiService";
import { SearchPagination } from "../components/SearchPagination.js";

const DevicesTable = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const result = await getDevices();
        setDevices(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchDevices();
  }, []);

  console.log("Devices in DevicesTable:", devices);
  if (!devices || devices.length === 0) {
    return (
      <div>
        <header>
          <h1>Devices</h1>
        </header>
        <DeviceStatusSummary />
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div>
      <DeviceHeader />
      <DeviceStatusSummary />
      <div className="device-table-container">
        <SearchPagination />
        <table className="device-table">
          <thead>
            <tr>
              <th>Device Serial</th>
              <th>Location</th>
              <th>Bandwidth</th>
              <th>Status</th>
              <th>Download Status</th>
              <th>OS Version</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device) => (
              <tr key={device.serialNo}>
                <td>{device.serialNo}</td>
                <td>
                  {device.theatreName}
                  <br />
                  <br />
                  <span className="sub-location">
                    {device.location.city}, {device.location.state},{" "}
                    {device.location.country}
                  </span>
                </td>
                <td>
                  {device.bandwidth}
                  <br />
                  <br />
                  <span className="sub-bandwidth">{device.avgBandwidth}</span>
                </td>
                <td>
                  <span
                    className={`status-indicators ${device.deviceStatus.toLowerCase()}-indicator`}
                  ></span>
                  <span
                    className={`status ${device.deviceStatus.toLowerCase()}`}
                  >
                    {device.deviceStatus}
                  </span>
                </td>
                <td>
                  <span
                    className={`download-status ${device.downloadStatus.toLowerCase()}-indicator`}
                  ></span>
                  <span
                    className={`download ${device.downloadStatus.toLowerCase()}`}
                  >
                    {device.downloadStatus}
                  </span>
                </td>
                <td>{device.osVersion}</td>
                <td>
                  <Link to={`/devices/${device.serialNo}`}>
                    <button className="view-button">View</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DevicesTable;
