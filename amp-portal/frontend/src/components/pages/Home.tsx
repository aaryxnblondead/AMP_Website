import { SectionHeading } from '../home/SectionHeading';
import { HeroCarousel } from '../home/HeroCarousel';
import { NGOOfMonth } from '../home/NGOOfMonth';
import { UpcomingEvents } from '../home/UpcomingEvents';
 

export const Home: React.FC = () => {
  return (
    <div className="">
      {/* Top updates ribbon */}
      <div className="bg-neutral-200 text-sm text-neutral-800">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap gap-6">
          <span>Latest Updates: New CBR funding opportunities announced for education sector</span>
          <span>• NGO Awards 2025 nominations open - Submit by March 31st</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <SectionHeading title="Our Projects" subtitle="Access valuable resources, funding opportunities, and learning materials for NGOs" />
        <HeroCarousel />
      </div>

      {/* Beige section with NGO of the Month and Upcoming Events */}
      <div className="bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <NGOOfMonth />
          </div>
          <div className="lg:col-span-2">
            <UpcomingEvents />
          </div>
        </div>
      </div>

      {/* Footer is rendered once globally in App.tsx */}
    </div>
  );
};
