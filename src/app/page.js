import Button from '@/components/shared/Button';
import HelpDesk from '@/components/ui/helpDesk/helpDesk';
import HomePageBanner from '@/components/HomePageBanner/page';
import React from 'react';
import Categories from '@/components/Categories';





const HomePage = () => {
  return (
    <div className='p-20'>
      <HomePageBanner />
      <Categories></Categories>
      <HelpDesk></HelpDesk>
    </div>
  )
}
export default HomePage;