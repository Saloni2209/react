import logo from './logo.svg';
import './App.css';
import Dashboard from './Pages/dashboard';
import { Route, Routes } from 'react-router-dom';
import Manage_User from './Pages/Manage_User';
import Manage_Contact from './Pages/Manage_Contact';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
  return (

   <Routes>
    <Route path='/dashboard' element={<><Dashboard/></>}></Route>
    <Route path='/manage_user' element={<><Manage_User/></>}></Route>
    <Route path='/manage_contact' element={<><Manage_Contact/></>}></Route>
    <Route path='/signup' element={<><Signup/></>}></Route>
    <Route path='/login' element={<><Login/></>}></Route>
    
   </Routes>
    

  );
}

export default App;
