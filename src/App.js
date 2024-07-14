import "./App.css";
import Header from "./components/Header/header.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homePage.jsx";
import RaceResultsPage from "./Pages/raceRsultsPage.jsx";

function App() {
  
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/results" element ={<RaceResultsPage/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
