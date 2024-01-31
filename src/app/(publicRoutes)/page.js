import Accordin from "@/components/ui/Accordion/Accordin";
import Categories from "@/components/ui/Category/Categories";
import FeedBack from "@/components/ui/FeedBack/FeedBack";
import HomePageBanner from "@/components/ui/HomePageBanner/page";
import UpcomingEventModal from "@/components/ui/UpcomingEventModal/UpcomingEventModal";
import HelpDesk from "@/components/ui/helpDesk/helpDesk";
import JobSection from "@/components/ui/jobSection/JobSection";
import React from "react";

 
export const metadata= {
  title: 'Dream Finder ',
};
const HomePage = () => {
  return (
    <div>
      <HomePageBanner />
      <Categories></Categories>
      <JobSection />
      <HelpDesk></HelpDesk>
      <UpcomingEventModal />
      <Accordin/>
      <FeedBack></FeedBack>
    </div>
  );
};
export default HomePage;