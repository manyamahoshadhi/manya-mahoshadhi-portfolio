import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 section-padding !py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="text-muted text-sm">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-muted/70 text-xs mt-1 flex items-center justify-center sm:justify-start gap-1">
            Built with React & Tailwind CSS
            <FaHeart className="w-3 h-3 text-primary/70" aria-hidden />
          </p>
        </div>

        <div className="flex items-center gap-3">
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
              className="p-2.5 rounded-xl text-muted hover:text-primary hover:bg-white/5
                transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
