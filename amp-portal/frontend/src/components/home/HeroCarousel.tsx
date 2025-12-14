import React, { useEffect, useState } from 'react';

interface Slide {
  imageUrl: string;
  title: string;
  category?: string;
  author?: string;
  readTime?: string;
}

const slides: Slide[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?q=80&w=1600&auto=format&fit=crop',
    title: 'ACE Hybrid Learning Centres for Competitive Exams',
    category: 'Community Development',
    author: 'AMP Team',
    readTime: '5 min read',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1542816417-9b7d2b32fb5d?q=80&w=1600&auto=format&fit=crop',
    title: 'Empowering Youth Through Vocational Training',
    category: 'Education',
    author: 'AMP Team',
    readTime: '4 min read',
  },
];

export const HeroCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const current = slides[index];

  return (
    <div className="bg-white rounded-xl shadow-card overflow-hidden">
      <div className="relative">
        <img src={current.imageUrl} alt={current.title} className="w-full h-64 sm:h-80 md:h-96 object-cover" />
        <button
          aria-label="Previous"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white px-2 sm:px-3 py-1 rounded text-sm transition-colors"
          onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
        >
          Back
        </button>
      </div>
      <div className="p-4 sm:p-6">
        {current.category && (
          <span className="inline-block text-xs sm:text-sm text-neutral-600">{current.category}</span>
        )}
        <h3 className="mt-1 text-base sm:text-lg md:text-xl font-semibold text-neutral-900">{current.title}</h3>
        <div className="mt-2 flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-neutral-600 flex-wrap">
          <span>By {current.author}</span>
          <span>•</span>
          <span>{current.readTime}</span>
        </div>
        <p className="mt-3 text-sm sm:text-base text-neutral-700">
          In the heart of rural India, a quiet revolution is taking place...
        </p>
      </div>
    </div>
  );
};
