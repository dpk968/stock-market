import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import RegistrationForm from './components/RegistrationForm';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer'
import Dashboard from './components/Dashboard';

function App() {
  return (

    <Router>
        <Header/>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<RegistrationForm/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
