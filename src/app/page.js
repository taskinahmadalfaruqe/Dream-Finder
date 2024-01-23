import React from "react";
import JobSection from "@/components/ui/jobSection/JobSection";
import HelpDesk from "@/components/ui/helpDesk/helpDesk";
import HomePageBanner from "@/components/ui/HomePageBanner/page";
<<<<<<< HEAD
import Categories from "@/components/Categories";
import FeedBack from "@/components/ui/FeedBack/FeedBack";
import Accordin from "@/components/ui/Accordion/Accordin";
=======
import Categories from "@/components/ui/Category/Categories";

>>>>>>> 3974aa58727c96bd88731d01f902830eb30bad81

const HomePage = () => {
  return (
    <div>
      <HomePageBanner />
      <Categories></Categories>
      <JobSection />
      <HelpDesk></HelpDesk>
      <Accordin/>
      <FeedBack></FeedBack>
    </div>
  );
};
export default HomePage;
