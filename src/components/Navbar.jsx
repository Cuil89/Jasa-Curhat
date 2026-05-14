import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { navItems } from '../data';
import { easeOut } from '../lib/motion';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="site-header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.65, ease: easeOut }}
    >
      <a className="brand" href="#home" aria-label="Jasa Curhat">
        <span className="brand-mark">JC</span>
        <span>JasaCurhat</span>
      </a>

      <nav className="desktop-nav" aria-label="Navigasi utama">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#kontak">
        Booking
        <ArrowRight size={18} strokeWidth={2.7} />
      </a>

      <button
        className="icon-btn mobile-toggle"
        type="button"
        aria-label={open ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            aria-label="Navigasi mobile"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#kontak" onClick={() => setOpen(false)}>
              Booking sesi
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
