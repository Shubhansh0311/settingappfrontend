const baseURL=process.env.base_url;

// Define the endpoint paths
const bluetoothGetStatusEndpoint = "/bluetoothGetStatus";
const bluetoothPostStatusEndpoint = "/bluetoothPostStatus";

// Construct full URLs using the base URL
export const bluetoothGetStatusURL = `${baseURL}${bluetoothGetStatusEndpoint}`;
export const bluetoothPostStatusURL = `${baseURL}${bluetoothPostStatusEndpoint}`;
