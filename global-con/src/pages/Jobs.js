import React, { useState, useEffect } from 'react';
import '../css/jobs.css';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [activeJob, setActiveJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'https://globalcon-server.onrender.com/api/jobs_List';

  const fetchJobs = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch job data');
      }
      const data = await response.json();
      setJobs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const toggleJobDetails = (jobId) => {
    setActiveJob(activeJob === jobId ? null : jobId);
  };

  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section id="jobs">
      <div className="jobs-banner">
        <h2>Jobs</h2>
        <button onClick={fetchJobs}>Refresh Jobs</button>
      </div>
      <div className="jobs-list">
        {jobs.map((job) => (
          <div key={job._id} className="job" onClick={() => toggleJobDetails(job._id)}>
            <img src={job.img} alt={`${job.title} Image`} />
            <h4>{job.title}</h4>
            {activeJob === job._id && (
              <div className="job-details">
                <p>{job.description}</p>
                <p><strong>Salary:</strong> {job.salary}</p>
                <p><strong>Experience:</strong> {job.experience}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Skills:</strong></p>
                <ul>
                  {job.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Jobs;
