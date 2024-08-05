import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface NewPosition {
    id: number;
    name: string;
    description: string;
    reportingToId: number | null; // Use reportingToId to match API response
    children?: NewPosition[];
}

const Update: React.FC = () => {
    // const [name, setName] = useState<string>("");
    // const [description, setDescription] = useState<string>("");
    // const [reportingId, setReportingId] = useState<number | null>(null);
    // const { positionId } = useParams<{ positionId: string }>();
    // const [error, setError] = useState<string | null>(null);
    // const [updatePosition, setUpdatePosition] = useState<string | null>(null);

    // useEffect(() => {
    //     const fetchPosition = async () => {
    //         try {
    //             const response = await axios.get<NewPosition>(`http://localhost:9000/positions/${positionId}`);
    //             const position = response.data;
    //             setName(position.name);
    //             setDescription(position.description);
    //             setReportingId(position.reportingToId ?? null);
    //         } catch (error) {
    //             setError("Failed to fetch position details.");
    //         }
    //     };

    //     fetchPosition();
    // }, [positionId]);

    // const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();

    //     if (!positionId) {
    //         setError("Position ID is missing.");
    //         return;
    //     }

    //     const updateData: Partial<NewPosition> = {
    //         name,
    //         description,
    //         reportingToId: reportingId ?? null
    //     };

    //     try {
    //         await axios.patch(`http://localhost:9000/positions/${positionId}`, updateData);
    //         setUpdatePosition("Position updated successfully.");
    //     } catch (error) {
    //         setError("Failed to update the position.");
    //     }
    // };

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const value = e.target.value;
    //     setReportingId(value ? Number(value) : null);
    // };

    return (
        // <div className='register'>
        //     <form className='form' style={{ width: "300px", margin: "auto" }} onSubmit={handleUpdate}>
        //         <div className='style' style={{ textAlign: "center", marginTop: "50px", gap: "20px", display: "block" }}>
        //             <div className='mb-3'>
        //                 <label className='form-label' htmlFor="name">Name</label>
        //                 <input type='text' id='name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} required />
        //             </div>
        //             <div className='mb-3'>
        //                 <label className='form-label' htmlFor="description">Description</label>
        //                 <input type='text' id='description' className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} required />
        //             </div>
        //             <div className='mb-3'>
        //                 <label className='form-label' htmlFor="reportingto">Reporting To</label>
        //                 <input type="number" id='reportingto' className='form-control' value={reportingId ?? ''} onChange={handleChange} />
        //             </div>
        //         </div>
        //         <button type='submit'>Update</button>
        //         {error && <div style={{ color: 'red' }}>{error}</div>}
        //         {updatePosition && <div style={{ color: 'green' }}>{updatePosition}</div>}
        //     </form>
        // </div>
        <div>hello</div>
    );
};

export default Update;
