import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../pages/DeviceDetail.css";
import Breadcrumb from "../components/BreadCrumb";
import { getDeviceInfoById } from "../services/DeviceApiService.js";
import { DeviceDetailHeader } from "../components/DeviceDetailHeader.js";
import { Card } from "../components/Card.js";

const DeviceDetail = () => {
  const { deviceId } = useParams();
  const [device, setDevice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDevice = async () => {
      try {
        const response = await getDeviceInfoById(deviceId);
        const deviceData = response.length ? response[0] : null;
        setDevice(deviceData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching device data:", error);
        setError(error);
        setLoading(false);
      }
    };
    fetchDevice();
  }, [deviceId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;
  if (!device) return <div>No device found</div>;

  return (
    <div className="device-detail">
      <Breadcrumb device={device} />
      <DeviceDetailHeader device={device} />
      <Card device={device} />
    </div>
  );
};

export default DeviceDetail;
