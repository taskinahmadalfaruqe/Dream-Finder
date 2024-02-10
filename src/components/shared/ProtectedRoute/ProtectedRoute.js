"use client"

import { useRouter } from 'next/navigation';
import useContextData from '@/hooks/useContextData';

const ProtectedRoute = ({ children }) => {
  const { user, Loading } = useContextData();
  const router = useRouter();

  // If authentication is still loading, you can show a loading indicator
  if (Loading) {
    return <div className="min-h-[70vh] flex items-center justify-center">
      <span className="loader"></span>
    </div>;
  }

  // Redirect to login if user is not authenticated
  if (!user) {
    router.replace('/auth/signin');
    return null;
  }

  // Render the protected content if the user is authenticated
  return <>{children}</>;
};

export default ProtectedRoute;
