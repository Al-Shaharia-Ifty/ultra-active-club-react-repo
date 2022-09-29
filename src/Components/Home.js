import React, { useEffect, useState } from "react";
import logo from "../Assets/health-icon.png";
import Exercise from "./Exercise";

const Home = ({ timer, setTimer }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, [setExercises]);
  return (
    <div className="bg-green-100 min-h-screen">
      <header className="flex items-center mx-10 lg:mx-32 pt-20">
        <img src={logo} alt="logo" className="w-10 mr-3" />
        <h2 className="text-cyan-400 text-2xl">Google Health</h2>
      </header>
      <div className="mx-10 lg:mx-32 mt-10">
        <h4 className="text-xl font-medium">Select today's exercise</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 lg:mx-0 md:mx-0 mt-10 pb-20">
          {exercises.map((e) => (
            <Exercise e={e} key={e.id} timer={timer} setTimer={setTimer} />
          ))}
        </div>
      </div>
      <div className="pb-20 mx-10">
        <h1 className="text-4xl text-center">Q&A</h1>
        <div className="mt-5">
          <h2 className="text-3xl mb-5">Who does React Work?</h2>
          <p className="text-xl">
            ReactJS divides the UI into isolated reusable pieces of code known
            as components. React components work similarly to JavaScript
            functions as they accept arbitrary inputs called properties or
            props. It's possible to have as many components as necessary without
            cluttering your code.
          </p>
        </div>
        <div className="mt-5">
          <h2 className="text-3xl mb-5">
            What is difference between props and state?
          </h2>
          <p className="text-xl">
            ReactJS divides the UI into isolated reusable pieces of code known
            as components. React components work similarly to JavaScript
            functions as they accept arbitrary inputs called properties or
            props. It's possible to have as many components as necessary without
            cluttering your code.
          </p>
        </div>
        <div className="mt-5">
          <h2 className="text-3xl mb-5">Who does React Work?</h2>
          <p className="text-xl">
            ReactJS divides the UI into isolated reusable pieces of code known
            as components. React components work similarly to JavaScript
            functions as they accept arbitrary inputs called properties or
            props. It's possible to have as many components as necessary without
            cluttering your code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
