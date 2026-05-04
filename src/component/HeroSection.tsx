import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

const scores = [
  { subject: 'Math',    value: 88, width: '88%', gradient: 'linear-gradient(90deg,#2563EB,#4F46E5)' },
  { subject: 'Science', value: 75, width: '75%', gradient: 'linear-gradient(90deg,#7C3AED,#6D28D9)' },
  { subject: 'English', value: 91, width: '91%', gradient: 'linear-gradient(90deg,#0284C7,#0369A1)' },
  { subject: 'Nepali',  value: 82, width: '82%', gradient: 'linear-gradient(90deg,#059669,#047857)' },
]

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">

      {/* Blobs */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #EFF6FF 0%, #E0E7FF 60%, transparent 100%)' }}
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F0FDF4 0%, #E0E7FF 60%, transparent 100%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            

            {/* Title */}
            <motion.h1 {...fadeUp(0.35)}
              className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-800 mb-5 tracking-tight"
              style={{ fontFamily: "'Sora', sans-serif", letterSpacing: '-1.5px' }}>
              Predict Student<br />
              <span className="text-green-600">Success</span> Before<br />
              <span className="text-emerald-600">It Happens</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p {...fadeUp(0.5)}
              className="text-base text-slate-500 max-w-md mb-9 leading-relaxed">
              An intelligent platform that uses machine learning to forecast academic performance —
              empowering teachers, students, and admins with data-driven insights.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.65)} className="flex gap-3 flex-wrap">
              <a href="#services"
                className="px-7 py-3.5 bg-green-600 hover:bg-emerald-600 text-white font-semibold text-sm rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-200 no-underline"
                style={{ fontFamily: "'Sora', sans-serif" }}>
                Explore Features
              </a>
              <a href="#why-us"
                className="px-7 py-3.5 border border-slate-300 hover:border-green-500 hover:text-green-600 text-slate-700 font-semibold text-sm rounded-xl transition-all duration-200 hover:-translate-y-0.5 no-underline"
                style={{ fontFamily: "'Sora', sans-serif" }}>
                Learn More
              </a>
            </motion.div>

          </div>

          {/* RIGHT — Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
            className="hidden md:block relative"
          >
            {/* Floating Top Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -top-30 z-10 bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-xl text-center"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              <div className="text-xl mb-0.5">🎯</div>
              <div className="text-xs text-slate-500 font-medium">Predicted Score</div>
              <div className="text-xl font-extrabold text-green-600">87.4</div>
            </motion.div>

            {/* Main Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xl relative overflow-hidden">
              {/* Sample Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none">
                <span className="text-[80px] font-black text-slate-50 opacity-70 -rotate-12 tracking-widest" style={{ fontFamily: "'Sora', sans-serif" }}>SAMPLE</span>
              </div>
              
              {/* Card Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl z-10"
                style={{ background: 'linear-gradient(90deg,#2563EB,#4F46E5)' }} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5 mt-1">
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm font-bold text-slate-800" style={{ fontFamily: "'Sora', sans-serif" }}>
                      Score Prediction - Ram Thapa
                    </span>
                    <span className="px-2.5 py-0.5 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-[10px] font-black uppercase tracking-widest rounded-md border border-amber-200 shadow-sm flex items-center gap-1">
                      Demo
                    </span>
                  </div>
                  <span className="px-2.5 py-1 bg-green-50 text-green-600 text-xs font-semibold rounded-lg">Grade 10</span>
                </div>

                {scores.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-slate-500 w-16 flex-shrink-0 font-medium">{s.subject}</span>
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1 + i * 0.15, ease: 'easeOut' }}
                        className="h-full rounded-full shadow-sm"
                        style={{ width: s.width, background: s.gradient, transformOrigin: 'left' }}
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-700 w-7 text-right">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
