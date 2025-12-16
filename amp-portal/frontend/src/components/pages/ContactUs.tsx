import React, { useState } from 'react';
import { CONTACT_INFO } from '../../config/constants';

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // Store in localStorage as backup until API is ready
      const contacts = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
      contacts.push({
        ...formData,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('contact_submissions', JSON.stringify(contacts));
      
      // TODO: Uncomment when API is ready
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // if (!response.ok) throw new Error('Failed to send message');
      
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="mb-6 sm:mb-8 text-center">
        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl text-neutral-900 mb-3 sm:mb-4">Get In Touch</h1>
        <p className="text-sm sm:text-base lg:text-lg text-neutral-700">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-lg shadow-card p-6">
            <h2 className="font-display text-xl font-bold text-neutral-900 mb-4">Contact Information</h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">📍</span>
                <div>
                  <div className="font-semibold text-neutral-900 mb-1">Address</div>
                  <span>68/69 Umar Manzil, 5th Road, Khar (W), Mumbai 400052, India</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">✉️</span>
                <div>
                  <div className="font-semibold text-neutral-900 mb-1">Email</div>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary-700 hover:underline">{CONTACT_INFO.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">📞</span>
                <div>
                  <div className="font-semibold text-neutral-900 mb-1">Phone</div>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`} className="text-primary-700 hover:underline">{CONTACT_INFO.phone}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 rounded-lg p-6 border-l-4 border-primary-700">
            <h3 className="font-display font-bold text-primary-700 mb-2">Office Hours</h3>
            <div className="text-sm text-neutral-700 space-y-1">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-card p-6 sm:p-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 mb-6">Send Us a Message</h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 font-semibold">✓ Message sent successfully!</p>
                <p className="text-sm text-green-600 mt-1">We'll get back to you within 24-48 hours.</p>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 font-semibold">✗ Error</p>
                <p className="text-sm text-red-600 mt-1">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700 transition-colors"
                    placeholder="+91 1234567890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="nts">NTS 2025</option>
                    <option value="programs">Programs & Events</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="donation">Donations & Zakat</option>
                    <option value="ngo">NGO Partnership</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700 transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-700 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
