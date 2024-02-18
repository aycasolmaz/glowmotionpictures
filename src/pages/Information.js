// import React from 'react';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// const locations = [
//   { lat: -34.397, lng: 150.644 },
//   // Add other locations here
// ];

// const MapWithAMarker = withScriptjs(withGoogleMap(props =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     {locations.map(loc => <Marker position={loc} />)}
//   </GoogleMap>
// ));

// const Information = () => {
//   return (
//     <div>
//       <MapWithAMarker
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=YOUR_API_KEY`}
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `400px` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       />
//       <div className="contact-info">
//         <h2>Contact</h2>
//         <p>Email: hello@example.com</p>
//         <p>Location: 123 Sample Street, City, Country</p>
//         <p>Phone: +123 456 7890</p>
//         <p>Fax: +123 456 7891</p>
//         {/* Add additional contact details and styling */}
//       </div>
//     </div>
//   );
// };

// export default Information;


import React from 'react';

const Information = () => {
  return (
    <div style={{ color: '#fff', background: '#000', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ margin: '0 0 10px' }}>CONTACT</h1>
        <p>Get in touch with us!</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <img src="path_to_your_placeholder_image.jpg" alt="Map placeholder" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div style={{ flex: 1, marginLeft: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ margin: '0 0 10px' }}>LOCATION</h2>
            <p>1234 Address Street, City, Country</p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ margin: '0 0 10px' }}>PHONE - FAX</h2>
            <p>P: +123 456 7890</p>
            <p>F: +123 456 7891</p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ margin: '0 0 10px' }}>EMAIL</h2>
            <p>hello@example.com</p>
          </div>
          <div>
            <h2 style={{ margin: '0 0 10px' }}>SOCIAL</h2>
            <p>[Social Icons]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
