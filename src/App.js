import Navbar from "./components/Navbar";
import './App.css'
import HeroImage from "./components/HeroImage";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroImage/>
      <MainBody/>
      <Footer/>
    </div>
  );
}

export default App;
