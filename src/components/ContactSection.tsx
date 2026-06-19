import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Languages, Heart, GraduationCap, MapPin, Smile, MessageCircle } from 'lucide-react';
import { Profile } from '../types';

interface ContactProps {
  profile: Profile;
  languages: string[];
  hobbies: string[];
}

export default function ContactSection({ profile, languages, hobbies }: ContactProps) {
  return (
    <section
      id="contact"
      className="py-24 bg-white px-6 print:hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl font-display font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto" />
          <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
            Interested in collaboration or holding a technical interview? Connect directly via the details below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Address & Contacts / Left Hand */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-display font-bold text-gray-950 mb-1 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-emerald-500" /> Complete Contact Info
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {/* Email Card */}
              <motion.a
                href={`mailto:${profile.email}`}
                whileHover={{ y: -3 }}
                className="p-5 bg-slate-50 hover:bg-emerald-50/40 border border-gray-100 hover:border-emerald-200/80 rounded-2xl flex items-center gap-4.5 transition-all group"
              >
                <div className="w-12 h-12 bg-white group-hover:bg-emerald-500 group-hover:text-white rounded-xl flex items-center justify-center border border-gray-100 transition-colors">
                  <Mail className="w-5 h-5 text-emerald-600 group-hover:text-inherit" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block font-bold">
                    Email Address
                  </span>
                  <span className="text-sm font-semibold text-gray-800 font-mono block mt-0.5">
                    {profile.email}
                  </span>
                  <span className="text-[11px] text-gray-400 block mt-0.5 group-hover:text-emerald-600 transition-colors">
                    Click to compose email
                  </span>
                </div>
              </motion.a>

              {/* Phone Card */}
              <motion.a
                href={`tel:${profile.phone}`}
                whileHover={{ y: -3 }}
                className="p-5 bg-slate-50 hover:bg-emerald-50/40 border border-gray-100 hover:border-emerald-200/80 rounded-2xl flex items-center gap-4.5 transition-all group"
              >
                <div className="w-12 h-12 bg-white group-hover:bg-emerald-500 group-hover:text-white rounded-xl flex items-center justify-center border border-gray-100 transition-colors">
                  <Phone className="w-5 h-5 text-emerald-600 group-hover:text-inherit" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block font-bold">
                    Mobile Phone
                  </span>
                  <span className="text-sm font-semibold text-gray-800 font-mono block mt-0.5">
                    +91 {profile.phone}
                  </span>
                  <span className="text-[11px] text-gray-400 block mt-0.5 group-hover:text-emerald-600 transition-colors">
                    Available for phone & message
                  </span>
                </div>
              </motion.a>

              {/* Location Card */}
              <div className="p-5 bg-slate-50 border border-gray-100 rounded-2xl flex items-center gap-4.5">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-100">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block font-bold">
                    Current Location
                  </span>
                  <span className="text-sm font-semibold text-gray-800 block mt-0.5">
                    {profile.location}
                  </span>
                  <span className="text-[11px] text-gray-400 block mt-0.5">
                    Tamil Nadu, Southern India (IST)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Languages & Hobbies Card Grid / Right Hand */}
          <div className="lg:col-span-6 space-y-6">
            {/* Languages Known */}
            <div className="bg-slate-50 border border-gray-100 p-6 rounded-2xl space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-gray-400 flex items-center gap-2">
                <Languages className="w-4 h-4 text-emerald-600" /> Languages Known
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3.5 py-1.5 bg-white border border-gray-150 text-gray-700 text-xs font-semibold rounded-xl"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Hobbies / Soft interests */}
            <div className="bg-slate-50 border border-gray-100 p-6 rounded-2xl space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-gray-400 flex items-center gap-2">
                <Heart className="w-4 h-4 text-emerald-600" /> Hobbies & Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby) => (
                  <span
                    key={hobby}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-100 text-emerald-850 text-xs font-medium rounded-full transition-colors"
                  >
                    <Smile className="w-3 h-3 text-emerald-500" />
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
