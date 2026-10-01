import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowDown } from 'react-icons/fa';
import { personalInfo, stats } from '../data/portfolio';
import Particles from './ui/Particles';
import AnimatedCounter from './ui/AnimatedCounter';

const roles = ['Software Engineer', 'Full-Stack Developer', 'Problem Solver'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  // Typing animation for rotating titles
  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (display.length < current.length) {
            setDisplay(current.slice(0, display.length + 1));
          } else {
            setTimeout(() => setDeleting(true), 1600);
          }
        } else if (display.length > 0) {
          setDisplay(current.slice(0, display.length - 1));
        } else {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      },
      deleting ? 40 : 90
    );
    return () => clearTimeout(timeout);
  }, [display, deleting, roleIndex]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-28 md:pt-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
      <Particles count={50} />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <motion.p
            className="text-secondary text-sm font-medium tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            className="h-10 sm:h-12 mb-6 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-white">
              {display}
              <span className="inline-block w-0.5 h-6 sm:h-7 ml-1 bg-secondary animate-pulse align-middle" />
            </h2>
          </motion.div>

          <motion.p
            className="text-muted text-base sm:text-lg leading-relaxed max-w-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <button type="button" onClick={() => scrollTo('projects')} className="btn-primary">
              View Projects
              <FaArrowDown className="w-3.5 h-3.5" />
            </button>
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-outline"
              aria-label="Download Resume"
            >
              <FaDownload className="w-3.5 h-3.5" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
          >
            {[
              { href: personalInfo.github, Icon: FaGithub, label: 'GitHub' },
              { href: personalInfo.linkedin, Icon: FaLinkedin, label: 'LinkedIn' },
              { href: `mailto:${personalInfo.email}`, Icon: FaEnvelope, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-xl glass text-muted hover:text-primary hover:shadow-glow
                  transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Floating avatar + stats */}
        <motion.div
          className="relative flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <motion.div
            className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80"
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/30 to-secondary/20 blur-2xl" />
            <div className="relative w-full h-full rounded-full glass border-2 border-white/10 overflow-hidden flex items-center justify-center shadow-glow">
              {/* Avatar placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-surface-solid to-background flex items-center justify-center">
                <span className="font-heading text-6xl sm:text-7xl font-bold gradient-text">
                  {personalInfo.name.charAt(0)}
                </span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 px-4 py-2 rounded-xl glass text-sm font-medium text-secondary border border-secondary/30">
              Available for work
            </div>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-lg">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass rounded-2xl p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <p className="font-heading text-2xl font-bold gradient-text">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-muted text-xs mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
