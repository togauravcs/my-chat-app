import React from "react";
import Chatbox from "./components/Chatbox";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <TopBar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 flex flex-col justify-between bg-gray-800 text-white p-4">
          <Chatbox />
        </div>
      </div>
    </div>
  );
};

export default App;