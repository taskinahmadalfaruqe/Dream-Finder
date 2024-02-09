import AdminProfile from '@/components/ui/AdminProfile/AdminProfile';
import Image from 'next/image';
import React from 'react';

const adminProfilePage = () => {
    return (
        <div>
            <h2 className="font-bold text-3xl text-primaryColor text-center mb-5">
                Welcome to Admin Profile page.
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <AdminProfile />
            </div>
        </div>
    );
};

export default adminProfilePage;