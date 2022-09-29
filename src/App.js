import { useState } from "react";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [timer, setTimer] = useState(0);
  console.log(timer);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-4 gird-cols-1 gap-4">
      <div className="col-span-3">
        <Home timer={timer} setTimer={setTimer} />
      </div>
      <div>
        <Cart timer={timer} setTimer={setTimer} />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
