import React, { useEffect, useState } from 'react';
import { fetchVideos } from '../api/server';

function Works() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos()
      .then(videosData => {
        setVideos(videosData);
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Our Works</h1>
      <p>Explore our projects and past works.</p>
    </div>
  );
}

export default Works;
