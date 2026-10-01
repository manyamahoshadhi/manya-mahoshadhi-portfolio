import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { skills } from '../data/portfolio';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
};

function SkillBar({ name, level, Icon }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-2">
        <span className="flex items-center gap-2 text-sm text-white">
          {Icon && <Icon className="w-4 h-4 text-secondary" aria-hidden />}
          {name}
        </span>
        <span className="text-xs text-muted">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(0);
  const current = skills[active];
  const CategoryIcon = current.icon;

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills & Technologies"
          subtitle="A curated toolkit spanning languages, frameworks, cloud, and developer tooling."
        />

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Skill categories">
          {skills.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.category}
                type="button"
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  ${
                    active === i
                      ? 'bg-primary/20 text-white border border-primary/40 shadow-glow'
                      : 'glass text-muted hover:text-white border border-transparent'
                  }`}
              >
                <Icon className="w-4 h-4" />
                {cat.category}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.category}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="glass rounded-2xl p-6 md:p-8"
            role="tabpanel"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                <CategoryIcon className="w-6 h-6" />
              </span>
              <h3 className="font-heading text-xl md:text-2xl font-semibold">
                {current.category}
              </h3>
            </div>

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {current.items.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={card}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="rounded-xl bg-white/[0.03] border border-white/5 p-5 hover:border-primary/30 transition-colors"
                >
                  <SkillBar name={skill.name} level={skill.level} Icon={skill.Icon} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Badge overview */}
        <motion.div
          className="mt-10 flex flex-wrap gap-3 justify-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.flatMap((cat) =>
            cat.items.map((skill) => {
              const Icon = skill.Icon;
              return (
                <motion.span
                  key={`${cat.category}-${skill.name}`}
                  variants={card}
                  whileHover={{ scale: 1.08 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-xs text-muted hover:text-white transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-secondary" />
                  {skill.name}
                </motion.span>
              );
            })
          )}
        </motion.div>
      </div>
    </section>
  );
}
