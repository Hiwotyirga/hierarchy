import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import TreeNode from './TreeNode'; 

interface NewPosition {
    id: number;
    name: string;
    description: string;
    reportingToId: number | null; // Use reportingToId to match API response
    children?: NewPosition[];
}

interface TreeNodeProps {
    handleDelete: (id: number) => void;
    handleUpdate: (id: number) => void; 
}

const OrganizationTree: React.FC<TreeNodeProps> = ({ handleDelete, handleUpdate }) => {
    const [rootPositions, setRootPositions] = useState<NewPosition[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchPositions();
    }, []);

    const fetchPositions = async () => {
        try {
            const response = await axios.get<NewPosition[]>('http://localhost:9000/positions');
            const positions = response.data;

            // Filter to get all root positions (where reportingToId is null)
            const roots = positions.filter(position => position.reportingToId === null);

            if (roots.length > 0) {
                setRootPositions(roots);
            } else {
                setError("No root positions found");
            }
        } catch (error) {
            setError("Failed to load positions");
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (rootPositions.length === 0) return null;

    return (
        <div className="organization-tree">
            {rootPositions.map(root => (
                <TreeNode key={root.id} position={root} handleDelete={handleDelete} handleUpdate={handleUpdate} />
            ))}
        </div>
    );
};

export default OrganizationTree;
