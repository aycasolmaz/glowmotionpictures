import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchVideos } from '../api/server';
import ReactPlayer from 'react-player';

function VideoCategory() {
    const [videos, setVideos] = useState([]);
    const { category } = useParams(); // Extract category from URL

    useEffect(() => {
        fetchVideos(category)
            .then(videosData => {
                console.log(videosData); // Check the structure
                setVideos(videosData);
            })

            .catch(error => {
                console.error('Error fetching videos:', error);
            });
    }, [category]);

    return (
        <div>
            <h2>Videos for {category}</h2>
            {videos.map((video, index) => (
                <div key={video.uri || index}>  {/* Use video.uri or index as a fallback */}
                    <h3>{video.name}</h3>
                    <ReactPlayer width="640" height="360" controls url={video.link} />
                </div>
            ))}
        </div>
    );
}

export default VideoCategory;
