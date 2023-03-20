// src/components/App/App.js
import React from "react";
import { create } from "zustand";
import "tailwindcss/tailwind.css";

const useGlobalState = create((set) => ({
  activeScreen: "main",
  setActiveScreen: (screen) => set({ activeScreen: screen })
}));

const App = () => {
  const { activeScreen, setActiveScreen } = useGlobalState();

  const renderContent = () => {
    switch (activeScreen) {
      case "main":
        return <div>Main Gameplay Screen</div>;
      case "inventory":
        return <div>Inventory Screen</div>;
      case "tech-tree":
        return <div>Tech Tree Screen</div>;
      case "challenges":
        return <div>Challenges Screen</div>;
      default:
        return <div>404: Screen not found</div>;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow p-4">{renderContent()}</div>
      <div className="bg-gray-100 border-t border-gray-300 p-2">
        <div className="grid grid-cols-4 gap-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setActiveScreen("main")}
          >
            Main
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setActiveScreen("inventory")}
          >
            Inventory
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setActiveScreen("tech-tree")}
          >
            Tech Tree
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setActiveScreen("challenges")}
          >
            Challenges
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
