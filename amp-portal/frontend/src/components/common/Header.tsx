import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

const TopBar: React.FC = () => (
  <div className="bg-white text-neutral-800 border-b border-neutral-200">
    <div className="max-w-7xl mx-auto px-4 py-3">
      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-between">
        {/* Left: AMP logo + wordmark */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-full bg-primary-700 flex items-center justify-center text-white font-bold flex-shrink-0">A</div>
          <div className="leading-tight">
            <div className="font-display font-black text-neutral-900 text-sm tracking-wide">ASSOCIATION OF MUSLIM PROFESSIONALS</div>
            <div className="text-xs text-primary-700">STRIVING FOR PEACE AND PROGRESS</div>
          </div>
        </Link>

        {/* Right: utility links with icons */}
        <div className="flex items-center gap-4 xl:gap-6 text-sm flex-wrap">
          <Link to="/volunteer" className="flex items-center gap-2 hover:text-primary-700 transition-colors">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700">🤝</span>
            <span className="font-display italic whitespace-nowrap">Become a Volunteer</span>
          </Link>
          <a href="tel:+917300116660" className="flex items-center gap-2 hover:text-primary-700 transition-colors">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-100">📞</span>
            <span className="font-semibold text-neutral-900 whitespace-nowrap">+91-7300116660</span>
          </a>
          <a href="mailto:info@ampindia.org" className="flex items-center gap-2 hover:text-primary-700 transition-colors">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-100">✉️</span>
            <span className="text-neutral-900 underline whitespace-nowrap">info@ampindia.org</span>
          </a>
          <Link to="/contact" className="flex items-center gap-2 hover:text-primary-700 transition-colors">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-100">📍</span>
            <span className="whitespace-nowrap">Contact Us</span>
          </Link>
          <Link to="/login" className="flex items-center gap-2 hover:text-primary-700 transition-colors">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-100">🔑</span>
            <span className="whitespace-nowrap">Login</span>
          </Link>
          <Link to="/register" className="px-3 py-1 rounded-full border border-neutral-300 hover:bg-neutral-100 transition-colors whitespace-nowrap">Register</Link>
          {/* Social icons */}
          <div className="hidden xl:flex items-center gap-3 text-neutral-700">
            <a href="https://twitter.com/ampindia" target="_blank" rel="noopener noreferrer" className="hover:text-primary-700 transition-colors" aria-label="Twitter">🐦</a>
            <a href="https://facebook.com/ampindia" target="_blank" rel="noopener noreferrer" className="hover:text-primary-700 transition-colors" aria-label="Facebook">📘</a>
            <a href="https://linkedin.com/company/ampindia" target="_blank" rel="noopener noreferrer" className="hover:text-primary-700 transition-colors" aria-label="LinkedIn">📌</a>
            <a href="https://instagram.com/ampindia" target="_blank" rel="noopener noreferrer" className="hover:text-primary-700 transition-colors" aria-label="Instagram">📸</a>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Layout */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between mb-3">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-full bg-primary-700 flex items-center justify-center text-white font-bold flex-shrink-0">A</div>
            <div className="leading-tight">
              <div className="font-display font-black text-neutral-900 text-xs sm:text-sm">ASSOCIATION OF MUSLIM PROFESSIONALS</div>
              <div className="text-[10px] sm:text-xs text-primary-700">STRIVING FOR PEACE AND PROGRESS</div>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/login" className="px-3 py-1 text-xs rounded border border-primary-700 text-primary-700 hover:bg-primary-50 transition-colors">Login</Link>
            <Link to="/register" className="px-3 py-1 text-xs rounded bg-primary-700 text-white hover:bg-primary-800 transition-colors">Register</Link>
          </div>
        </div>
        
        <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
          <a href="tel:+917300116660" className="flex items-center gap-1 hover:text-primary-700 transition-colors">
            <span>📞</span>
            <span className="font-semibold">+91-7300116660</span>
          </a>
          <a href="mailto:info@ampindia.org" className="flex items-center gap-1 hover:text-primary-700 transition-colors">
            <span>✉️</span>
            <span className="underline">info@ampindia.org</span>
          </a>
          <Link to="/contact" className="flex items-center gap-1 hover:text-primary-700 transition-colors">
            <span>📍</span>
            <span>Contact</span>
          </Link>
          <Link to="/volunteer" className="flex items-center gap-1 hover:text-primary-700 transition-colors">
            <span>🤝</span>
            <span>Volunteer</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  return (
    <header className="bg-white">
      <TopBar />

      {/* Main nav bar with brand red background */}
      <div className="bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Nav items with dropdowns/mega-menus */}
            <nav className="hidden md:flex items-center text-white">
              <Link className="px-4 py-3 hover:bg-primary-800 rounded-t-md" to="/">Home</Link>
              {/* About dropdown */}
              <div className="relative group">
                <Link className="px-4 py-3 block hover:bg-primary-800 rounded-t-md" to="/about">About Us</Link>
                <div className="absolute left-0 mt-0 hidden group-hover:block bg-white text-neutral-900 shadow-card rounded-b-md w-64">
                  <Link className="block px-4 py-2 hover:bg-neutral-100" to="/about/vision-mission">Vision & Mission</Link>
                  <Link className="block px-4 py-2 hover:bg-neutral-100" to="/about/achievements">Achievements</Link>
                  <Link className="block px-4 py-2 hover:bg-neutral-100" to="/about/team">Our Team & Leadership</Link>
                  <Link className="block px-4 py-2 hover:bg-neutral-100" to="/about/chapters">Chapters Directory</Link>
                  <Link className="block px-4 py-2 hover:bg-neutral-100" to="/about/history">History & Milestones</Link>
                </div>
              </div>

              {/* Programs mega menu */}
              <div className="relative group">
                <Link className="px-4 py-3 block hover:bg-primary-800 rounded-t-md" to="/programs">Programs</Link>
                <div className="absolute left-0 mt-0 hidden group-hover:block bg-white text-neutral-900 shadow-card rounded-b-md w-[48rem] p-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="font-semibold mb-2">Education & Skill</div>
                      <Link className="block px-2 py-1 rounded hover:bg-neutral-100" to="/events/National_Talent_Search_2025">National Talent Search 2025</Link>
                      <Link className="block px-2 py-1 rounded hover:bg-neutral-100" to="/programs/education/career-guidance">Career Guidance</Link>
                      <Link className="block px-2 py-1 rounded hover:bg-neutral-100" to="/programs/education/sdl">Skill Development Lectures</Link>
                      <Link className="block px-2 py-1 rounded hover:bg-neutral-100" to="/programs/education/scholarships">Scholarships</Link>
                      <Link className="block px-2 py-1 rounded hover:bg-neutral-100" to="/programs/education/orphan-support">Orphan Support</Link>
                    </div>
                    <div>
                      <div className="font-semibold mb-2">Employment Assistance</div>
                      <Link className="block px-2 py-1 rounded hover:bg-neutral-100" to="/programs/employment/job-fairs">Job Fairs & Drives</Link>
                      <Link className="block px-2 py-1 rounded hover:bg-neutral-100" to="/programs/employment/campus-to-corporate">Campus to Corporate</Link>
                      <Link className="block px-2 py-1 rounded hover:bg-neutral-100" to="/programs/employment/self-employment">Self-Employment Schemes</Link>
                    </div>
                    <div>
                      <div className="font-semibold mb-2">Community Development</div>
                      <Link className="block px-2 py-1 rounded hover:bg-neutral-100" to="/donatezakat">Zakat Fund (AZF)</Link>
                      <Link className="block px-2 py-1 rounded hover:bg-neutral-100" to="/programs/community/widow-elderly-support">Widow & Elderly Support</Link>
                      <Link className="block px-2 py-1 rounded hover:bg-neutral-100" to="/programs/community/health">Health Programs</Link>
                      <Link className="block px-2 py-1 rounded hover:bg-neutral-100" to="/programs/community/disaster-relief">Disaster Relief</Link>
                    </div>
                    <div>
                      <div className="font-semibold mb-2">NGO Connect</div>
                      <Link className="block px-2 py-1 rounded hover:bg-neutral-100" to="/ngo_connect">Partner NGOs Directory</Link>
                      <Link className="block px-2 py-1 rounded hover:bg-neutral-100" to="/ngo_connect/collaboration">Collaboration Hub</Link>
                      <Link className="block px-2 py-1 rounded hover:bg-neutral-100" to="/resources">Resource Sharing</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Events dropdown */}
              <div className="relative group">
                <Link className="px-4 py-3 block hover:bg-primary-800 rounded-t-md" to="/events">Events</Link>
                <div className="absolute left-0 mt-0 hidden group-hover:block bg-white text-neutral-900 shadow-card rounded-b-md w-64">
                  <Link className="block px-4 py-2 hover:bg-neutral-100" to="/events/National_Talent_Search_2025">National Talent Search 2025</Link>
                  <Link className="block px-4 py-2 hover:bg-neutral-100" to="/events/ngo-conferences">NGO Conferences</Link>
                  <Link className="block px-4 py-2 hover:bg-neutral-100" to="/programs/employment/job-fairs">Job Fairs</Link>
                  <Link className="block px-4 py-2 hover:bg-neutral-100" to="/events/webinars">Webinars</Link>
                  <Link className="block px-4 py-2 hover:bg-neutral-100" to="/events/community-events">Community Events</Link>
                  <Link className="block px-4 py-2 hover:bg-neutral-100" to="/events/seminars-workshops">Seminars & Workshops</Link>
                </div>
              </div>

              {/* Resources dropdown */}
              <div className="relative group">
                <Link className="px-4 py-3 block hover:bg-primary-800 rounded-t-md" to="/resources">Resource Center</Link>
                <div className="absolute left-0 mt-0 hidden group-hover:block bg-white text-neutral-900 shadow-card rounded-b-md w-64">
                  <Link className="block px-4 py-2 hover:bg-neutral-100" to="/resources/blog">Blog & Articles</Link>
                  <Link className="block px-4 py-2 hover:bg-neutral-100" to="/resources/news">News & Press</Link>
                  <Link className="block px-4 py-2 hover:bg-neutral-100" to="/resources/newsletter">Newsletter</Link>
                  <Link className="block px-4 py-2 hover:bg-neutral-100" to="/resources/library">Resource Library</Link>
                  <Link className="block px-4 py-2 hover:bg-neutral-100" to="/resources/nts-preparation">NTS Preparation</Link>
                  <Link className="block px-4 py-2 hover:bg-neutral-100" to="/resources/reports">Reports & Impact</Link>
                  <Link className="block px-4 py-2 hover:bg-neutral-100" to="/resources/faq">FAQs</Link>
                  <Link className="block px-4 py-2 hover:bg-neutral-100" to="/resources/how-to">How-To Guides</Link>
                </div>
              </div>

              <Link className="px-4 py-3 hover:bg-primary-800 rounded-t-md" to="/search-ngos">Search NGOs</Link>
              <Link className="px-4 py-3 hover:bg-primary-800 rounded-t-md" to="/discussions">Discussion Corner</Link>
            </nav>

            {/* Right CTA buttons */}
            <div className="flex items-center gap-3">
              <Link to="/donate" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded bg-neutral-900 text-white">
                <span>❤</span>
                <span className="font-semibold">DONATE NOW</span>
              </Link>
              {user ? (
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-white/90">{user.full_name}</span>
                  <button
                    className="px-3 py-1 rounded bg-primary-800 text-white"
                    onClick={() => navigate('/dashboard')}
                  >
                    Dashboard
                  </button>
                  <button
                    className="px-3 py-1 rounded bg-white text-primary-700"
                    onClick={() => logout()}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link to="/login" className="px-3 py-1 rounded bg-white text-primary-700">Login</Link>
              )}

              {/* Mobile menu toggle */}
              <button
                className="md:hidden p-2 text-white"
                aria-label="Toggle Menu"
                onClick={() => setMobileMenuOpen((v) => !v)}
              >
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden text-white px-4 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded hover:bg-primary-800">Home</Link>
            <Link to="/about" className="block px-3 py-2 rounded hover:bg-primary-800">About Us</Link>
            <Link to="/ngo-corner" className="block px-3 py-2 rounded hover:bg-primary-800">NGO Corner</Link>
            <Link to="/search-ngos" className="block px-3 py-2 rounded hover:bg-primary-800">Search NGOs</Link>
            <Link to="/events" className="block px-3 py-2 rounded hover:bg-primary-800">Events</Link>
            <Link to="/resources" className="block px-3 py-2 rounded hover:bg-primary-800">Resource Center</Link>
            <Link to="/discussions" className="block px-3 py-2 rounded hover:bg-primary-800">Discussion Corner</Link>
            <Link to="/donate" className="block px-3 py-2 rounded bg-neutral-900 text-white mt-2">❤ DONATE NOW</Link>
          </nav>
        )}
      </div>
    </header>
  );
};
