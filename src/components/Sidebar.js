import React, { useState } from "react";
import GuidebookPopup from "./GuidebookPopup";

const Sidebar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");

  const openPopup = (topic) => {
    setSelectedTopic(topic);
    setIsPopupOpen(true);
  };

  return (
    <div className="w-64 bg-gray-900 text-white p-4 space-y-4">
      <button
        onClick={() => openPopup("First Aid")}
        className="w-full p-2 bg-blue-500 rounded hover:bg-blue-700"
      >
        First Aid
      </button>
      <button
        onClick={() => openPopup("CPR Guide")}
        className="w-full p-2 bg-blue-500 rounded hover:bg-blue-700"
      >
        CPR Guide
      </button>
      <button
        onClick={() => openPopup("Fire Safety")}
        className="w-full p-2 bg-blue-500 rounded hover:bg-blue-700"
      >
        Fire Safety
      </button>

      {isPopupOpen && (
        <GuidebookPopup topic={selectedTopic} onClose={() => setIsPopupOpen(false)} />
      )}
    </div>
  );
};

export default Sidebar;