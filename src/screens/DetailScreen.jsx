import { Outlet } from "react-router-dom";
import Country from "../components/Country";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function DetailScreen() {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default DetailScreen;
