import React from 'react';
import './index.css';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Routes, Route } from 'react-router-dom';
import { Login } from './components/pages/Login';
import { Home } from './components/pages/Home';
import { SearchNGOs } from './components/pages/SearchNGOs';
import { NGODetail } from './components/pages/NGODetail';
import { Discussions } from './components/pages/Discussions';
import { About } from './components/pages/About';
import { VisionMission } from './components/pages/about/VisionMission';
import { Achievements } from './components/pages/about/Achievements';
import { ProgramsHub } from './components/pages/ProgramsHub';
import { EventsHub } from './components/pages/EventsHub';
import { ResourcesHub } from './components/pages/ResourcesHub';
import { Donate } from './components/pages/Donate';
import { Volunteer } from './components/pages/Volunteer';
import { ContactUs } from './components/pages/ContactUs';

function App() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      <main className="py-6">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          {/* About */}
          <Route path="/about" element={<About />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/achievements" element={<Achievements />} />
          {/* Programs */}
          <Route path="/programs" element={<ProgramsHub />} />
          {/* Events */}
          <Route path="/events" element={<EventsHub />} />
          {/* Resources */}
          <Route path="/resources" element={<ResourcesHub />} />
          {/* Donate & Volunteer */}
          <Route path="/donate" element={<Donate />} />
          <Route path="/volunteer" element={<Volunteer />} />
          {/* Contact */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/search-ngos" element={<SearchNGOs />} />
          <Route path="/ngos/:id" element={<NGODetail />} />
          <Route path="/discussions" element={<Discussions />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
