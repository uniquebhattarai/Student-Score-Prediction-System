import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    feedback: 'The prediction feature helped me identify struggling students early. I could intervene before exams instead of after.',
    name: 'Sunita Rai',
    role: 'Mathematics Teacher',
  },
  {
    feedback: 'Seeing my predicted scores motivated me to work harder. The dashboard shows exactly where I need to improve.',
    name: 'Shisir Bhattarai',
    role: 'Grade 10 Student',
  },
  {
    feedback: 'Managing attendance, assignments, and marksheets from a single admin panel saves our staff hours every week.',
    name: 'Rajesh Pandey',
    role: 'School Administrator',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24" style={{ background: '#F8FAFF' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-3">Testimonials</p>
          <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight"
            style={{ fontFamily: "'Sora', sans-serif", letterSpacing: '-1px' }}>
            What Users Are Saying
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={item}
              whileHover={{ boxShadow: '0 12px 40px rgba(37,99,235,0.1)' }}
              className="bg-white rounded-2xl p-7 border border-slate-200 flex flex-col gap-5 transition-shadow duration-300"
            >
              <div className="text-3xl text-green-200">❝</div>
              <p className="text-sm text-slate-500 leading-relaxed italic flex-1">
                "{t.feedback}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-bold text-base flex-shrink-0"
                  style={{ fontFamily: "'Sora', sans-serif" }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-800"
                    style={{ fontFamily: "'Sora', sans-serif" }}>
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide mt-0.5">
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Testimonials
