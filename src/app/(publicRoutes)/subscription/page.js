
import Subscribe from '@/components/ui/Subscribe/Subscribe';
import React from 'react';

export const metadata= {
    title: 'Dream Finder | Subscription',
  };
const SubscribePage = () => {
    return (
        <div className='h-screen-full w-full py-20'>
            <h2 className='container text-center text-4xl font-bold text-lightDarkColor dark:text-white'>For More Facilities Please <span className='text-primaryColor text-5xl'>Subscribe </span> To Us!</h2>
            <Subscribe></Subscribe>
        </div>
    );
};

export default SubscribePage;