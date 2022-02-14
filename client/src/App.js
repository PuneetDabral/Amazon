import './App.css';
import Navbar from './components/header/Navbar';
import Maincomp from './components/home/Maincomp';
import { Newnav } from './components/newnavbar/Newnav';

function App() {
  return (
    <>
    <Navbar />
    <Newnav />
    <Maincomp />
    </>
  );
}

export default App;
