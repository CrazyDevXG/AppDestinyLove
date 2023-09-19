

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function CheckIndex() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = false;

    if (!isAuthenticated) {
      router.push('./main/');
    }
    else if (isAuthenticated === true) {
      router.push('./user/');
    }
  }, []);

}
