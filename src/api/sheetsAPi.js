import axiosClient from "./axiosClient";
export default {
  listEmployee: (params) => {
    return axiosClient.get(null, { params });
  },
};
