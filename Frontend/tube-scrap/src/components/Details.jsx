import React, { useState } from 'react';

function Details({ videoDetails }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(videoDetails.vdesc).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  
  if (!videoDetails) {
    return (
      <div className="  p-8 rounded-lg shadow-lg text-white">
        <h1 className="text-3xl font-bold text-center mb-6 mt-10">No video details found.</h1>
      </div>
    );
  }

  return (
    
    <div className="mt-10">
    <h1 className="text-3xl font-bold">Youtube Video Data Scraper !!</h1>
    <h5 className="text-xl font-semibold mb-10">{videoDetails.vtitle}</h5>
  
    {/* Responsive Container */}
    <div className="flex flex-col md:flex-col lg:flex-row gap-6">
      {/* Box 1 */}
      <div className="w-full lg:w-1/2">
        <div className="flex justify-between">
          <label className="text-left text-xl font-bold text-green-500">Thumbnail:</label>
          <button
            type="button"
            className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Copy Thumbnail
          </button>
        </div>
        <img id="thumbnail" src={videoDetails.thumbnailUrl} alt="Video Thumbnail" className="w-full h-auto object-cover mt-5" />
      </div>
  
      {/* Box 2 */}
      <div className="w-full lg:w-1/2">
        <div className="flex justify-between">
          <label className="text-left text-xl font-bold text-green-500">Description:</label>
          <button
            type="button"
            onClick={handleCopy}
            className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {copied ? "Copied!" : "Copy Description"}
          </button>
        </div>
        <h5 className="text-justify mt-5">{videoDetails.vdesc}</h5>
      </div>
    </div>
  
    {/* Tag Box */}
    <div className="mt-5">
      <div className="flex justify-between">
        <label className="text-left text-xl font-bold text-green-500">Tag:</label>
        <button
          type="button"
          className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Copy Tag
        </button>
      </div>
      <div className="text-left">{videoDetails.vtags.join(", ")}</div>
    </div>
  </div>
  
    
  );
}

export default Details;