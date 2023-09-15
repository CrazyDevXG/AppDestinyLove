// components/LogoutButton.js
import { useRouter } from 'next/router';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('authToken');

    // Redirect the user to the login page
    router.push('/sign_in');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}
