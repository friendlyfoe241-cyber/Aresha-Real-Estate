'use client';

import { MapPin } from 'lucide-react';
import { neighborhoods } from '@/lib/data';

export default function NeighborhoodsSection() {
  return (
    <section id="neighborhoods" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm">Explore Dubai</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Neighborhoods to Live & Invest
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover Dubai&apos;s most prestigious neighborhoods, each offering unique lifestyle benefits 
            and investment opportunities.
          </p>
          <div className="section-divider w-24 mx-auto mt-6" />
        </div>

        {/* Neighborhoods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {neighborhoods.map((neighborhood, index) => (
            <div
              key={index}
              className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-gold-500/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-gold-500 group-hover:text-slate-900 transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-500 transition-colors duration-300">
                    {neighborhood.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {neighborhood.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Investment Benefits */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Real Estate Investment Benefits in Dubai
            </h3>
            <p className="text-gray-400">Discover why Dubai is the world&apos;s top real estate destination</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: '10 Years Golden Visa', emoji: '🏆' },
              { title: '100% Vastu Compliant', emoji: '✓' },
              { title: 'No Income Tax', emoji: '💰' },
              { title: 'No Property Tax', emoji: '📊' },
              { title: 'High Capital Gain', emoji: '📈' },
              { title: '24/7 Security & CCTV', emoji: '🛡️' },
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-br from-gold-500/20 to-gold-600/10 rounded-xl border border-gold-500/30 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl mb-2">{benefit.emoji}</div>
                <p className="text-sm font-medium text-white">{benefit.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}