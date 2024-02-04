import UserDashboard from "@/components/ui/UserDashboard/UserDashboard";

const DashboardLayout = ({ children }) => {
  return (
    <div className="container grid grid-cols-12">
      <div className="col-span-12 lg:col-span-3">
        <UserDashboard></UserDashboard>
        </div>
        <div className="md:p-10 col-span-12 lg:col-span-9 my-20">{children}</div>
    </div>
  );
};

export default DashboardLayout;
