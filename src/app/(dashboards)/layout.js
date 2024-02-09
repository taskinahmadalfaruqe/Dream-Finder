"use client"
import AdminDashboard from "@/components/ui/AdminDashboard/AdminDashboard";
import UserDashboard from "@/components/ui/UserDashboard/UserDashboard";
import useContextData from "@/hooks/useContextData";


const DashboardLayout = ({ children }) => {
  const { user } = useContextData();
  
  if (!user) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <div className="container grid grid-cols-12 dark:bg-slate-900">
      <div className="col-span-12 lg:col-span-3">
        {
          user?.email === "taskinahmadalfaruqe@gmail.com" ? <AdminDashboard></AdminDashboard> : <UserDashboard></UserDashboard>
        }

      </div>
      <div className="md:p-10 col-span-12 lg:col-span-9 my-20">{children}</div>
    </div>
  );
};

export default DashboardLayout;
