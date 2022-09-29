import React from "react";

const Exercise = (e) => {
  const { img, name, time } = e.e;
  return (
    <div className="bg-white px-3 py-3 rounded-lg">
      <img src={img} alt="exercise" className="h-32 w-full rounded-lg" />
      <h1 className="mt-4 font-medium text-lg">{name}</h1>
      <p>Time: {time}</p>
      <button className="w-full p-2 bg-cyan-700 text-white rounded-lg mt-5">
        Add to list
      </button>
    </div>
  );
};

export default Exercise;
