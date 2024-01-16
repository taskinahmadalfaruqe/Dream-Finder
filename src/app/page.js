import HomePageBanner from '@/components/HomePageBanner/page';
import { Button } from '@nextui-org/react';
import React from 'react';
// import banner from "../assets/banner/homePageBanner.jpg"


const HomePage = () => {
  return (
    <div>
     <HomePageBanner />
      This Is Home Page
      <Button> Remove</Button>
    </div>
  );
};
export default HomePage;