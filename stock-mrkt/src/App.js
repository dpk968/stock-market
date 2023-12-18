import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import RegistrationForm from './components/RegistrationForm';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (

    <Router>
        <Header/>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<RegistrationForm/>}/>
      </Routes>
    </Router>


    // <Routes>
    //   <div>
    //     <Header></Header>
    //     <Route path="/" exact component={LandingPage} />
    //     <Route path="/about" component={AboutUs} />
    //     <Route path="/contact" component={RegistrationForm} />
    //   </div>
    // </Routes>
  );
}

export default App;
