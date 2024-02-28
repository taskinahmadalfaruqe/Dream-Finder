import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://dream-finder-server.vercel.app",
  baseURL: "https://dream-finder-server.vercel.app",
  // baseURL: "https://dream-finder-server.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
