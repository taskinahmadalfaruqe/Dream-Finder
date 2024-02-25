"use client";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useContextData from "./useContextData";

const useAdmin = () => {
  // hooks
  const axiosSecure = useAxiosSecure();
  const { user, Loading } = useContextData();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    // run this code block when loading are false
    enabled: !Loading,
    queryFn: async () => {
      if (user) {
        const res = await axiosSecure.get(`/user/admin-check/${user?.email}`);
        return res.data?.admin;
      }
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
