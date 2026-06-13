'use client';

import { Home, Key, TrendingUp, Building } from 'lucide-react';
import { services } from '@/lib/data';

const iconMap: { [key: string]: React.ElementType } = {
  Home,
  Key,
  TrendingUp,
  Building,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to meet your unique needs.
          </p>
          <div className="section-divider w-24 mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Home;
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gold-500/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gold-500/30">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="mt-16 p-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Building Amenities</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  '24 Hour Security & CCTV',
                  'Swimming Pool',
                  'Fully Equipped Gym',
                  'Covered Parking',
                  'Children\'s Play Area',
                  'Luxury Lobby with Concierge',
                  'Retail Outlets',
                  'Fine Dining',
                ].map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-300">
                    <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold text-white mb-4">Comprehensive Support</h3>
              <p className="text-gray-400 mb-6">
                From property search to legal documentation, we provide end-to-end support 
                ensuring a seamless real estate experience in Dubai.
              </p>
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-slate-900 font-semibold rounded-xl hover:bg-gold-400 transition-all duration-300"
              >
                Get Expert Guidance
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}