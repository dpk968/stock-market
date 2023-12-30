// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [xAxis,setXAxis] = useState();
  const [yAxis,setYAxis] = useState();
  const [companyName,setCompanyName] = useState('tcs')

  const login = () => {
    setUser({ username: 'dpk' });
  };

  const logout = () => {
    setUser(null);
  };


  return (
    <AuthContext.Provider value={{ user, login, logout,setXAxis,xAxis,setYAxis,yAxis,companyName,setCompanyName}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
