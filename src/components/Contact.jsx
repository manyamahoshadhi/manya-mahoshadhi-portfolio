import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaPaperPlane,
  FaCheckCircle,
} from 'react-icons/fa';
import SectionHeading from './ui/SectionHeading';
import { personalInfo } from '../data/portfolio';

const socials = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    Icon: FaEnvelope,
  },
  {
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: personalInfo.linkedin,
    Icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    value: 'View repositories',
    href: personalInfo.github,
    Icon: FaGithub,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!form.email.trim()) next.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email';
    if (!form.message.trim()) next.message = 'Message is required';
    else if (form.message.trim().length < 10) next.message = 'Message is too short';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Demo submit — wire to Formspree / backend as needed
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Let's talk"
          title="Get In Touch"
          subtitle="Open to new opportunities, collaborations, and interesting conversations."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {socials.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-primary/40
                  hover:shadow-glow transition-all duration-300 group"
              >
                <span className="p-3 rounded-xl bg-primary/15 text-primary group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm text-muted">{label}</p>
                  <p className="font-medium text-white">{value}</p>
                </div>
              </a>
            ))}

            <a
              href={personalInfo.resumeUrl}
              download
              className="flex items-center justify-center gap-2 btn-primary w-full mt-2"
            >
              <FaDownload className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
            {/*}
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 md:p-8 space-y-5"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center" role="status">
                <FaCheckCircle className="w-12 h-12 text-secondary mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-2">Message sent!</h3>
                <p className="text-muted text-sm mb-6">
                  Thanks for reaching out — I&apos;ll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-outline text-sm"
                >
                  Send another
                </button>
              </div>
            ) : (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10
                      text-white placeholder:text-muted/60 focus:outline-none focus:border-primary/50
                      focus:ring-1 focus:ring-primary/40 transition-colors"
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10
                      text-white placeholder:text-muted/60 focus:outline-none focus:border-primary/50
                      focus:ring-1 focus:ring-primary/40 transition-colors"
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10
                      text-white placeholder:text-muted/60 focus:outline-none focus:border-primary/50
                      focus:ring-1 focus:ring-primary/40 transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button type="submit" className="btn-primary w-full">
                  <FaPaperPlane className="w-4 h-4" />
                  Send Message
                </button>
              </>
            )}
          </motion.form>*/}
        </div>
      </div>
    </section>
  );
}
