import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { navLinks, personalInfo } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';
import { useDarkMode } from '../hooks/useDarkMode';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const { isDark, toggle } = useDarkMode();

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className="max-w-7xl mt-3 mx-4 sm:mx-6 lg:mx-auto lg:px-8
          glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <button
          type="button"
          onClick={() => scrollTo('home')}
          className="font-heading text-xl font-bold gradient-text focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
        >
          {personalInfo.name}
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  ${active === link.id ? 'text-white' : 'text-muted hover:text-white'}`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg bg-primary/15 border border-primary/30 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2.5 rounded-xl text-muted hover:text-white hover:bg-white/5
              transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {isDark ? <MdLightMode className="w-5 h-5" /> : <MdDarkMode className="w-5 h-5" />}
          </button>

          <button
            type="button"
            className="lg:hidden p-2.5 rounded-xl text-white hover:bg-white/5
              focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {open ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="lg:hidden mx-4 mt-2 glass rounded-2xl overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col p-3 gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors
                      ${active === link.id ? 'bg-primary/20 text-white' : 'text-muted hover:bg-white/5 hover:text-white'}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
