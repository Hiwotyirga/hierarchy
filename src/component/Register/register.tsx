import axios from 'axios';
import React, { useState } from 'react';

const Register: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [reportingId, setReportingId] = useState<number | undefined>(undefined);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Prepare the data to send
        const newPosition = {
            name,
            description,
            reportingId: reportingId !== undefined ? reportingId : null
        };

        try {
            // Make sure to await the axios call
            const response = await axios.post("http://localhost:9000/positions", newPosition);
            console.log(response.data);
        } catch (error) {
            console.error("Register error:", error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setReportingId(value ? Number(value) : undefined);
    };

    return (
        <div className='register'>
            <form className='form' style={{ width: "100px", height: "10px", margin: "auto" }} onSubmit={handleSubmit}>
                <div className='style' style={{ justifyContent: "center", textAlign: "center", marginTop: "50px", gap: "40px", display: "block" }}>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor="name">Full Name</label>
                        <input type='text' id='name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor="description">Description</label>
                        <input type='text' id='description' className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor="reportingto">Reporting To</label>
                        <input type="number" id='reportingto' className='form-control' value={reportingId ?? ''} onChange={handleChange} />
                    </div>
                </div>
                <button type='submit'><a className='navbar-brand' href='/tree'>Register</a></button>
            </form>
        </div>
    );
};



export default Register;
