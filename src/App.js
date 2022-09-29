import { useEffect, useState } from "react";
import Cart from "./Components/Cart";
import Home from "./Components/Home";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [setData]);

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3">
        <Home />
      </div>
      <div>
        <Cart />
      </div>
    </div>
  );
}

export default App;
