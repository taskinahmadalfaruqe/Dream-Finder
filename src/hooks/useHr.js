"use client";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useContextData from "./useContextData";

const useHr = () => {
  // hooks
  const axiosSecure = useAxiosSecure();
  const { user, Loading } = useContextData();
  const { data: isHr, isLoading: isHrLoading } = useQuery({
    queryKey: [user?.email, "isHr"],
    // run this code block when loading are false
    enabled: !Loading,
    queryFn: async () => {
      if (user) {
        const res = await axiosSecure.get(`/user/hr-check/${user?.email}`);
        return res.data?.hr;
      }
    },
  });
  // console.log("useHr pass >>>");

  return [isHr, isHrLoading];
};

export default useHr;
