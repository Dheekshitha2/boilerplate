import React, { useState } from 'react';

function Modal({ showModal, setShowModal, member, saveMember }) {
  const [name, setName] = useState(member ? member.name : '');
  const [attempts, setAttempts] = useState(member ? member.attempts : 0);

  const handleSave = () => {
    saveMember({ name, attempts });
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal modal-open">
        <div className="modal-box">
          <h2 className="font-bold text-lg text-primary">Edit Family Member</h2>
          <div className="py-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full mb-4"
            />
            <input
              type="number"
              placeholder="Attempts"
              value={attempts}
              onChange={(e) => setAttempts(Number(e.target.value))}
              className="input input-bordered w-full mb-4"
            />
          </div>
          <div className="modal-action">
            <button className="btn btn-primary" onClick={handleSave}>Save</button>
            <button className="btn" onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
