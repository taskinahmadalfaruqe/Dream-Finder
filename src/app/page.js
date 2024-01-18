import React from "react";
// import JobSection from "@/components/ui/jobSection/JobSection";
import HelpDesk from "@/components/ui/helpDesk/helpDesk";
import HomePageBanner from "@/components/ui/HomePageBanner/page";
import Categories from "@/components/Categories";

const HomePage = () => {
  return (
    <div className="">
      <HomePageBanner />
      <Categories></Categories>
      {/* <JobSection /> */}
      <HelpDesk></HelpDesk>
    </div>
  );
};
export default HomePage;
