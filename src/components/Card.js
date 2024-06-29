import "../pages/DeviceDetail.css";

export const Card = ({ device }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });

    const getDayWithSuffix = (day) => {
      if (day > 3 && day < 21) return day + "th";
      switch (day % 10) {
        case 1:
          return day + "st";
        case 2:
          return day + "nd";
        case 3:
          return day + "rd";
        default:
          return day + "th";
      }
    };

    return `${getDayWithSuffix(day)} ${month}`;
  };

  return (
    <div className="device-info">
      <div className="info-grid">
        <div className="info-item">
          <span className="label">Device Serial</span>
          <span className="value">{device.serialNo}</span>
        </div>
        <div className="info-item">
          <span className="label">Location</span>
          <span className="value">{device.theatreName}</span>
        </div>
        <div className="info-item">
          <span className="label">City</span>
          <span className="value">
            {device.location.city}, {device.location.state},{" "}
            {device.location.country}
          </span>
        </div>
        <div className="info-item">
          <span className="label">ISP Payment Responsibility</span>
          <span className="value">{device.ispPaymentResponsibility}</span>
        </div>
        <div className="info-item">
          <span className="label">Bandwidth</span>
          <span className="value">{device.bandwidth}</span>
        </div>
        <div className="info-item">
          <span className="label">Average Bandwidth</span>
          <span className="value">{device.avgBandwidth}</span>
        </div>
        <div className="info-item">
          <span className="label">Plan Start Date</span>
          <span className="value">{formatDate(device.planStartDate)}</span>
        </div>
        <div className="info-item">
          <span className="label">Billing Cycle</span>
          <span className="value">{device.billingCycle}</span>
        </div>
        <div className="info-item">
          <span className="label">Download Status</span>
          <span className="value">{device.downloadStatus}</span>
        </div>
        <div className="info-item">
          <span className="label">OS Version</span>
          <span className="value">{device.osVersion}</span>
        </div>
        <div className="info-item">
          <span className="label">Storage Available</span>
          <span className="value">{device.storage}</span>
        </div>
      </div>
    </div>
  );
};
