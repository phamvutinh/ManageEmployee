import axios from "axios";
import queryString from "query-string";
import constants from "utils/constants";

const axiosClient = axios.create({
  baseURL: `${constants.API_LINK}${constants.SHEET_ID}/values:batchGet`,
  paramsSerializer: (params) => {
    return queryString.stringify(params);
  },
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axios.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    console.log("Error with Axios");
    throw error;
  }
);
export default axiosClient;
