import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddFamilyMemberForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        relationship_type: ''
    });
    const [familyMembers, setFamilyMembers] = useState([]);

    useEffect(() => {
        const fetchFamilyMembers = async () => {
            try {
                // Replace this URL with your actual endpoint that returns family member data
                const response = await axios.get('http://localhost:5000/get-family-members');
                setFamilyMembers(response.data);
            } catch (error) {
                console.error('Failed to fetch family members:', error);
            }
        };

        fetchFamilyMembers();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/add-family-member', formData);
            if (response.data) {
                setFamilyMembers([...familyMembers, formData]);
                alert('Family member added successfully!');
                setFormData({ name: '', email: '', relationship_type: '' }); // Reset form
            }
        } catch (error) {
            console.error('Error adding family member:', error);
            alert('Failed to add family member.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    style={{ margin: '5px' }}
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    style={{ margin: '5px' }}
                />
                <input
                    type="text"
                    name="relationship_type"
                    value={formData.relationship_type}
                    onChange={handleChange}
                    placeholder="Relationship Type"
                    required
                    style={{ margin: '5px' }}
                />
                <button type="submit" style={{ margin: '5px' }}>Add Family Member</button>
            </form>
            <div>
                <h2>Family Members</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f0f0f0' }}>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Relationship Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {familyMembers.map((member, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{member.name}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{member.email}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{member.relationship_type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AddFamilyMemberForm;
