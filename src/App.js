import logo from './logo.svg';
import './App.css';
import{Route,Routes} from 'react-router-dom'
import Header from './components/Header';
import Index from './pages/Index';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Available_cars from './pages/Available_cars';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
   
    <Routes>
      <Route path="/" element = {<><Header/><Index/><Footer/></>}></Route>
      <Route path="/about" element = { <><Header/><About/><Footer/></>}></Route>
      <Route path='/services' element = { <><Header/><Services/><Footer/></>}></Route>
      <Route path='/available_cars' element = {<><Header/><Available_cars/><Footer/></>}></Route>
      <Route path='/contact' element = {<><Header/><Contact/><Footer/></>}></Route>
   <Route path='/login' element={<><Header/><Login/></>}></Route>
   <Route path='/signup' element={<><Signup/></>}></Route>
    </Routes>
   
  );
}

export default App;
