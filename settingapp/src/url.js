const baseURL=process.env.base_url;

// Define the endpoint paths
const bluetoothGetStatusEndpoint = "/status";
const bluetoothPostStatusEndpoint = "/bluetooth/toggle";

// Construct full URLs using the base URL
export const bluetoothGetStatusURL = `${baseURL}${bluetoothGetStatusEndpoint}`;
export const bluetoothPostStatusURL = `${baseURL}${bluetoothPostStatusEndpoint}`;
