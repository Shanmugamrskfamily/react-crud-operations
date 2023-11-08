import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { toast } from 'react-toastify';

const AddContact = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      id: '',
      name: '',
      email: '',
      phone: '',
      address: {
        suite: '',
        street: '',
        city: '',
        zipcode: '',
      },
    });
  
    const getNextId = (data) => {
      const ids = data.map(entry => entry.id);
      const maxId = Math.max(...ids);
  
      return maxId + 1; // Generate the next unique ID
    };
  
    useEffect(() => {
      axios.get('/UsersData.json')
        .then(response => {
          const newId = getNextId(response.data);
          setFormData({ ...formData, id: newId });
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, [formData]); // Run when formData changes to update ID
  
    const handleChange = (e) => {
      if (e.target.name.startsWith('address.')) {
        const addressField = e.target.name.split('.')[1];
        setFormData({
          ...formData,
          address: {
            ...formData.address,
            [addressField]: e.target.value,
          },
        });
      } else {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/UsersData.json', [formData]) 
      .then(() => {
        toast.success('Contact Added Successfully!')
        navigate('/');
      })
      .catch(error => {
        toast.error(`Error Adding New Contact: ${error}`);
        console.error('Error adding contact:', error);
      });
  };

  return (
    <div className="container">
      <h1>Add Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="text" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <h5 className='fw-bold mb-2'>Address</h5>
        <div className="mb-3">
          <label htmlFor="address.suite" className="form-label">Suite</label>
          <input type="text" className="form-control" id="address.suite" name="address.suite" value={formData.address.suite} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="address.street" className="form-label">Street</label>
          <input type="text" className="form-control" id="address.street" name="address.street" value={formData.address.street} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="address.city" className="form-label">City</label>
          <input type="text" className="form-control" id="address.city" name="address.city" value={formData.address.city} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="address.zipcode" className="form-label">Zip Code</label>
          <input type="text" className="form-control" id="address.zipcode" name="address.zipcode" value={formData.address.zipcode} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Add Contact</button>
      </form>
    </div>
  );
};

export default AddContact;
