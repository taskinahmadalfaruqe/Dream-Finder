import Button from '@/components/shared/Button';
import HelpDesk from '@/components/ui/helpDesk/helpDesk';
import React from 'react';



const HomePage = () => {
  return (
    <div className='p-20'>
      This Is Home Page
      <Button> Remove</Button>
      <HelpDesk></HelpDesk>
    </div>
  );
};
export default HomePage;