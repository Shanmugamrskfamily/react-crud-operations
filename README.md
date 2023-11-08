# React CRUD Operations

This project demonstrates a simple CRUD (Create, Read, Update, Delete) application built with React.js and a JSON Server for backend operations. The application allows managing contacts with functionalities to add, view, edit, and delete contacts.

<img src='/public/images/screenshot.png'/>

## Features

- **List all contacts:** View a list of contacts fetched from the JSON Server.
- **Add contact:** Add a new contact with a name, email, phone, and address fields.
- **Edit contact:** Modify the contact details of a specific user.
- **Delete contact:** Remove a contact from the list.

## Setup Instructions

1. **Installation**
   ```bash
   npm install
   ```
2. **Start JSON Server**
   ```bash
   json-server --watch db.json --port 8080
   ```
3. **Start React App**
   ```bash
   npm start
   ```

## Deployment

The application can be deployed using a service like Netlify or GitHub Pages.

## Dependencies

- React.js
- React Router
- Axios
- Bootstrap
