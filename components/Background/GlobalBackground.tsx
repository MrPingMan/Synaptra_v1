"use client";
import NeuralBackground from "../Home/Hero/NeuralBackground";
const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Global Neural Background */}
      <NeuralBackground />
         {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-blue-700 to-gray-800 opacity-85"></div>
    </div>
  );
};

export default GlobalBackground;
