import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function SectionHeading({ title, subtitle, eyebrow }) {
  return (
    <motion.div
      className="mb-12 md:mb-16 max-w-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      variants={fadeUp}
    >
      {eyebrow && (
        <p className="text-secondary text-sm font-medium tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-muted text-base sm:text-lg leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}
