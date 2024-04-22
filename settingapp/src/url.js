const url=process.env.base_url||"https://settingappbackend.vercel.app";
export const bluetoothGetStatus = `${url}/bluetooth/status`;
export const bluetoothPostStatus = `${process.env.base_url}/bluetooth/toggle`;
