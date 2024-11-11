// src/pages/Admin.js
import React from 'react';
import '../css/admin.css';

const Admin = () => {
  return (
    <section id="admin">
        <h2>Admin Panel</h2>

        <h3>Add a Job</h3>
        <form id="add-job-form">
            <label for="job-title">Job Title:</label>
            <input type="text" id="job-title" name="job-title" required/>
            
            <label for="job-desc">Roles and Responsibilities:</label>
            <textarea id="job-desc" name="job-desc" required></textarea>
            
            <button type="submit">Add Job</button>
        </form>

        <h3>Remove a Job</h3>
        <form id="remove-job-form">
            <label for="remove-title">Job Title to Remove:</label>
            <input type="text" id="remove-title" name="remove-title" required/>
            
            <button type="submit">Remove Job</button>
        </form>
    </section>
  );
};

export default Admin;