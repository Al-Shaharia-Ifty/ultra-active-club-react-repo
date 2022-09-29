import React from "react";

const Exercise = (e) => {
  const { img, name, time } = e.e;
  return (
    <div className="bg-white p-10 rounded-lg">
      <img src={img} alt="exercise" />
      <h1>{name}</h1>
      <p>Time: {time}</p>
    </div>
  );
};

export default Exercise;
