import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: "https://dream-finder-server.vercel.app",
  baseURL: "https://dream-finder-server.vercel.app",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
