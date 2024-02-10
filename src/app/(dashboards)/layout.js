import UserDashboard from "@/components/ui/UserDashboard/UserDashboard";

const DashboardLayout = ({ children }) => {
  return (
    <div className="container grid grid-cols-12 dark:bg-slate-900">
      <div className="col-span-12 lg:col-span-3">
        <UserDashboard></UserDashboard>
        </div>
        <div className=" col-span-12 lg:col-span-9 min-h-lvh ">{children}</div>
    </div>
  );
};

export default DashboardLayout;
