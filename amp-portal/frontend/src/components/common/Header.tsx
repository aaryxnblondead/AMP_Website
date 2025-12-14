import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

const TopBar: React.FC = () => (
  <div className="bg-neutral-900 text-white text-sm">
    <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between">
      <div className="flex space-x-4">
        <span>Become a Volunteer</span>
        <span>HelpLine: +91-7300116660</span>
        <span>Email: info@ampindia.org</span>
      </div>
      <div className="space-x-4">
        <Link to="/contact" className="hover:text-primary-300">Contact us</Link>
        <Link to="/login" className="hover:text-primary-300">Login</Link>
        <Link to="/register" className="hover:text-primary-300">Register</Link>
      </div>
    </div>
  </div>
);

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  return (
    <header className="bg-white shadow">
      <TopBar />
      <div className="border-t-4 border-primary-700 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-primary-700 font-bold text-lg">AMP</Link>
              <nav className="hidden md:flex ml-8 space-x-6">
                <Link to="/about" className="text-neutral-800 hover:text-primary-700">About Us</Link>
                <Link to="/ngo-corner" className="text-neutral-800 hover:text-primary-700">NGO Corner</Link>
                <Link to="/search-ngos" className="text-neutral-800 hover:text-primary-700">Search NGOs</Link>
                <Link to="/events" className="text-neutral-800 hover:text-primary-700">Events</Link>
                <Link to="/resources" className="text-neutral-800 hover:text-primary-700">Resource Center</Link>
                <Link to="/discussions" className="text-neutral-800 hover:text-primary-700">Discussion Corner</Link>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/donate" className="px-4 py-2 rounded bg-primary-700 text-white shadow-card">Donate Now</Link>
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-neutral-700">{user.full_name}</span>
                  <button
                    className="px-3 py-1 rounded bg-neutral-100 hover:bg-neutral-300"
                    onClick={() => logout()}
                  >
                    Logout
                  </button>
                  <button
                    className="px-3 py-1 rounded bg-primary-600 text-white"
                    onClick={() => navigate('/dashboard')}
                  >
                    Dashboard
                  </button>
                </div>
              ) : (
                <Link to="/login" className="px-3 py-1 rounded bg-primary-600 text-white">
                  Login
                </Link>
              )}
              <button
                className="ml-2 md:hidden p-2"
                aria-label="Toggle Menu"
                onClick={() => setMobileMenuOpen((v) => !v)}
              >
                <span className="block w-6 h-0.5 bg-neutral-700 mb-1"></span>
                <span className="block w-6 h-0.5 bg-neutral-700 mb-1"></span>
                <span className="block w-6 h-0.5 bg-neutral-700"></span>
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <nav className="md:hidden py-2 space-y-1">
              <Link to="/about" className="block">About Us</Link>
              <Link to="/ngo-corner" className="block">NGO Corner</Link>
              <Link to="/search-ngos" className="block">Search NGOs</Link>
              <Link to="/events" className="block">Events</Link>
              <Link to="/resources" className="block">Resource Center</Link>
              <Link to="/discussions" className="block">Discussion Corner</Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
