import React from 'react';

const FloatingButton = ({ onClick }) => {
  return (
    <button
      className="fixed bottom-10 right-10 bg-blue-600 text-white w-14 h-14 flex items-center justify-center rounded-3xl shadow-lg hover:bg-blue-500 z-50"
      onClick={onClick}
    >
      <span className="text-3xl font-semibold mb-2">+</span>
    </button>
  );
};

export default FloatingButton;
