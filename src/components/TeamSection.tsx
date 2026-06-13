'use client';

import Image from 'next/image';
import { teamMembers } from '@/lib/data';

export default function TeamSection() {
  // First 2 are owners, rest are consultants
  const owners = teamMembers.slice(0, 2);
  const consultants = teamMembers.slice(2);

  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm">Our Team</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our team of dedicated professionals who are here to assist you in all your real estate needs. 
            With years of experience and a deep understanding of the Dubai real estate market, we are committed to 
            providing you with exceptional service.
          </p>
          <div className="section-divider w-24 mx-auto mt-6" />
        </div>

        {/* Owners - Top Row (Larger) */}
        <div className="grid grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
          {owners.map((member, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="relative mb-4 mx-auto w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gold-400 shadow-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gold-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Consultants - Bottom Row (Smaller) */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {consultants.map((member, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="relative mb-3 mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-0.5">
                {member.name}
              </h3>
              <p className="text-xs text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}