import React from "react";
import JobSection from "@/components/ui/jobSection/JobSection";
import HelpDesk from "@/components/ui/helpDesk/helpDesk";
import HomePageBanner from "@/components/ui/HomePageBanner/page";
import Categories from "@/components/Categories";
import UpcomingEventModal from "@/components/ui/UpcomingEventModal/UpcomingEventModal";

const HomePage = () => {
  return (
    <div>
      <HomePageBanner />
      <Categories></Categories>
      <JobSection />
      <HelpDesk></HelpDesk>
      <UpcomingEventModal />
    </div>
  );
};
export default HomePage;
