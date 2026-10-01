import { motion } from 'framer-motion';
import { FaAward, FaCertificate } from 'react-icons/fa';
import SectionHeading from './ui/SectionHeading';
import { certifications } from '../data/portfolio';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Recognitions that validate continuous learning and craftsmanship."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {certifications.map((cert) => (
            <motion.a
            key={cert.id}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={card}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass rounded-2xl p-6 text-center hover:border-primary/40 hover:shadow-glow transition-all duration-300 block cursor-pointer"
          >
            <div
              className={`mx-auto mb-5 w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color}
                flex items-center justify-center border border-white/10`}
            >
              <FaCertificate className="w-7 h-7 text-white/80" />
            </div>
          
            <h3 className="font-heading text-base font-semibold mb-2 leading-snug">
              {cert.name}
            </h3>
          
            <p className="text-secondary text-sm mb-1">
              {cert.issuer}
            </p>
          
            <p className="text-xs text-primary font-medium mt-3">
              Credential ID
            </p>
          
            <p className="text-xs text-muted break-all">
              {cert.credentialId}
            </p>
          
            <p className="flex items-center justify-center gap-1.5 text-muted text-xs mt-4">
              <FaAward className="w-3 h-3" />
              {cert.date}
            </p>
          
            {/*<p className="text-primary text-xs mt-4 font-medium">
              View Certificate ↗
            </p>*/}
          </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
