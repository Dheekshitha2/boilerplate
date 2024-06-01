import React from 'react';
import { Radar } from 'react-chartjs-2';
import 'chart.js/auto'; // Import the default setup of chart.js

function FamilyMemberCard({ member }) {
  const radarData = {
    labels: ['Love', 'Care', 'Support', 'Communication', 'Trust'],
    datasets: [
      {
        label: `${member.name}'s Attributes`,
        data: [80, 70, 90, 85, 95], // Replace with actual data if available
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      r: {
        angleLines: { display: false },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <div className="card w-80 bg-base-100 shadow-xl m-4">
      <figure className="px-10 pt-10">
        <img src="path/to/picture.jpg" alt={member.name} className="rounded-full w-24 h-24 object-cover" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{member.name}</h2>
        <p>{member.relationship_type}</p>
        <p>{member.email}</p>
        <div className="w-full">
          <Radar data={radarData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}

export default FamilyMemberCard;
