import { useState } from "react";
import Cart from "./Components/Cart";
import Home from "./Components/Home";

function App() {
  const [timer, setTimer] = useState([]);
  console.log(timer);
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3">
        <Home timer={timer} setTimer={setTimer} />
      </div>
      <div>
        <Cart />
      </div>
    </div>
  );
}

export default App;
