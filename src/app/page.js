import React from "react";
import JobSection from "@/components/ui/jobSection/JobSection";
import HelpDesk from "@/components/ui/helpDesk/helpDesk";
import HomePageBanner from "@/components/HomePageBanner/page";
import Categories from "@/components/Categories";

const HomePage = () => {
  return (
    <div className="p-20">
      <HomePageBanner />
      <Categories></Categories>
      {/* <JobSection /> */}
      <HelpDesk></HelpDesk>
    </div>
  );
};
export default HomePage;
