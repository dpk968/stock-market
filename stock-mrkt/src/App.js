import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import RegistrationForm from './components/RegistrationForm';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer'
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (

    <Router>
        <Header/>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<RegistrationForm/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
