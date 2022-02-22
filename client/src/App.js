import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Maincomp from './components/home/Maincomp';
import { Newnav } from './components/newnavbar/Newnav';

import { Routes,Route } from 'react-router-dom';
import Signin from './components/signup_sign/Sign_in';
import SignUp from './components/signup_sign/SignUp';
import Cart from './components/cart/Cart';
import BuyNow from './components/buynow/BuyNow';

function App() {
  return (
    <>
    <Navbar />
    <Newnav />
    <Routes>
    <Route path="/" element={<Maincomp />} />
    <Route path="/login" element={<Signin />} />
    <Route path="/register" element={<SignUp />} />
    <Route path="/getproductsone/:id" element={<Cart />} />
    <Route path="/buynow" element={<BuyNow />} />
    </Routes>
 
    <Footer />
    </>
  );
}

export default App;
