import React from 'react';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  imageUrl: string;
}

const events: EventCardProps[] = [
  { title: 'NGO Leadership Summit 2025', date: '15 Mar, 2025', location: 'Delhi', imageUrl: 'https://images.unsplash.com/photo-1529336953121-7b1292bcdc44?q=80&w=1200&auto=format&fit=crop' },
  { title: 'AMP President visits Kishanganj, Bihar', date: '23 Mar, 2025', location: 'Bihar', imageUrl: 'https://images.unsplash.com/photo-1535446830660-4443ad7570b7?q=80&w=1200&auto=format&fit=crop' },
  { title: 'AMP National Talent Search (NTS) 2025 Launch', date: '10 Mar, 2025', location: 'Mumbai', imageUrl: 'https://images.unsplash.com/photo-1540575467063-3d8d0ea1be51?q=80&w=1200&auto=format&fit=crop' },
];

const EventCard: React.FC<EventCardProps> = ({ title, date, location, imageUrl }) => (
  <div className="rounded-xl overflow-hidden bg-white shadow-card hover:shadow-lg transition-shadow">
    <div className="relative">
      <img src={imageUrl} alt={title} className="w-full h-40 sm:h-48 object-cover" />
      <span className="absolute left-2 sm:left-3 top-2 sm:top-3 bg-primary-700 text-white text-xs px-2 py-1 rounded-full">{date}</span>
    </div>
    <div className="p-3 sm:p-4">
      <h4 className="font-semibold text-sm sm:text-base text-neutral-900 line-clamp-2">{title}</h4>
      <div className="mt-2 text-xs sm:text-sm text-neutral-600">📍 {location}</div>
    </div>
  </div>
);

export const UpcomingEvents: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-primary-700 mb-4">Upcoming Events</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {events.map((e) => (
          <EventCard key={e.title} {...e} />
        ))}
      </div>
      <div className="mt-4 sm:mt-6 text-center">
        <a className="inline-block px-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors text-sm sm:text-base" href="/events">View All Events</a>
      </div>
    </div>
  );
};
