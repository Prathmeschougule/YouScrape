import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import MainPage from './components/MainPage';
import Details from './components/Details';
import './App.css';

function App() {
  const [videoDetails, setVideoDetails] = useState(null);

  return (
    <Router>
      <div className="bg-gray-800 min-h-screen flex items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={<MainPage setVideoDetails={setVideoDetails} />}
          />
          <Route
            path="/details"
            element={<Details videoDetails={videoDetails} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;