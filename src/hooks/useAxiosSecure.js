"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import useContextData from "./useContextData";

const axiosSecure = axios.create({
  // baseURL: "https://dream-finder-server.vercel.app",
  baseURL: "https://dream-finder-server.vercel.app",
  // baseURL: "https://dream-finder-server.vercel.app",
});
const useAxiosSecure = () => {
  const router = useRouter();
  const { logOut } = useContextData();

  // request interceptors for add authorization header
  axiosSecure.interceptors.request.use(
    (config) => {
      // get token
      const token = localStorage.getItem("access-token");
      console.log("INTERCEPTORS WORKING");
      //   set token
      config.headers.authorization = `Bearer ${token}`;
      //   send token in server side
      return config;
    },
    // if error, then run this code block
    (error) => {
      return Promise.reject(error);
    }
  );

  // response

  axiosSecure.interceptors.response.use(
    (response) => {
      // return the response
      return response;
    },
    // if error, then run this code block
    async (error) => {
      // get status code form error message
      const status = error?.response?.status;
      console.log("STATUS CODE ERROR IN THE INTERCEPTORS==>", status);
      // if status code 401 or 403 then log out the current user and navigate to login page.
      if (status === 401 || status === 403) {
        await logOut();
        router.push("/auth/signin");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
