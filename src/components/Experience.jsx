import { motion } from 'framer-motion';
import { FaBriefcase, FaTrophy, FaCheckCircle } from 'react-icons/fa';
import SectionHeading from './ui/SectionHeading';
import { experience } from '../data/portfolio';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/[0.03] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          eyebrow="Career path"
          title="Experience"
          subtitle="Roles and contributions that shaped how I ship software."
        />

        <motion.div
          className="relative max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          {experience.map((job) => (
            <motion.div key={job.id} variants={item} className="relative pl-12 md:pl-16 mb-10 last:mb-0">
              <span className="absolute left-2.5 md:left-[1.1rem] top-6 w-3.5 h-3.5 rounded-full bg-secondary shadow-glow-cyan border-2 border-background" />

              <article className="glass rounded-2xl p-6 md:p-8 hover:border-secondary/30 transition-colors duration-300">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FaBriefcase className="w-4 h-4 text-primary" />
                      <h3 className="font-heading text-xl font-semibold">{job.position}</h3>
                    </div>
                    <p className="text-secondary font-medium">{job.company}</p>
                  </div>
                  <span className="px-3 py-1 rounded-lg text-xs bg-white/5 border border-white/10 text-muted whitespace-nowrap">
                    {job.duration}
                  </span>
                </div>

                <div className="mb-5">
                  <h4 className="text-sm font-medium text-white mb-2">Responsibilities</h4>
                  <ul className="space-y-2">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="flex gap-2 text-sm text-muted leading-relaxed">
                        <FaCheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                    <FaTrophy className="w-3.5 h-3.5 text-secondary" />
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    {job.achievements.map((a) => (
                      <li
                        key={a}
                        className="text-sm text-muted leading-relaxed pl-3 border-l-2 border-secondary/40"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
