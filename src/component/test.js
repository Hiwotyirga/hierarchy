import React, { useState } from 'react';
import axios from 'axios';

const RegisterPositionForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [reportingToId, setReportingToId] = useState<number | undefined>(undefined);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newPosition = {
      name,
      description,
      reportingToId,
    };

    try {
      const response = await axios.post('/api/positions/register', newPosition);
      console.log('Position registered:', response.data);
    } catch (error) {
      console.error('Error registering position:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Reporting To ID (optional):</label>
        <input type="number" value={reportingToId || ''} onChange={(e) => setReportingToId(Number(e.target.value))} />
      </div>
      <button type="submit">Register Position</button>
    </form>
  );
};

export default RegisterPositionForm;
