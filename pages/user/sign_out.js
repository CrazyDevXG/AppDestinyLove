import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import LogoutButton from '@/pages/api/authen/logout';

export default function SignOut() {

      const router = useRouter();
      
      useEffect(() => {
        const isAuthenticated =  true;

        if (!isAuthenticated) {
          router.push('/sign_in');
        }
      }, []);


    return (
      <>
      <div>
        <Head>
          <title>Dashboard</title>
        </Head>
        <h1>Dashboard</h1>
        {/* Add dashboard content here */}
        <LogoutButton />
    </div>

               
        </>  
    )
}
 