import { motion } from 'framer-motion';
import { FaGraduationCap, FaBullseye, FaHeart } from 'react-icons/fa';
import SectionHeading from './ui/SectionHeading';
import { about } from '../data/portfolio';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Get to know me"
          title="Professional Summary"
          subtitle="A glimpse into my journey, ambitions, and what drives me as an engineer."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-6"
          >
            <motion.div variants={item} className="glass rounded-2xl p-6 md:p-8">
              <p className="text-muted leading-relaxed text-base md:text-lg">
                {about.introduction}
              </p>
            </motion.div>

            <motion.div variants={item} className="glass rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2.5 rounded-xl bg-primary/15 text-primary">
                  <FaGraduationCap className="w-5 h-5" />
                </span>
                <h3 className="font-heading text-lg font-semibold">Education</h3>
              </div>
              <p className="text-muted leading-relaxed">{about.education}</p>
            </motion.div>

            <motion.div variants={item} className="glass rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2.5 rounded-xl bg-secondary/15 text-secondary">
                  <FaBullseye className="w-5 h-5" />
                </span>
                <h3 className="font-heading text-lg font-semibold">Career Objective</h3>
              </div>
              <p className="text-muted leading-relaxed">{about.objective}</p>
            </motion.div>

            <motion.div variants={item} className="glass rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2.5 rounded-xl bg-primary/15 text-primary">
                  <FaHeart className="w-5 h-5" />
                </span>
                <h3 className="font-heading text-lg font-semibold">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-lg text-sm bg-white/5 border border-white/10 text-muted"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="relative pl-6 sm:pl-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={container}
          >
            <div className="absolute left-2 sm:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

            {about.timeline.map((entry) => (
              <motion.div key={entry.year} variants={item} className="relative mb-8 last:mb-0">
                <span className="absolute -left-[1.35rem] sm:-left-[1.6rem] top-1.5 w-3.5 h-3.5 rounded-full bg-primary shadow-glow border-2 border-background" />
                <div className="glass rounded-2xl p-5 md:p-6 hover:border-primary/30 transition-colors duration-300">
                  <span className="text-secondary text-sm font-semibold tracking-wide">
                    {entry.year}
                  </span>
                  <h4 className="font-heading text-lg font-semibold mt-1 mb-2">{entry.title}</h4>
                  <p className="text-muted text-sm leading-relaxed">{entry.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
