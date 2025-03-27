import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Router components
import MainPage from './components/MainPage';
import Details from './components/Details';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [videoDetails, setVideoDetails] = useState(null);

  return (
    <Router>
      
     <Navbar/>
        <Routes>           
          <Route  path="/" element={<MainPage setVideoDetails={setVideoDetails} />} />
          <Route path="/details" element={<Details videoDetails={videoDetails} />} />
        </Routes>
     
    </Router>
  );
}

export default App;