import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AllContacts from './pages/AllContacts';
import EditContact from './components/EditContact';
import AddContact from './components/AddContact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <div className='App'>
    <Router>
      <Navbar/>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<AllContacts/>}/>
        <Route path="/addcontact" element={<AddContact/>}/>
        <Route path="/editcontact" element={<EditContact/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
