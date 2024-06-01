import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RegistrationModal from '../components/RegistrationModal';
import FloatingButton from '../components/FloatingButton';
import LevelBadge from '../components/LevelBadge';

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [members, setMembers] = useState([]); // This will hold our fetched data

  useEffect(() => {
    async function fetchMembers() {
      try {
        const response = await axios.get('https://fraud-zero-1.fly.dev/family-members');
        setMembers(response.data);
      } catch (error) {
        console.error('Failed to fetch members:', error);
      }
    }
    fetchMembers();
  }, []);

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
                        <img src={member.avatar || 'default-avatar.png'} alt={`${member.name} Avatar`} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{member.name}</div>
                      <div className="text-sm opacity-50">{member.relationship}</div>
                    </div>
                  </div>
                </td>
                <td className="w-1/6 text-center">{member.email_sent_count}</td>
                <td className="w-1/6 text-center">{member.scam_success}</td>
                <td className="w-1/6 text-center">{((member.scam_success / member.email_sent_count) * 100).toFixed(2)}</td>
                <td className="w-1/6 text-center">
                  <LevelBadge level={member.scam_success / member.email_sent_count > 0.3 ? 'High' : 'Low'} />
                </td>
                <td className="w-1/6 text-center">
                  <LevelBadge level={member.riskLevel} />
                </td>
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
