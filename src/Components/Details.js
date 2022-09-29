const Details = ({ timer }) => {
  const brakeTime = localStorage.getItem("brakeTime");
  return (
    <div>
      <h1 className="mt-10 text-xl font-medium">Exercise Details</h1>
      <div className="bg-gray-200 p-5 flex justify-between mt-5 rounded-lg">
        <p className="text-lg font-normal">Exercise Time</p>
        <p>{timer} minute</p>
      </div>
      <div className="bg-gray-200 p-5 flex justify-between mt-5 rounded-lg">
        <p className="text-lg font-normal">Exercise Time</p>
        <p>{brakeTime} minute</p>
      </div>
    </div>
  );
};

export default Details;
