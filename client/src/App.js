import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Maincomp from './components/home/Maincomp';
import { Newnav } from './components/newnavbar/Newnav';

import { Routes,Route } from 'react-router-dom';
import Sign_in from './components/signup_sign/Sign_in';
import SignUp from './components/signup_sign/SignUp';

function App() {
  return (
    <>
    <Navbar />
    <Newnav />
    <Routes>
    <Route path="/" element={<Maincomp />} />
    <Route path="/login" element={<Sign_in />} />
    <Route path="/register" element={<SignUp />} />
    </Routes>
 
    <Footer />
    </>
  );
}

export default App;
