import React, { useState } from 'react';
import RegistrationModal from '../components/RegistrationModal';
import FloatingButton from '../components/FloatingButton';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    {
      name: 'Hart Hagerty',
      location: 'United States',
      relationship: 'Father',
      favoriteColor: 'Purple',
      riskLevel: 'High',
      scamAttempts: 10,
      scamFails: 7,
      avatar: 'https://img.daisyui.com/tailwind-css-component-profile-2@56w.png'
    },
    {
      name: 'Brice Swyre',
      location: 'China',
      relationship: 'Brother',
      favoriteColor: 'Red',
      riskLevel: 'Moderate',
      scamAttempts: 5,
      scamFails: 2,
      avatar: 'https://img.daisyui.com/tailwind-css-component-profile-3@56w.png'
    },
    {
      name: 'Marjy Ferencz',
      location: 'Russia',
      relationship: 'Mother',
      favoriteColor: 'Crimson',
      riskLevel: 'Low',
      scamAttempts: 3,
      scamFails: 0,
      avatar: 'https://img.daisyui.com/tailwind-css-component-profile-4@56w.png'
    },
    {
      name: 'Yancy Tear',
      location: 'Brazil',
      relationship: 'Sister',
      favoriteColor: 'Indigo',
      riskLevel: 'High',
      scamAttempts: 8,
      scamFails: 6,
      avatar: 'https://img.daisyui.com/tailwind-css-component-profile-5@56w.png'
    }
  ];

  const handleEditMember = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  return (
    <div className="relative bg-white mx-6 p-4 flex flex-col space-y-4 shadow-lg rounded-2xl mt-8">
      <h2 className="text-3xl font-bold mb-4 text-primary">Dashboard</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="w-12 text-center">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="w-1/4 text-center">Name</th>
              <th className="w-1/6 text-center">Relationship</th>
              <th className="w-1/6 text-center">Favorite Color</th>
              <th className="w-1/6 text-center">Scam Attempts</th>
              <th className="w-1/6 text-center">Scam Failures</th>
              <th className="w-1/6 text-center">Fail Rate</th>
              <th className="w-1/6 text-center">Risk Level</th>
              <th className="w-12 text-center"></th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <th className="w-12 text-center">
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td className="w-1/4">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={member.avatar} alt={`${member.name} Avatar`} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{member.name}</div>
                      <div className="text-sm opacity-50">{member.location}</div>
                    </div>
                  </div>
                </td>
                <td className="w-1/6 text-center">{member.relationship}</td>
                <td className="w-1/6 text-center">{member.favoriteColor}</td>
                <td className="w-1/6 text-center">{member.scamAttempts}</td>
                <td className="w-1/6 text-center">{member.scamFails}</td>
                <td className="w-1/6 text-center">{((member.scamFails / member.scamAttempts) * 100).toFixed(2)}%</td>
                <td className="w-1/6 text-center">
                  <span className={`badge ${member.riskLevel === 'High' ? 'badge-error' : member.riskLevel === 'Moderate' ? 'badge-warning' : 'badge-success'} badge-sm`}>
                    {member.riskLevel} Risk
                  </span>
                </td>
                <th className="w-12 text-center">
                  <button className="btn btn-ghost btn-xs" onClick={() => handleEditMember(member)}>•••</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Plus Button to Open Registration Modal */}
      <FloatingButton onClick={() => { setSelectedMember(null); setShowModal(true); }} />

      {/* Registration Modal */}
      {showModal && <RegistrationModal showModal={showModal} setShowModal={setShowModal} formData={selectedMember} />}
    </div>
  );
}

export default Dashboard;
