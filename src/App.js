import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Features from "./components/Features";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Features />
    </div>
  );
}

export default App;
