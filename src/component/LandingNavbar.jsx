import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate,Link } from 'react-router-dom'
import { useAuth } from '@context/AuthContext'
import { FiMenu, FiX } from 'react-icons/fi'
import { LayoutDashboard, LogOut, Lock } from 'lucide-react'


const LandingNavbar = () => {
  const navigate = useNavigate()
  const { isAuthenticated, logout, role } = useAuth()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Resolve dashboard path based on role
  const dashboardPath =
    role === 'student'
      ? '/student/dashboard'
      : role === 'teacher'
      ? '/teacher/dashboard'
      : role === 'admin'
      ? '/admin/dashboard'
      : '/student/dashboard'

  const navLinks = [
    { name: 'Features',     href: '#services' },
    { name: 'About',        href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact',      href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 border-b border-slate-200
        ${isScrolled ? 'py-2 shadow-md' : 'py-3'}
      `}
      style={{ background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 no-underline"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
            </svg>
          </div>
          <span className="text-xl font-extrabold text-green-700 tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
            SSPS
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-green-600 transition-colors no-underline"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <>
              {/* Dashboard Button */}
              <button
                onClick={() => navigate(dashboardPath)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-600 hover:from-green-500 hover:to-emerald-700 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </button>

              {/* Logout Button */}
              <button
                onClick={logout}
                className="flex items-center gap-2 px-4 py-2 border border-red-100 bg-red-50 text-red-600 rounded-xl text-sm font-medium hover:bg-red-100 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </>
          ) : (
            /* Login Button */
            <button
              onClick={() => navigate('/login')}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-600 hover:from-green-500 hover:to-emerald-700 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              <Lock className="w-4 h-4" />
              Login
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 px-6 pb-4 flex flex-col gap-4 overflow-hidden"
          >
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 font-medium hover:text-green-600 no-underline"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <div className="h-px bg-slate-100" />

            {isAuthenticated ? (
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => { navigate(dashboardPath); setMobileOpen(false) }}
                  className="w-full py-3 bg-gradient-to-r from-green-400 to-emerald-600 hover:from-green-500 hover:to-emerald-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Go to Dashboard
                </button>
                <button
                  onClick={logout}
                  className="w-full py-3 bg-red-50 text-red-600 font-semibold rounded-xl flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => { navigate('/login'); setMobileOpen(false) }}
                className="w-full py-3 bg-gradient-to-r from-green-400 to-emerald-600 hover:from-green-500 hover:to-emerald-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                <Lock className="w-4 h-4" />
                Login
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default LandingNavbar
