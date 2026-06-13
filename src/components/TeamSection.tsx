'use client';

import Image from 'next/image';
import { teamMembers } from '@/lib/data';

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm">Our Experts</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to helping you find your perfect property in Dubai.
          </p>
          <div className="section-divider w-24 mx-auto mt-6" />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="relative mb-4 mx-auto w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-gold-600 transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}