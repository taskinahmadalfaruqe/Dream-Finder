// import Footer from "@/components/shared/Footer";
// import NextNavbar from "@/components/shared/NextNav";
import UserDashboard from "@/components/ui/UserDashboard/UserDashboard";

const DashboardLayout = ({ children }) => {
    return (
        <div className=" ">
            {/* <NextNavbar></NextNavbar> */}
            <div  className="">
            <UserDashboard></UserDashboard>
            <div className="p-10 ">
            { children }
            </div>
            </div>
            {/* <Footer></Footer> */}
            </div>
        
    );
};

export default DashboardLayout;