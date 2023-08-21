import React from 'react'
import { UserAuth } from "@/src/app/context/AuthContext";
import {useRouter} from 'next/navigation';
export default function AuthWrapper({ children }) {
  const { user } = UserAuth();
  const router=useRouter()
  React.useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user]);
  if (!user) {
    return null
  }
  
  return <>{children}</>;
  
  // return <h1>Fuck</h1>;
}
