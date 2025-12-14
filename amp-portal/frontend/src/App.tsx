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

function App() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      <main className="py-6">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
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
