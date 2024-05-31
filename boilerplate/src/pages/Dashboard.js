import React, { useState } from 'react';
import RegistrationModal from '../components/RegistrationModal';
import FloatingButton from '../components/FloatingButton';
import LevelBadge from '../components/LevelBadge'; // Import the LevelBadge component

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    {
      name: 'Hart Hagerty',
      relationship: 'Father',
      riskLevel: 'High',
      scamAttempts: 10,
      scamFails: 7,
      lastEmailStatus: 'Clicked',
      avatar: 'https://img.daisyui.com/tailwind-css-component-profile-2@56w.png'
    },
    {
      name: 'Brice Swyre',
      relationship: 'Brother',
      riskLevel: 'Moderate',
      scamAttempts: 5,
      scamFails: 2,
      lastEmailStatus: 'Delivered',
      avatar: 'https://img.daisyui.com/tailwind-css-component-profile-3@56w.png'
    },
    {
      name: 'Marjy Ferencz',
      relationship: 'Mother',
      riskLevel: 'Low',
      scamAttempts: 3,
      scamFails: 0,
      lastEmailStatus: 'Ignored',
      avatar: 'https://img.daisyui.com/tailwind-css-component-profile-4@56w.png'
    },
    {
      name: 'Yancy Tear',
      relationship: 'Sister',
      riskLevel: 'High',
      scamAttempts: 8,
      scamFails: 6,
      lastEmailStatus: 'Clicked',
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
              <th className="w-1/4 text-left">Family</th>
              <th className="w-1/6 text-center">Scam Attempts</th>
              <th className="w-1/6 text-center">Scam Failures</th>
              <th className="w-1/6 text-center">Fail Rate</th>
              <th className="w-1/6 text-center">Last Email Status</th>
              <th className="w-1/6 text-center">Alert Level</th>
              <th className="w-1/6 text-center">Risk Level</th>
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
                      <div className="text-sm opacity-50">{member.relationship}</div>
                    </div>
                  </div>
                </td>
                <td className="w-1/6 text-center">{member.scamAttempts}</td>
                <td className="w-1/6 text-center">{member.scamFails}</td>
                <td className="w-1/6 text-center">{((member.scamFails / member.scamAttempts) * 100).toFixed(2)}%</td>
                <td className="w-1/6 text-center">
                  <span className="badge badge-outline w-28">
                    {member.lastEmailStatus}
                  </span>
                </td>
                <td className="w-1/6 text-center">
                  <LevelBadge level={member.riskLevel} />
                </td>
                <td className="w-1/6 text-center">
                  <LevelBadge level={member.riskLevel} />
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
