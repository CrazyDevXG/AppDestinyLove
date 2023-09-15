import { useUser } from './UserContext';
import { useRouter } from 'next/router';

export function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const { user } = useUser();
    const router = useRouter();

    if (!user) {
      // User is not authenticated, redirect to the login page
      router.push('/login');
      return null;
    }

    // User is authenticated, render the component
    return <Component {...props} />;
  };
}
