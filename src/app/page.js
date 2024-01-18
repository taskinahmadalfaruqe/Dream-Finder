import React from "react";
import HelpDesk from "@/components/ui/helpDesk/helpDesk";
import HomePageBanner from "@/components/ui/HomePageBanner/page";
import Categories from "@/components/Categories";
import JobSection from "@/components/ui/jobSection/JobSection";

const HomePage = () => {
  return (
    <div>
      <HomePageBanner />
      <Categories></Categories>
      <JobSection /> 
      <HelpDesk></HelpDesk>
    </div>
  );
};
export default HomePage;
