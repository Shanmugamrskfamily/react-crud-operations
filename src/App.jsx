import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AllContacts from './pages/AllContacts';
import AddContact from './components/AddContact';

function App() {

  return (
    <div className='App'>
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<AllContacts/>}/>
        <Route path="/addcontact" element={<AddContact/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
