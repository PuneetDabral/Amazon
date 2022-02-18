import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Maincomp from './components/home/Maincomp';
import { Newnav } from './components/newnavbar/Newnav';

function App() {
  return (
    <>
    <Navbar />
    <Newnav />
    <Maincomp />
    <Footer />
    </>
  );
}

export default App;
