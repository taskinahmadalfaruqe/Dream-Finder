import Footer from '@/components/shared/Footer';
import NextNavbar from '@/components/shared/NextNav';
import React from 'react';
const PublicLayout = async ({children}) => {
 
    return (
        <>
            <NextNavbar />
            {children}
            <Footer></Footer>
        </>
    );
};
export default PublicLayout;
