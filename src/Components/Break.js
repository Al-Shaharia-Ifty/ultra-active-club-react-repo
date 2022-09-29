import React from "react";

const Break = ({ brakeTime, setBreakTime }) => {
  const handleBrakeTime = (t) => {
    setBreakTime(t);
    localStorage.setItem("brakeTime", t);
  };
  return (
    <div className="bg-gray-200 mt-5 px-2 py-5 flex justify-center rounded-lg">
      <button
        onClick={() => handleBrakeTime(1)}
        className="p-2 mx-1 bg-emerald-600 rounded-full text-white text-sm"
      >
        1m
      </button>
      <button
        onClick={() => handleBrakeTime(2)}
        className="p-2 mx-1 bg-emerald-600 rounded-full text-white text-sm"
      >
        2m
      </button>
      <button
        onClick={() => handleBrakeTime(5)}
        className="p-2 mx-1 bg-emerald-600 rounded-full text-white text-sm"
      >
        5m
      </button>
      <button
        onClick={() => handleBrakeTime(10)}
        className="p-2 mx-1 bg-emerald-600 rounded-full text-white text-sm"
      >
        10m
      </button>
      <button
        onClick={() => handleBrakeTime(30)}
        className="p-2 mx-1 bg-emerald-600 rounded-full text-white text-sm"
      >
        30m
      </button>
    </div>
  );
};

export default Break;
