import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Join';
import Team from './pages/Directors';
import VideoCategory from './components/VideoCategory';
import logo from './logo.png';
import Join from './pages/Join';
import Hire from './pages/Hire';
import Information from './pages/Information';
import Directors from './pages/Directors';
import Producers from './pages/Producers';
import Cinematographies from './pages/Cinematographies';
import Personnel from './pages/Personnel';
import Postpersonnel from './pages/Postpersonnel';
import Staff from './pages/Staff';

// ... other imports

function App() {
  return (
    <Router>
      <Nav logo={logo} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/works/:category" element={<VideoCategory />} />
        <Route path="/contact/join" element={<Join />} />
        <Route path="/contact/hire" element={<Hire />} />
        <Route path="/contact/information" element={<Information />} />
        <Route path="/team/directors" element={<Directors />} />
        <Route path="/team/producers" element={<Producers />} />
        <Route path="/team/cinematographies" element={<Cinematographies />} />
        <Route path="/team/personnel" element={<Personnel />} />
        <Route path="/team/postpersonnel" element={<Postpersonnel />} />
        <Route path="team/staff" element={<Staff />} />

{/*         { title: 'Directors', link: '/team/directors' },
        { title: 'Producers', link: '/team/producers' },
        { title: 'Cinematographers', link: '/team/cinematographies' },
        { title: 'Production Personnel', link: '/team/personnel' },
        { title: 'Post-Production Personnel', link: '/team/postpersonnel' },
        { title: 'Staff & Operations', link: '/team/staff' }, */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}


export default App;
