import React, { useState } from "react";

const guidebookData = {
  "First Aid": [
    "Step 1: Assess the situation.",
    "Step 2: Call for help.",
    "Step 3: Apply basic first aid.",
    "Step 4: Keep the patient calm.",
  ],
  "CPR Guide": [
    "Step 1: Check responsiveness.",
    "Step 2: Open airway and check breathing.",
    "Step 3: Start chest compressions.",
    "Step 4: Continue CPR until help arrives.",
  ],
  "Fire Safety": [
    "Step 1: Stay calm and find the exit.",
    "Step 2: Stop, drop, and roll if on fire.",
    "Step 3: Use a fire extinguisher if trained.",
    "Step 4: Evacuate and call emergency services.",
  ],
};

const GuidebookPopup = ({ topic, onClose }) => {
  const [page, setPage] = useState(0);
  const content = guidebookData[topic] || [];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 text-white p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-bold">{topic}</h2>
        <p className="mt-4">{content[page]}</p>

        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 bg-gray-600 rounded"
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-gray-600 rounded"
            onClick={() => setPage((p) => Math.min(p + 1, content.length - 1))}
            disabled={page === content.length - 1}
          >
            Next
          </button>
        </div>

        <button
          className="mt-4 w-full bg-red-500 px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default GuidebookPopup;