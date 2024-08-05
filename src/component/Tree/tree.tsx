import React, { useState } from 'react';
import OrganizationTree from './OrganizationTree';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface NewPosition {
    id: number;
    name: string;
    description: string;
    reportingToId: number | null; // Use reportingToId to match API response
    children?: NewPosition[];
}

const Tree: React.FC = () => {
    const { positionId } = useParams<{ positionId: string }>();
    const [deletePosition, setDeletePosition] = useState<string | null>(null);
    const [updatePosition, setUpdatePosition] = useState<string | null>(null);
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

    return (
        <div>
            <div style={{ textAlign: "end", marginTop: "50px" }}>
                <button><a className='navbar-brand' href='/register'>Add</a></button>
            </div>
            <h1 style={{ textAlign: "center" }}>Hierarchy Tree</h1>
            <OrganizationTree handleDelete={handleDelete} handleUpdate={handleUpdate} />
            {deletePosition && <div style={{ color: 'green' }}>{deletePosition}</div>}
            {updatePosition && <div style={{ color: 'green' }}>{updatePosition}</div>}
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default Tree;
