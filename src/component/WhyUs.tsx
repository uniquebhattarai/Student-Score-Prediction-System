import React from 'react'
import { motion } from 'framer-motion'

const features = [
  { icon: '⚡', title: 'Real-Time ML Inference',           desc: 'Scores are predicted on-the-fly through a Django REST API connected to a trained ML model — no delays, always current.' },
  { icon: '📋', title: 'Attendance & Assignment Tracking', desc: 'Comprehensive modules for managing attendance, tracking assignments, and grading submissions — all in one place.' },
  { icon: '🛡️', title: 'Secure & Role-Governed Access',   desc: 'Every route and dashboard is gated by role — students, teachers, and admins each see only what they should.' },
]

const metrics = [
  { num: '3+',   lbl: 'User Roles' },
  { num: 'Live', lbl: 'ML API' },
  { num: 'JWT',  lbl: 'Auth System' },
  { num: 'Vite', lbl: 'React Frontend' },
]

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-3"> Why Student Score Prediction System ?</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-8 leading-tight"
              style={{ fontFamily: "'Sora', sans-serif", letterSpacing: '-1px' }}>
              Built for<br />Modern Academic<br />Institutions
            </h2>

            <div className="flex flex-col gap-7">
              {features.map((f, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center text-xl flex-shrink-0 mt-0.5">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-800 mb-1"
                      style={{ fontFamily: "'Sora', sans-serif" }}>
                      {f.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Accuracy Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            

            <div className="rounded-3xl p-8 border border-slate-200" style={{ background: '#F8FAFF' }}>
              
              {/* Mini metrics grid */}
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((m, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className="bg-white rounded-2xl p-4 border border-slate-200 text-center"
                  >
                    <div className="text-2xl font-extrabold text-emerald-600"
                      style={{ fontFamily: "'Sora', sans-serif" }}>
                      {m.num}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">{m.lbl}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default WhyUs
