import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

interface NewPosition {
    id: number;
    name: string;
    description: string;
    reportingToId: number | null;
    children?: NewPosition[];
}

interface TreeNodeProps {
    position: NewPosition;
    handleDelete: (id: number) => void;
    handleUpdate: (id: number) => void; 
}

const TreeNode: React.FC<TreeNodeProps> = ({ position, handleDelete, handleUpdate }) => {
    const navigate = useNavigate();

    const handleUpdateClick = () => {
        navigate(`/update/${position.id}`);
    };

    return (
        <div className="tree-node">
            <div className="node-content">
                <strong>{position.name}</strong>: Position {position.description}
                <div>Reporting To: {position.reportingToId ?? 'None'}</div>
                <button onClick={() => handleDelete(position.id)}>Delete</button>
                <button style={{marginLeft: "20px"}} onClick={handleUpdateClick}>Update</button>
            </div>
            {position.children && position.children.length > 0 && (
                <div className="children">
                    {position.children.map(child => (
                        <TreeNode key={child.id} position={child} handleDelete={handleDelete} handleUpdate={handleUpdate} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TreeNode;
