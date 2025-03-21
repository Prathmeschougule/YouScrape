import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function MainPage({ setVideoDetails }) {
  const [videoLink, setVideoLink] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/processing',
        `videoLink=${videoLink}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      setVideoDetails(response.data); // Update videoDetails state
      setError(null);
      navigate('/details'); // Navigate to /details after state is updated
    } catch (err) {
      setError('Failed to fetch video details');
      setVideoDetails(null);
    }
  };

  return (
    <div>
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl text-white font-bold mb-6">YouTube Video Data Scraper</h1>
        <label className="block text-white text-2xl font-medium mb-3" htmlFor="videoLink">
          Enter Your Video Link
        </label>
        <input
          className="w-full h-10 bg-gray-700 text-white border rounded-md px-3"
          type="text"
          id="videoLink"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          required
        />
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
}

export default MainPage;