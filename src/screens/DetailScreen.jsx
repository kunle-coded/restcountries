import Country from "../components/Country";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function DetailScreen() {
  return (
    <div className="app">
      <Navbar />
      <Country />
      <Footer />
    </div>
  );
}

export default DetailScreen;
