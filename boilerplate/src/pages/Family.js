import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const FamilyPage = () => {
    const [familyMembers, setFamilyMembers] = useState([]);


    useEffect(() => {
        const fetchFamilyMembers = async () => {
            try {
                const response = await axios.get('https://fraud-zero-1.fly.dev/family-members');
                setFamilyMembers(response.data);
            } catch (error) {
                console.error('Error fetching family members:', error);
            }
        };

        fetchFamilyMembers();
    }, []);

    const options = {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        },
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                ticks: {
                    display: false
                },
                pointLabels: {
                    display: true,
                    font: {
                        size: 14
                    }
                }
            }
        },
        maintainAspectRatio: false,
        aspectRatio: 1 // Adjust this value as needed to change size
    };

    return (
        <div className="p-4 grid grid-cols-3 gap-4">
            {familyMembers.map((member, index) => (
                <div key={index} className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={member.avatar} alt={member.name} className="mask mask-squircle" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{member.name}</h2>
                        <p>{member.relationship}</p>
                        <div className="w-full mt-10 mb-8">
                            <Radar data={member.vulnerabilityData} options={options} />
                        </div>
                        <div className="card-actions">
                            <Link to={`/personal/${member.name}`} className="btn btn-primary">Access Personal Page</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FamilyPage;
