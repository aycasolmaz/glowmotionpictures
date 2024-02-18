import React from 'react';

// The VideoFeature component represents each video feature in the "Featuring" section
const VideoFeature = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="video-feature">
      <img src={imageUrl} alt={title} className="video-feature-image" />
      <div className="video-feature-text">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

const Home = () => {
  // Sample data for featured videos
  const features = [
    { title: 'Meyhanedeyiz', subtitle: 'A deep dive into culture', imageUrl: '/path-to-your-image1.jpg' },
    { title: 'Magnum', subtitle: 'A taste of elegance', imageUrl: '/path-to-your-image2.jpg' },
    // ... more features
  ];

  return (
    <>
      <style>
        {`
          .homepage {
            width: 100%;
            height: 100%;
          }

          .video-container {
            width: 100%;
            height: 500px; /* Adjust as necessary */
          }

          .video-container video {
            width: 100%;
            height: 100%;
          }

          .featuring-section {
            background-color: #333; /* Dark background for contrast */
            color: white;
            padding: 20px;
            text-align: center;
          }

          .features {
            display: flex;
            justify-content: center;
            gap: 20px;
          }

          .video-feature {
            position: relative;
            width: 200px;
            cursor: pointer;
          }

          .video-feature-image {
            width: 100%;
            display: block;
            transition: opacity 0.3s ease;
            opacity: 0; /* Hide images initially */
          }

          .video-feature-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            transition: opacity 0.3s ease;
          }

          .video-feature:hover .video-feature-image {
            opacity: 1; /* Show image on hover */
          }

          .video-feature:hover .video-feature-text {
            opacity: 0; /* Optionally hide text on hover */
          }
        `}
      </style>
      <div className="homepage">
        <section className="video-container">
          {/* Replace with your video player component */}
          <video controls>
            <source src="/path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
        <section className="featuring-section">
          <h2>Featuring</h2>
          <div className="features">
            {features.map((feature, index) => (
              <VideoFeature key={index} {...feature} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
