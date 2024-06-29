import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

const getDevices = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/appliances`);
    // console.log("getDevice" + JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    console.error("Error fetching devices:", error);
    throw error;
  }
};

// Function to get device details by ID
const getDeviceInfoById = async (deviceId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/applianceInfo?serialNo=${deviceId}`
    );
    console.log("getDeviceInfo" + response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching device with ID ${deviceId}:`, error);
    throw error;
  }
};

export { getDevices, getDeviceInfoById };
