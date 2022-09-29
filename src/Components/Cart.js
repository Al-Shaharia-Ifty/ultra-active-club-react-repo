import React from "react";

const Cart = () => {
  return (
    <div className="mx-5 mt-5">
      <div className="flex ">
        <img
          src="https://i.ibb.co/1rc2WtF/photo.jpg"
          alt="Shaharia's"
          className="w-12 rounded-full"
        />
        <div className="ml-5">
          <h2 className="text-2xl font-medium">Al Shaharia</h2>
          <p>Mohammadpur, Dhaka</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 bg-gray-200 mt-10 p-5 rounded-lg">
        <div className="text-center">
          <h4 className="text-2xl font-bold">
            58<small className="text-gray-400 text-sm">kg</small>
          </h4>
          <p>Weight</p>
        </div>
        <div className="text-center">
          <h4 className="text-2xl font-bold">
            6.7<small className="text-gray-400 text-sm">foot</small>
          </h4>
          <p>Height</p>
        </div>
        <div className="text-center">
          <h4 className="text-2xl font-bold">
            20<small className="text-gray-400 text-sm">yrs</small>
          </h4>
          <p>Age</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
