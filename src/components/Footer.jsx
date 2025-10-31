import React from 'react'
import { motion } from 'framer-motion'
import GlassSurface from './GlassSurface'
import { useTheme } from '../context/ThemeContext'

const Footer = () => {
  const { theme } = useTheme()
  const footerLinks = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'Download', href: '#home' },
      { label: 'Pricing', href: '#why-shortly' },
      { label: 'FAQ', href: '#footer' },
    ],
    Company: [
      { label: 'About', href: '#why-shortly' },
      { label: 'Press', href: '#why-shortly' },
      { label: 'Careers', href: '#footer' },
      { label: 'Contact', href: '#footer' },
    ],
    Legal: [
      { label: 'Privacy', href: '#footer' },
      { label: 'Terms', href: '#footer' },
      { label: 'Cookie Policy', href: '#footer' },
      { label: 'Licenses', href: '#footer' },
    ]
  }

  return (
    <footer className={`py-12 sm:py-14 md:py-16 px-0 ${theme === 'light' ? 'bg-gradient-to-b from-purple-100/30 via-purple-50/20 to-white' : 'bg-dark-secondary'}`}>
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="liquid-glass rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-gradient">SHORTLY</span>
              </h3>
              <p className={`mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                Your daily dose of hyper-local news delivered in bite-sized content.
                Stay connected with your community.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-wrap gap-4">
                <GlassSurface
                  width={140}
                  height={40}
                  borderRadius={20}
                  brightness={35}
                  opacity={0.65}
                  blur={8}
                  displace={0.03}
                  distortionScale={-30}
                  className="hover-lift"
                >
                  <a href="#home" className="flex items-center gap-2 text-sm px-4 py-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    App Store
                  </a>
                </GlassSurface>
                <GlassSurface
                  width={140}
                  height={40}
                  borderRadius={20}
                  brightness={35}
                  opacity={0.65}
                  blur={8}
                  displace={0.03}
                  distortionScale={-30}
                  className="hover-lift"
                >
                  <a href="https://play.google.com/store/apps/details?id=com.dridha.shortly" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm px-4 py-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    Google Play
                  </a>
                </GlassSurface>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className={`font-semibold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className={`hover:text-purple-600 transition-colors duration-200 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300 hover:text-white'}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className={`mt-10 pt-6 border-t ${theme === 'light' ? 'border-purple-200/60' : 'border-white/10'}`}>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className={`text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                © 2024 Dridha Technologies. All rights reserved.
              </p>
              {/* Social Icons */}
              <div className="flex gap-3">
                {/* Instagram */}
                <GlassSurface width={40} height={40} borderRadius={20} brightness={35} opacity={0.6} blur={6} displace={0.02} distortionScale={-25} className="hover-lift">
                  <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`w-full h-full flex items-center justify-center ${theme === 'light' ? 'text-purple-800' : 'text-purple-300'}`}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </motion.a>
                </GlassSurface>
                {/* Twitter */}
                <GlassSurface width={40} height={40} borderRadius={20} brightness={35} opacity={0.6} blur={6} displace={0.02} distortionScale={-25} className="hover-lift">
                  <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`w-full h-full flex items-center justify-center ${theme === 'light' ? 'text-purple-800' : 'text-purple-300'}`}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </motion.a>
                </GlassSurface>
                {/* Facebook */}
                <GlassSurface width={40} height={40} borderRadius={20} brightness={35} opacity={0.6} blur={6} displace={0.02} distortionScale={-25} className="hover-lift">
                  <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`w-full h-full flex items-center justify-center ${theme === 'light' ? 'text-purple-800' : 'text-purple-300'}`}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>
                  </motion.a>
                </GlassSurface>
                {/* LinkedIn */}
                <GlassSurface width={40} height={40} borderRadius={20} brightness={35} opacity={0.6} blur={6} displace={0.02} distortionScale={-25} className="hover-lift">
                  <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`w-full h-full flex items-center justify-center ${theme === 'light' ? 'text-purple-800' : 'text-purple-300'}`}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.2c0-1.7 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.7V24H8z"/></svg>
                  </motion.a>
                </GlassSurface>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
