import { useEffect, useState } from "react";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-4 gird-cols-1 gap-4">
      <div className="col-span-3">
        <Home timer={timer} setTimer={setTimer} />
      </div>
      <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
        <Cart timer={timer} setTimer={setTimer} />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
