"use client"
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import AdminCharts from "@/components/ui/AdminCharts/AdminCharts";

const adminPage = () => {
  return (
    <div className="mx-auto">
      <h2 className="font-bold text-3xl text-primaryColor">Hey Taskin Welcome back to Admin Dashboard</h2>
      <AdminCharts />
    </div>
  );
};

export default adminPage;