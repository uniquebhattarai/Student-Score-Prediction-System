import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer id="contact" className="py-20" style={{ background: '#0F172A', color: '#94A3B8' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

          {/* Brand */}
          <div>
            <div className="text-xl font-extrabold text-white mb-3"
              style={{ fontFamily: "'Sora', sans-serif" }}>
              SSPS
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs mb-5">
              Student Score Prediction System — AI-powered academic intelligence for students, teachers, and institutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5"
              style={{ fontFamily: "'Sora', sans-serif" }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 list-none">
              {['Student Dashboard', 'Teacher Panel', 'Admin Console', 'Live Demo'].map(l => (
                <li key={l}>
                  <a href="#" className="text-sm text-slate-500 hover:text-green-400 transition-colors no-underline">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5"
              style={{ fontFamily: "'Sora', sans-serif" }}>
              Features
            </h4>
            <ul className="flex flex-col gap-3 list-none">
              {['Score Prediction', 'Marksheet View', 'Attendance Mgmt', 'Assignment Mgmt'].map(l => (
                <li key={l}>
                  <a href="#" className="text-sm text-slate-500 hover:text-green-400 transition-colors no-underline">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5"
              style={{ fontFamily: "'Sora', sans-serif" }}>
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <span>📍</span><span>Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500"
          style={{ borderColor: '#1E293B' }}>
          <p>© {new Date().getFullYear()} SSPS Student Score Prediction System. All rights reserved.</p>
          <p className="flex items-center gap-1 font-medium">
            Made with <span className="text-red-500">❤️</span> by Unique Bhattarai
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors no-underline">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors no-underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
