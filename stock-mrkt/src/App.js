import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import RegistrationForm from './components/RegistrationForm';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';
import AuthGuard   from './gaurds/AuthGaurd';

function App() {
  return (
<AuthProvider>
    <Router>
        <Header/>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/login" element={<Login/>}/>
        <Route element={<AuthGuard />}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
        <Route path="/signup" element={<RegistrationForm/>}/>
      </Routes>
      <Footer/>
    </Router>
    </AuthProvider>
  );
}

export default App;
