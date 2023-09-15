import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (token) => {
    // Decode and verify the token, then set the user state
    // Typically, you'd also store the token in a cookie or local storage for persistence
  };

  const logout = () => {
    // Clear user state and remove the token from storage
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
