import React, { useState } from "react";
import Break from "./Break";
import Details from "./Details";
import Profile from "./Profile";
import { toast } from "react-toastify";

const Cart = ({ timer }) => {
  const [brakeTime, setBreakTime] = useState(0);
  return (
    <div className="mt-10 lg:mx-5 md:mx-5 mx-10 ">
      <Profile />
      <Break brakeTime={brakeTime} setBreakTime={setBreakTime} />
      <Details timer={timer} brakeTime={brakeTime} />
      <button
        onClick={() => toast.success("Activity Completed")}
        className="w-full py-2 bg-teal-600 rounded-lg mt-10 text-white font-medium"
      >
        Activity Completed
      </button>
    </div>
  );
};

export default Cart;
