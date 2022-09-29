import React from "react";

const Exercise = ({ e, timer, setTimer }) => {
  const { img, name, time } = e;

  const handleTimer = () => {
    if (timer === 0) {
      setTimer(time);
    } else {
      const oldTime = parseInt(timer);
      const newTime = parseInt(time);
      setTimer(oldTime + newTime);
    }
  };
  return (
    <div
      className="bg-white px-3 py-3 rounded-lg"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <img src={img} alt="exercise" className="h-32 w-full rounded-lg" />
      <h1 className="mt-4 font-medium text-lg">{name}</h1>
      <p>Time: {time}m</p>
      <button
        onClick={handleTimer}
        className="w-full p-2 bg-cyan-700 text-white rounded-lg mt-5"
      >
        Add to list
      </button>
    </div>
  );
};

export default Exercise;
