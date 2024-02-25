/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import AdminCharts from "@/components/ui/AdminCharts/AdminCharts";
import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";

const adminPage = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="mx-auto">
      <h2 className="font-bold text-2xl text-primaryColor p-5">
        Hey <span className="font-bold text-4xl">{user?.displayName}</span> Welcome back
        to Admin Dashboard
      </h2>
      <AdminCharts />
    </div>
  );
};

export default adminPage;
