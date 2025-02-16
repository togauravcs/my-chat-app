import React, { useState } from "react";

const emergencyNumbers = [
  { service: "Ambulance", number: "102" },
  { service: "Fire Brigade", number: "101" },
  { service: "Police", number: "100" },
];

const TopBar = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="h-14 bg-gray-900 flex items-center justify-between px-4 text-white">
      <h1 className="text-xl font-bold">My Chat App</h1>
      <button
        onClick={() => setShowPopup(true)}
        className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-700"
      >
        Emergency Helpline
      </button>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 text-white p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-bold">Emergency Contacts</h2>
            <ul className="mt-4">
              {emergencyNumbers.map((item, index) => (
                <li key={index} className="py-2">
                  <strong>{item.service}:</strong> {item.number}
                </li>
              ))}
            </ul>
            <button
              className="mt-4 w-full bg-red-500 px-4 py-2 rounded"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;