import React from 'react'
import { motion } from 'framer-motion'

const cards = [
  { icon: '🤖', bg: '#EFF6FF', title: 'ML Score Prediction',    desc: 'Feed student data into our trained model and receive academic performance predictions in real time.' },
  { icon: '📊', bg: '#EDE9FE', title: 'Data Visualization',     desc: 'Interactive charts comparing predicted vs. actual scores, attendance trends, and assignment completion rates.' },
  { icon: '🔐', bg: '#F0FDF4', title: 'JWT Authentication',     desc: 'Secure login with token-based authentication and role-based access for students, teachers, and admins.' },
  { icon: '🎓', bg: '#FFF7ED', title: 'Role-Based Dashboards',  desc: 'Tailored experiences for each user type — students view their own data, teachers manage classes, admins oversee all.' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const Services = () => {
  return (
    <section id="services" className="py-24" style={{ background: '#F8FAFF' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-3">Core Features</p>
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4 tracking-tight"
            style={{ fontFamily: "'Sora', sans-serif", letterSpacing: '-1px' }}>
            Everything You Need, In One Platform
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            From score prediction to role-based dashboards — built for the entire academic ecosystem.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, i) => (
            <motion.div key={i} variants={item}
              whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(37,99,235,0.12)' }}
              className="bg-white rounded-2xl p-8 border border-slate-200 transition-colors duration-300 cursor-default"
              style={{ borderColor: '#E2E8F0' }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{ background: card.bg }}
              >
                {card.icon}
              </motion.div>
              <h3 className="text-base font-bold text-slate-800 mb-2"
                style={{ fontFamily: "'Sora', sans-serif" }}>
                {card.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
