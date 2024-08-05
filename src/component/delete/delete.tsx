import React, { useState } from 'react';
// import OrganizationTree from './OrganizationTree';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DeletePosition: React.FC = () => {
    const { positionId } = useParams<{ positionId: string }>(); // Extract positionId from URL
    const [deletePosition, setDeletePosition] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleDelete = async () => {
        if (!positionId) {
            setError("Position ID is missing.");
            return;
        }

        try {
            await axios.delete(`http://localhost:9000/positions/${positionId}`);
            setDeletePosition("Position deleted successfully.");
        } catch (error) {
            setError("Failed to delete the position.");
        }
    };

    return (
        <div>
            <div style={{ textAlign: "end", marginTop: "50px" }}>
                {/* <button>Update</button> */}
                <button onClick={handleDelete}>Delete</button>
                {/* <button><a className='navbar-brand' href='/register'>Add</a></button> */}
            </div>
            {/* <h1 style={{ textAlign: "center" }}>Hierarchy Tree</h1>
            <OrganizationTree /> */}
           
        </div>
    );
};

export default DeletePosition;
