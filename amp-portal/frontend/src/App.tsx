import React from 'react';
import './index.css';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Routes, Route } from 'react-router-dom';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';
import { Home } from './components/pages/Home';
import { SearchNGOs } from './components/pages/SearchNGOs';
import { NGODetail } from './components/pages/NGODetail';
import { Discussions } from './components/pages/Discussions';
import { About } from './components/pages/About';
import { VisionMission } from './components/pages/about/VisionMission';
import { Achievements } from './components/pages/about/Achievements';
import { Projects } from './components/pages/about/Projects';
import { NGOConnect } from './components/pages/about/NGOConnect';
import { Team } from './components/pages/about/Team';
import { Chapters } from './components/pages/about/Chapters';
import { History } from './components/pages/about/History';
import { ProgramsHub } from './components/pages/ProgramsHub';
import { EventsHub } from './components/pages/EventsHub';
import { ResourcesHub } from './components/pages/ResourcesHub';
import { Donate } from './components/pages/Donate';
import { Volunteer } from './components/pages/Volunteer';
import { ContactUs } from './components/pages/ContactUs';

// Program Pages
import { CareerGuidance } from './components/pages/programs/CareerGuidance';
import { SkillDevelopmentLectures } from './components/pages/programs/SkillDevelopmentLectures';
import { Scholarships } from './components/pages/programs/Scholarships';
import { OrphanSupport } from './components/pages/programs/OrphanSupport';
import { JobFairs } from './components/pages/programs/JobFairs';
import { CampusToCorporate } from './components/pages/programs/CampusToCorporate';
import { SelfEmployment } from './components/pages/programs/SelfEmployment';
import { ZakatFund } from './components/pages/programs/ZakatFund';

// Event Pages
import { NationalTalentSearch } from './components/pages/events/NationalTalentSearch';
import { NGOConferences } from './components/pages/events/NGOConferences';
import { Webinars } from './components/pages/events/Webinars';

// Resource Pages
import { Blog } from './components/pages/resources/Blog';
import { Newsletter } from './components/pages/resources/Newsletter';
import { FAQ } from './components/pages/resources/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      <main className="py-6">
        <Routes>
          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Home */}
          <Route path="/" element={<Home />} />
          
          {/* About */}
          <Route path="/about" element={<About />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/projects" element={<Projects />} />
          <Route path="/about/achievements" element={<Achievements />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/chapters" element={<Chapters />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/ngo_connect" element={<NGOConnect />} />
          
          {/* Programs Hub */}
          <Route path="/programs" element={<ProgramsHub />} />
          
          {/* Education & Skill Programs */}
          <Route path="/programs/education/career-guidance" element={<CareerGuidance />} />
          <Route path="/programs/education/sdl" element={<SkillDevelopmentLectures />} />
          <Route path="/programs/education/scholarships" element={<Scholarships />} />
          <Route path="/programs/education/orphan-support" element={<OrphanSupport />} />
          
          {/* Employment Programs */}
          <Route path="/programs/employment/job-fairs" element={<JobFairs />} />
          <Route path="/programs/employment/campus-to-corporate" element={<CampusToCorporate />} />
          <Route path="/programs/employment/self-employment" element={<SelfEmployment />} />
          
          {/* Community Programs */}
          <Route path="/donatezakat" element={<ZakatFund />} />
          <Route path="/programs/community/zakat-fund" element={<ZakatFund />} />
          
          {/* Events Hub */}
          <Route path="/events" element={<EventsHub />} />
          <Route path="/events/National_Talent_Search_2025" element={<NationalTalentSearch />} />
          <Route path="/events/ngo-conferences" element={<NGOConferences />} />
          <Route path="/events/webinars" element={<Webinars />} />
          
          {/* Resources Hub */}
          <Route path="/resources" element={<ResourcesHub />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/newsletter" element={<Newsletter />} />
          <Route path="/resources/faq" element={<FAQ />} />
          
          {/* Donate & Volunteer */}
          <Route path="/donate" element={<Donate />} />
          <Route path="/volunteer" element={<Volunteer />} />
          
          {/* Contact */}
          <Route path="/contact" element={<ContactUs />} />
          
          {/* NGO Features */}
          <Route path="/search-ngos" element={<SearchNGOs />} />
          <Route path="/ngos/register" element={<Register />} />
          <Route path="/ngos/:id" element={<NGODetail />} />
          
          {/* Discussions */}
          <Route path="/discussions" element={<Discussions />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
