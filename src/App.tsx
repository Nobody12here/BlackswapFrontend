import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Boxes from "./components/Boxes";
import Trusted from "./components/Trusted";
import ConnectUs from "./components/ConnectUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative bg-slate-300 dark:bg-[#131313] text-black dark:text-white">
      <div className="noise-bg"></div>
      <div className="min-h-screen relative">
        <Navbar />
        <Hero />
        <Boxes />
        <Trusted />
        <ConnectUs />
        <Footer />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
