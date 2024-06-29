import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import DevicesTable from "./pages/DevicesTable";
import DeviceDetail from "./pages/DeviceDetail";
const App = () => {
  return (
    <Router>
      <div className="device-dashboard">
        <Routes>
          <Route path="/" element={<DevicesTable />} />
          <Route path="/devices/:deviceId" element={<DeviceDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
