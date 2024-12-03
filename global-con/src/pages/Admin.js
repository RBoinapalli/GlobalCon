import React, { useState } from 'react';
import '../css/admin.css';

const Admin = () => {
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    skills: '',
    location: '',
    experience: '',
    salary: '',
  });
  const [editingJobId, setEditingJobId] = useState(null);
  const [message, setMessage] = useState('');

  const API_URL = 'https://globalcon-server.onrender.com/api/jobs_List';

  const fetchJobs = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const method = editingJobId ? 'PUT' : 'POST';
      const url = editingJobId ? `${API_URL}/${editingJobId}` : API_URL;

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to save job.');

      fetchJobs();
      setFormData({ title: '', description: '', skills: '', location: '', experience: '', salary: '' });
      setEditingJobId(null);
      setMessage('Job successfully saved!');
    } catch (error) {
      console.error('Error saving job:', error);
      setMessage('Error saving job.');
    }
  };

  const handleEdit = (job) => {
    setEditingJobId(job.id);
    setFormData(job);
  };

  const handleDelete = async (jobId) => {
    if (!window.confirm('Are you sure you want to delete this job?')) return;

    try {
      const response = await fetch(`${API_URL}/${jobId}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete job.');

      fetchJobs();
      setMessage('Job successfully deleted.');
    } catch (error) {
      console.error('Error deleting job:', error);
      setMessage('Error deleting job.');
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Title" />
        <input type="text" name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" />
        <input type="text" name="skills" value={formData.skills} onChange={handleInputChange} placeholder="Skills" />
        <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Location" />
        <input type="text" name="experience" value={formData.experience} onChange={handleInputChange} placeholder="Experience" />
        <input type="text" name="salary" value={formData.salary} onChange={handleInputChange} placeholder="Salary" />
        <button type="submit">{editingJobId ? 'Update Job' : 'Add Job'}</button>
      </form>
      {message && <p>{message}</p>}
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <button onClick={() => handleEdit(job)}>Edit</button>
            <button onClick={() => handleDelete(job.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;