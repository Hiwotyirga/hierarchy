import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
interface NewPosition {
    id: number;
    name: string;
    description: string;
    reportingToId: number | null; // Use reportingToId to match API response
    children?: NewPosition[];
}

const Update: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [reportingId, setReportingId] = useState<number | undefined>(undefined);
    const { positionId } = useParams<{ positionId: string }>();
    const [deletePosition, setDeletePosition] = useState<string | null>(null);
    const [updatePosition, setUpdatePosition] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const updateData: Partial<NewPosition> = {
        name: "New Name",
        description: "Updated Description",
        reportingToId: null // Set to the correct value or null
    };

    const handleUpdate = async () => {
        if (!positionId) {
            setError("Position ID is missing.");
            return;
        }

        try {
            await axios.patch(`http://localhost:9000/positions/${positionId}`, updateData);
            setUpdatePosition("Position updated successfully.");
        } catch (error) {
            setError("Failed to update the position.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setReportingId(value ? Number(value) : undefined);
    };

    return (
        <div className='register'>
            <form className='form' style={{ width: "100px", height: "10px", margin: "auto" }} onSubmit={handleUpdate}>
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
                <button type='submit'><a className='navbar-brand' href='/tree'>Update</a></button>
            </form>
        </div>
    );
};



export default Update;
