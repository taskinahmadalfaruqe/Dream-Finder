import AdminDashboard from "@/components/ui/AdminDashboard/AdminDashboard";
import UserDashboard from "@/components/ui/UserDashboard/UserDashboard";

const DashboardLayout = ({ children }) => {
  return (
    <div className="container grid grid-cols-12 dark:bg-slate-900">
      <div className="col-span-12 lg:col-span-3">
        {/* <UserDashboard></UserDashboard> */}
        <AdminDashboard></AdminDashboard>
        </div>
        <div className="md:p-10 col-span-12 lg:col-span-9 my-20">{children}</div>
    </div>
  );
};

export default DashboardLayout;
