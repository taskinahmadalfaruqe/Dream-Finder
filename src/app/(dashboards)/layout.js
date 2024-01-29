import Footer from "@/components/shared/Footer";
import NextNavbar from "@/components/shared/NextNav";

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <NextNavbar></NextNavbar>
            { children }
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;