import React, { useState } from 'react';
import '../css/admin.css';

const Admin = () => {
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    img: null,
    skills: '',
    location: '',
    experience: '',
    salary: '',
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormState({ ...formState, img: e.target.files[0] });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setMessage('');  // Clear previous message

    try {
      const formData = new FormData();
      formData.append('title', formState.title);
      formData.append('description', formState.description);
      formData.append('location', formState.location);
      formData.append('experience', formState.experience);
      formData.append('salary', formState.salary);
      formData.append('skills', JSON.stringify(formState.skills.split(',').map(skill => skill.trim())));
      if (formState.img) formData.append('img', formState.img);

      const response = await fetch('https://globalcon-server.onrender.com/api/jobs_List', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message);

      setMessage('Job added successfully!');
      setFormState({
        title: '',
        description: '',
        img: null,
        skills: '',
        location: '',
        experience: '',
        salary: '',
      });
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <section id="admin">
      <h2>Admin Panel</h2>

      <h3>Add a Job</h3>
      <form id="add-job-form" onSubmit={submitForm}>
        <label htmlFor="job-title">Job Title:</label>
        <input type="text" id="job-title" name="title" required value={formState.title} onChange={handleInputChange} />

        <label htmlFor="job-desc">Roles and Responsibilities:</label>
        <textarea id="job-desc" name="description" required value={formState.description} onChange={handleInputChange}></textarea>

        <label htmlFor="job-img">Image Filename:</label>
        <input type="file" id="job-img" name="img" onChange={handleFileChange} />

        <label htmlFor="job-skills">Skills (comma-separated):</label>
        <input type="text" id="job-skills" name="skills" required value={formState.skills} onChange={handleInputChange} />

        <label htmlFor="job-location">Location:</label>
        <input type="text" id="job-location" name="location" required value={formState.location} onChange={handleInputChange} />

        <label htmlFor="job-exp">Experience:</label>
        <input type="text" id="job-exp" name="experience" required value={formState.experience} onChange={handleInputChange} />

        <label htmlFor="job-salary">Salary:</label>
        <input type="text" id="job-salary" name="salary" required value={formState.salary} onChange={handleInputChange} />

        <button type="submit">Add Job</button>
      </form>

      {message && <p>{message}</p>}
    </section>
  );
};

export default Admin;
