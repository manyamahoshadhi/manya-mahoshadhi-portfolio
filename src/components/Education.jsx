import { motion } from 'framer-motion';
import { FaUniversity, FaBookOpen } from 'react-icons/fa';
import SectionHeading from './ui/SectionHeading';
import { education } from '../data/portfolio';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Academic background"
          title="Education"
          subtitle="Formal learning that grounded my engineering foundation."
        />

        <motion.div
          className="relative max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-secondary/40" />

          {education.map((edu) => (
            <motion.div key={edu.id} variants={item} className="relative pl-12 md:pl-16 mb-8 last:mb-0">
              <span className="absolute left-2.5 md:left-[1.1rem] top-6 w-3.5 h-3.5 rounded-full bg-primary shadow-glow border-2 border-background" />

              <article className="glass rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-heading text-lg md:text-xl font-semibold mb-1">
                      {edu.degree}
                    </h3>
                    <p className="flex items-center gap-2 text-secondary">
                      <FaUniversity className="w-4 h-4" />
                      {edu.university}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-lg text-xs bg-white/5 border border-white/10 text-muted">
                    {edu.year}
                  </span>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-sm font-medium text-white mb-3">
                    <FaBookOpen className="w-3.5 h-3.5 text-secondary" />
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 rounded-lg text-xs bg-white/5 border border-white/10 text-muted"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
