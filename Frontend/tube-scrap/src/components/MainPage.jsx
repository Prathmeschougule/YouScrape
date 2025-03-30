import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "./Navbar";

function MainPage({ setVideoDetails }) {
  const [videoLink, setVideoLink] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://demo-deployment-v2.onrender.com/processing",
        `videoLink=${videoLink}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setVideoDetails(response.data); // Update videoDetails state
      setError(null);
      navigate("/details"); // Navigate to /details after state is updated
    } catch (err) {
      setError("Failed to fetch video details");
      setVideoDetails(null);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-800 text-center">
          YouTube Video Data Scraper
        </h1>

        <p className="text-gray-700 text-center mt-2">
          🔍 Enter a YouTube video link and get all the details in seconds!
        </p>

        {/* BaseDiv Centered */}
        <div className="mt-6 w-full max-w-[670px] h-auto bg-red-600 rounded-[40px] flex flex-col md:flex-row items-center p-3 space-y-3 md:space-y-0 md:space-x-3">
          <input
            className="w-full md:flex-1 p-3 border bg-white border-gray-300 rounded-[30px]"
            type="text"
            id="videoLink"
            value={videoLink}
            placeholder="Enter Video Link"
            onChange={(e) => setVideoLink(e.target.value)}
            required
          />

          {/* Button shifts below input on mobile */}
          <button
            className="w-full md:w-auto p-3 px-8 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </>
  );
}

export default MainPage;
