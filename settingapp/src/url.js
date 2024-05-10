
import dotenv from "dotenv"
dotenv.config();
const baseURL=process.env.baseURL

// Define the endpoint paths
const bluetoothGetStatusEndpoint = '/bluetooth/status';
const bluetoothPostStatusEndpoint = "/bluetooth/toggle";

// Construct full URLs using the base URL
export const bluetoothGetStatusURL = `${baseURL}${bluetoothGetStatusEndpoint}`;
export const bluetoothPostStatusURL = `${baseURL}${bluetoothPostStatusEndpoint}`;
