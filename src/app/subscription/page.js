
import Subscribe from '@/components/ui/Subscribe/Subscribe';
import React from 'react';


const SubscribePage = () => {
    return (
        <div className='h-screen-full w-full py-20
        bg-gradient-to-r from-emerald-500 from-10% via-sky-500 via-30% to-indigo-500 to-90%'>
            <h2 className='container text-center text-4xl font-bold'>For More Facilities Please <span className='text-pink-600 text-5xl'>Subscribe </span> To Us!</h2>
            <Subscribe></Subscribe>
        </div>
    );
};

export default SubscribePage;