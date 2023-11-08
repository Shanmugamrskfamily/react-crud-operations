import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const AllContacts = () => {
  const [contacts, setContacts] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    axios.get('/UsersData.json')
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        // Handle error, e.g., setContacts([]) or show an error message
        console.error('Error fetching contacts:', error);
      });
  }, []);

  const handleEdit = (id) => {
    // Handle edit functionality for a contact with a particular ID
    console.log('Edit contact with ID:', id);
    // Implement the edit functionality as needed
  };

  const handleDelete = (id) => {
    // Handle delete functionality for a contact with a particular ID
    console.log('Delete contact with ID:', id);
    // Implement the delete functionality as needed
  };

  const handleAdd=()=>{
    navigate('/addcontact');
  }

  return (
    <div className="container">
    <div className='mb-4'>
      <h1 className='text-center'>All Contacts</h1>
      <div className='text-end'>
      <button className='btn btn-success' onClick={handleAdd}>Add Contact</button>
      </div>
      </div>
      <div className="row">
        {contacts.map(contact => (
          <div className="col-md-4" key={contact.id}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title"><span className='fw-bold'>Name:</span>{contact.name}</h5>
                <p className="card-text"><span className='fw-bold'>Email:</span> {contact.email}</p>
                <p className="card-text"><span className='fw-bold'>Phone No:</span> {contact.phone}</p>
                <p className="card-text"> <span className='fw-bold'>Address:</span> {contact.address.suite},{contact.address.street}, {contact.address.city}, {contact.address.zipcode}</p>
                <div className='text-center'>
                  <button
                    type="button"
                    className="btn btn-primary me-2"
                    onClick={() => handleEdit(contact.id)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(contact.id)}
                  >
                    Delete
                  </button>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllContacts;