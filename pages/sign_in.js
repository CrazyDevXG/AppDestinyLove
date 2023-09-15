
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { users } from '@/pages/api/authen/login'

export default function SignIn() {

    const [formData, setFormData] = useState({ username: '', password: '' });
    const router = useRouter();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Check if the entered username and password match a user in the mock database
      const user = users.find(
        (u) => u.username === formData.username && u.password === formData.password
      );
  
      if (user) {
        // Authentication successful, navigate to a protected page
        router.push('/user/');
      } else {
        // Authentication failed, display an error message
        alert('Invalid username or password');
      }
    };

    return (
      <>
              <Head>
                  <meta charset="UTF-8"/>
                  <title>Sign-in | Destiny Love</title>
                  <meta name="description" content="Join the dating site where you could meet anyone, anywhere" />
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                  <link rel="icon" href="/favicon.ico" />
                  <link rel="shortcut icon" href="assets/images/x-icon.png" type="image/x-icon"/>                
              </Head>

             <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  
    
               
        </>  
    )
}



