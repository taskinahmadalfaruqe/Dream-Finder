
import React from 'react';
import FeedBackForm from './../../../../components/ui/FeedbackForm/FeedBackForm';

const FeedBackPage = () => {
    return (
        <div className="bg-lightWhiteColor dark:bg-[#000000] min-h-[90vh]">
            <h2 className='text-3xl font-bold text-center text-primaryColor pt-16 pb-10'>FeedBack</h2>
            <FeedBackForm></FeedBackForm>
        </div>
    );
};

export default FeedBackPage;