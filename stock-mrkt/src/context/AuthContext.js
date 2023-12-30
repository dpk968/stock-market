import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const [registeredUsers, setRegisteredUsers] = useState([]);

  const registerUser = (userData) => {

    setRegisteredUsers((prevUsers) => [...prevUsers, userData]);
    console.log('User registered successfully:', userData);
  };

  const userLogin = () => {
    setAuthenticated(true);
    console.log('User is logged successfully'); 
  };

  const logout = () => {
    setAuthenticated(false);
    console.log('User is logged out.');
  };

  return (
    <AuthContext.Provider value={{ authenticated, userLogin, logout, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};