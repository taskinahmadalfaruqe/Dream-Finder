"use client"


import {  useEffect } from 'react';
import useContextData from '@/hooks/useContextData';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children }) => {
  const { user, setLoading } = useContextData();
  const router = useRouter();

  useEffect(() => {

    // Check if user is not authenticated
    if (!user) {

      // Redirect to login page
      router.replace('/auth/signin');
    }
    setLoading(false); 

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return user ? <>{children}</> : null;
};

export default ProtectedRoute;
