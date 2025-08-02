import React, { useEffect, useState } from 'react';
import './admin.css';

const Admin = () => {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`${URL}/api/read`);
      if (!response.ok) throw new Error('Failed to fetch form data');
      
      const data = await response.json();
      setFormData(data.data); 

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);


  return (
	<section id="admin">
	  <div className="admin container">
		<h1 className="section-title">Submitted Forms</h1>
		{loading && <p>Loading...</p>}
		{error && <p style={{ color: 'red' }}>{error}</p>}
		<table>
		  <thead>
			<tr>
			  <th>Name</th>
			  <th>Email</th>
			  <th>Message</th>
			</tr>
		  </thead>
		  <tbody>
			{formData.length === 0 && !loading ? (
			  <tr><td colSpan="3">No submissions found.</td></tr>
			) : (
			  formData.map((item, idx) => (
				<tr key={idx}>
				  <td>{item.name}</td>
				  <td>{item.email}</td>
				  <td>{item.message}</td>
				</tr>
			  ))
			)}
		  </tbody>
		</table>
	  </div>
	</section>
  );
};

export default Admin;
  
