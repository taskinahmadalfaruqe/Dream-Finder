import UserDashboard from "@/components/ui/UserDashboard/UserDashboard";

const DashboardLayout = ({ children }) => {
  return (
    <div className=" ">
      <div className="">
        <UserDashboard></UserDashboard>
        <div className="p-10 ">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
