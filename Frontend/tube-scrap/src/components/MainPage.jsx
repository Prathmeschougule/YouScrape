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
        "http://localhost:8080/processing",
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
    
      <div className="mainPage">
        <div>
          <h1 className="Heading text-gray-800">YouTube Video Data Scraper</h1>


          <p className=" descri text-gray-700">
            🔍 Enter a YouTube video link and get all the details in seconds!
          </p>

      <div className="base bg-red-600 ">
         
              <input
                className=" inputBox border bg-white border-white"
                type="text"
                id="videoLink"
                value={videoLink}
                placeholder="Enter Video Link"
                onChange={(e) => setVideoLink(e.target.value)}
                required
              />
              <button className="btn text-white bg-white" type="submit" onClick={handleSubmit}>
                Submit
              </button>

          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </>
  );
}

export default MainPage;
