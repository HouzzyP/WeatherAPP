import axios from "axios";

export const getInfo = async (prop) => {
  try {
    const url = "https://api.weatherapi.com/v1/current.json?key=";
    const key = "4ed4fef0bd1845ceafa215017211708";
    const requestInfo = `&q=${prop}&aqi=no`;
    let data = await axios.get(url + key + requestInfo);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const getIP = async (prop) => {
  try {
    const url = "https://api.ipdata.co/?api-key=";
    const key = "68ed30b3af9c3f8537c4ffd565b551afa48b3d7657180cb89d3fef16";
    let data = await axios.get(url + key);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
