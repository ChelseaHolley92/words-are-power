import React, { useState } from "react";

const NameInput = ({ onSave }) => {
    const [name, setName] = useState('');

    const handleSave = () => {
        if (name.trim() !== '') {
            onSave(name);
        } else {
            alert("Please enter your name.");
        }
    };
    
    return (
        <div className="name-input">
            <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
};

export default NameInput;