import React from 'react';
import { Link } from 'react-router-dom';

export const ZakatFund: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <nav className="text-sm text-neutral-600 mb-4">
          <Link to="/" className="hover:text-primary-700">Home</Link> / 
          <Link to="/programs" className="hover:text-primary-700"> Programs</Link> / 
          <span className="text-neutral-900"> AMP Zakat Fund (AZF)</span>
        </nav>
        <h1 className="text-4xl font-display font-bold text-primary-700 mb-4">AMP Zakat Fund (AZF)</h1>
        <p className="text-lg text-neutral-700">Transforming lives through Shariah-compliant charitable giving</p>
      </div>

      <div className="bg-primary-50 border-l-4 border-primary-700 p-6 mb-8">
        <h3 className="font-display font-bold text-primary-700 text-xl mb-2">About Zakat</h3>
        <p className="text-neutral-700">
          Zakat is one of the Five Pillars of Islam and represents mandatory charitable giving for those who meet specific 
          wealth criteria. It purifies wealth and helps redistribute resources to those in need, creating a more equitable society.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">2013</div>
          <div className="text-neutral-600">Program Started</div>
        </div>
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">10,000+</div>
          <div className="text-neutral-600">Beneficiaries Reached</div>
        </div>
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">₹5+ Cr</div>
          <div className="text-neutral-600">Zakat Distributed</div>
        </div>
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">100%</div>
          <div className="text-neutral-600">Shariah Compliant</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">About AMP Zakat Fund</h2>
        <p className="text-neutral-700 mb-4">
          Established in 2013, the AMP Zakat Fund (AZF) is a dedicated initiative to collect and distribute Zakat in accordance 
          with Islamic principles. We ensure that your Zakat reaches deserving recipients in the most effective and transparent manner.
        </p>
        <p className="text-neutral-700 mb-4">
          Our Zakat distribution is overseen by qualified Islamic scholars and follows strict Shariah guidelines. We maintain 
          complete transparency in our operations, and donors receive regular updates on how their contributions are making an impact.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Areas of Zakat Distribution</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">📚 Education</h3>
            <p className="text-sm text-neutral-700">School fees, books, and educational support for underprivileged students</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">🏥 Medical Aid</h3>
            <p className="text-sm text-neutral-700">Healthcare expenses, medicines, and medical emergencies</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">💼 Livelihoods</h3>
            <p className="text-sm text-neutral-700">Business setup support and self-employment assistance</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">👶 Orphan Care</h3>
            <p className="text-sm text-neutral-700">Support for orphans' education and basic needs</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">👵 Widow Support</h3>
            <p className="text-sm text-neutral-700">Financial assistance for widows and elderly</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">🆘 Emergency Relief</h3>
            <p className="text-sm text-neutral-700">Disaster relief and emergency assistance</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Who Can Receive Zakat?</h2>
        <p className="text-neutral-700 mb-4">According to Islamic law, Zakat can be given to eight categories of recipients:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-neutral-900">1. Al-Fuqara (The Poor)</h3>
            <p className="text-sm text-neutral-700">Those who have little to no wealth or income</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-neutral-900">2. Al-Masakin (The Needy)</h3>
            <p className="text-sm text-neutral-700">Those whose income doesn't meet their basic needs</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-neutral-900">3. Amil (Zakat Administrators)</h3>
            <p className="text-sm text-neutral-700">Those who collect and distribute Zakat</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-neutral-900">4. Muallaf (New Muslims)</h3>
            <p className="text-sm text-neutral-700">Those who recently embraced Islam</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-neutral-900">5. Ar-Riqab (Freeing Captives)</h3>
            <p className="text-sm text-neutral-700">Freeing those in bondage or debt</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-neutral-900">6. Al-Gharimin (The Debt-Ridden)</h3>
            <p className="text-sm text-neutral-700">Those in overwhelming debt</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-neutral-900">7. Fi Sabilillah (In the Path of Allah)</h3>
            <p className="text-sm text-neutral-700">Those striving in the way of Allah</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-neutral-900">8. Ibnus-Sabil (The Stranded Traveler)</h3>
            <p className="text-sm text-neutral-700">Travelers in need of assistance</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Zakat Calculator</h2>
        <div className="bg-cream-100 p-6 rounded-lg mb-4">
          <p className="text-neutral-700 mb-4">
            Zakat is calculated at 2.5% of your total savings and assets that have been held for one lunar year (hawl). 
            This includes cash, gold, silver, investments, and business assets.
          </p>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold text-neutral-900 mb-2">Quick Calculation:</h3>
            <p className="text-neutral-700">Total Zakatable Assets × 2.5% = Your Zakat Amount</p>
          </div>
        </div>
        <button className="bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800">
          Use Detailed Zakat Calculator
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Why Give Through AMP?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="font-semibold text-neutral-900 mb-2">Shariah Compliant</h3>
            <p className="text-sm text-neutral-700">All distributions verified by Islamic scholars</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="font-semibold text-neutral-900 mb-2">Complete Transparency</h3>
            <p className="text-sm text-neutral-700">Detailed reports on fund utilization</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-semibold text-neutral-900 mb-2">Direct Impact</h3>
            <p className="text-sm text-neutral-700">100% of Zakat reaches beneficiaries</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Beneficiary Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-neutral-200 p-6 rounded-lg">
            <p className="text-neutral-700 italic mb-4">
              "Through AMP's Zakat Fund, my children received education support when I couldn't afford their school fees after 
              my husband's death. Today my eldest son is in college."
            </p>
            <div className="font-semibold text-neutral-900">Ayesha Khatoon</div>
            <div className="text-sm text-neutral-600">Widow, Bihar</div>
          </div>
          <div className="border border-neutral-200 p-6 rounded-lg">
            <p className="text-neutral-700 italic mb-4">
              "The Zakat assistance helped me start my small grocery shop. Now I can support my family with dignity and 
              don't need to depend on others."
            </p>
            <div className="font-semibold text-neutral-900">Salman Sheikh</div>
            <div className="text-sm text-neutral-600">Shop Owner, West Bengal</div>
          </div>
        </div>
      </div>

      <div className="bg-primary-700 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-display font-bold mb-4">Pay Your Zakat Today</h2>
        <p className="mb-6">Fulfill your religious obligation and transform lives through your Zakat contribution</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100">
            Donate Zakat Now
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700">
            Calculate Zakat
          </button>
        </div>
      </div>
    </div>
  );
};
