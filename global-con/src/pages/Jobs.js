// src/pages/Jobs.js
import React, { useState } from 'react';
import '../css/jobs.css';



const Jobs = () => {
  const [activeJob, setActiveJob] = useState(null);

  const toggleJobDetails = (jobId) => {
    setActiveJob(activeJob === jobId ? null : jobId);
  };

  const jobs = [
    {
      id: 'network-engineer',
      title: 'Network Engineer',
      image: 'network-engineer.jpg',
      description: 'Expertise in next-generation firewalls (Palo Alto, Zscaler), AWS, Azure. Strong communication in English required.',
      salary: '$90,000 - $110,000',
      experience: '5+ years',
      location: 'Remote or On-site',
      responsibilities: [
        'Deploy and tune firewall policies using Algosec.',
        'Perform root cause analysis for security incidents.',
        'Maintain L2 network security in Cisco TAC operations.',
        'Collaborate with cross-functional teams.'
      ]
    },
    {
      id: 'java-developer',
      title: 'Java Full Stack Developer',
      image: 'images/java-fullStack-dev.png',
      description: 'Design microservices architecture and build scalable applications. Expertise in Java, Spring, cloud technologies.',
      salary: '$85,000 - $105,000',
      experience: '3+ years',
      location: 'Hybrid',
      responsibilities: [
        'Analyze functional requirements and design solutions.',
        'Write clean, maintainable code in Java and Spring.',
        'Collaborate with front-end developers using React or Angular.',
        'Optimize application components for maximum performance.'
      ]
    },
    {
      id: 'flutter-developer',
      title: 'Flutter Developer',
      image: 'images/flutter-dev.png',
      description: 'Design and deploy applications using Flutter with a focus on payment integration. Experience with CI/CD processes.',
      salary: '$75,000 - $95,000',
      experience: '2+ years',
      location: 'Remote',
      responsibilities: [
        'Develop cross-platform applications with Flutter.',
        'Integrate payment systems into mobile applications.',
        'Participate in code reviews and quality assurance.',
        'Work with product leads to define user requirements.'
      ]
    },
    {
      id: 'data-analyst',
      title: 'Data Analyst',
      image: 'images/data-analyst.jpg',
      description: 'Analyze data to drive business decisions. Proficiency in Python, SQL, and data visualization required.',
      salary: '$70,000 - $90,000',
      experience: '4+ years',
      location: 'On-site',
      responsibilities: [
        'Perform data analysis and statistical modeling.',
        'Create data visualizations to communicate findings.',
        'Collaborate with cross-functional teams.',
        'Mentor junior analysts on best practices.'
      ]
    },
    {
      id: 'full-stack',
      title: 'Full Stack Developer',
      image: 'images/full-stack-dev.jpg',
      description: 'Develop scalable web applications. Knowledge of back-end languages and front-end technologies is required.',
      salary: '$80,000 - $100,000',
      experience: '3+ years',
      location: 'Hybrid',
      responsibilities: [
        'Develop and maintain web applications.',
        'Collaborate with front-end and back-end teams.',
        'Optimize applications for maximum speed.',
        'Troubleshoot, debug, and upgrade existing systems.'
      ]
    },
    {
      id: 'database-developer',
      title: 'Database Developer',
      image: 'images/database-dev.jpg',
      description: 'Design and optimize database systems. Strong SQL skills and experience with RDBMS required.',
      salary: '$75,000 - $95,000',
      experience: '3+ years',
      location: 'Remote',
      responsibilities: [
        'Design complex queries to optimize database performance.',
        'Implement data models and maintain RDBMS.',
        'Ensure data integrity and security.',
        'Work with other departments to define data needs.'
      ]
    },
    {
      id: 'cyber-security',
      title: 'Cyber Security',
      image: 'images/cubersecurity.png',
      description: 'Implement security standards and ensure data protection. Knowledge of IAM services and ISO 27001 is required.',
      salary: '$85,000 - $110,000',
      experience: '5+ years',
      location: 'On-site',
      responsibilities: [
        'Identify potential security threats.',
        'Implement IAM services and data protection protocols.',
        'Conduct security audits and monitor network traffic.',
        'Collaborate with IT teams to ensure compliance.'
      ]
    },
    {
      id: 'android-developer',
      title: 'Android Developer',
      image: 'images/android-dev.png',
      description: 'Design and develop Android applications. Knowledge of payment integration, RDBMS, and third-party APIs is required.',
      salary: '$70,000 - $90,000',
      experience: '3+ years',
      location: 'Remote',
      responsibilities: [
        'Develop and maintain Android applications.',
        'Integrate third-party libraries and payment systems.',
        'Collaborate with design and product teams.',
        'Continuously improve application performance.'
      ]
    }
  ];

  return (
    <section id="jobs">
      <div className="jobs-banner">
        <h2>Jobs</h2>
      </div>
      <div className="jobs-list">
        {jobs.map((job) => (
          <div key={job.id} className="job" onClick={() => toggleJobDetails(job.id)}>
            <img src={job.image} alt={`${job.title} Image`} />
            <h4>{job.title}</h4>
            {activeJob === job.id && (
              <div className="job-details">
                <p>{job.description}</p>
                <p><strong>Salary:</strong> {job.salary}</p>
                <p><strong>Experience:</strong> {job.experience}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Responsibilities:</strong></p>
                <ul>
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
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
