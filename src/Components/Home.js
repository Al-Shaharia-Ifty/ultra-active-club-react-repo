import React from "react";
import logo from "../Assets/health-icon.png";

const Home = () => {
  return (
    <div className="bg-green-100 min-h-screen">
      <header className="flex items-center mx-32 pt-20">
        <img src={logo} alt="logo" className="w-10 mr-3" />
        <h2 className="text-cyan-400 text-2xl">Google Health</h2>
      </header>
      <div className="mx-32 mt-10">
        <h4 className="text-xl font-medium">Select today's exercise</h4>
      </div>
    </div>
  );
};

export default Home;
