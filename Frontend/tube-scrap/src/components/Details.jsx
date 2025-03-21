import React from 'react';

function Details({ videoDetails }) {
  
  if (!videoDetails) {
    return (
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-white">
        <h1 className="text-3xl font-bold text-center mb-6">No video details found.</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-white">
        <h1 className="text-3xl font-bold text-center mb-6">Youtube Video Data Scraper !!</h1>
        <h5 className="text-xl font-semibold">{videoDetails.vtitle}</h5>
        <div className="my-6">
          <label className="text-3xl font-bold text-green-500">Thumbnail:</label>
          <div className="mt-2">
            <img
              id="thumbnail"
              src={videoDetails.thumbnailUrl}
              alt="Video Thumbnail"
              className="max-w-full h-auto"
            />
          </div>
        </div>
        <h5 className="text-xl font-semibold">{videoDetails.vdesc}</h5>
        <h1 className="text-xl font-semibold mt-6">
          Tags: <span className="text-white">{videoDetails.vtags.join(', ')}</span>
        </h1>
      </div>
    </div>
  );
}

export default Details;