import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeading from './ui/SectionHeading';
import { projects } from '../data/portfolio';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ProjectScreenshot({ title, gradient }) {
  return (
    <div
      className={`relative h-48 sm:h-52 w-full rounded-t-2xl bg-gradient-to-br ${gradient} overflow-hidden`}
      role="img"
      aria-label={`${title} screenshot placeholder`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3/4 h-3/5 rounded-lg bg-background/40 border border-white/10 backdrop-blur-sm flex flex-col p-3 gap-2">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-400/70" />
            <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
            <span className="w-2 h-2 rounded-full bg-green-400/70" />
          </div>
          <div className="flex-1 grid grid-cols-3 gap-1.5 mt-1">
            <div className="col-span-2 rounded bg-white/10" />
            <div className="rounded bg-white/5" />
            <div className="rounded bg-white/5" />
            <div className="col-span-2 rounded bg-white/10" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-surface-solid/80 to-transparent" />
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={cardVariant}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group glass rounded-2xl overflow-hidden flex flex-col h-full
        hover:border-primary/40 hover:shadow-glow transition-all duration-300"
    >
      <ProjectScreenshot title={project.title} gradient={project.gradient} />

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs bg-primary/10 text-secondary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            // className="btn-outline !px-4 !py-2 text-sm flex-1"
            className="btn-outline !px-10 !py-2 text-sm inline-flex items-center justify-center gap-2"
            aria-label={`${project.title} on GitHub`}
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </a>
          {/* <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !px-4 !py-2 text-sm flex-1"
            aria-label={`${project.title} live demo`}
          >
            <FaExternalLinkAlt className="w-3.5 h-3.5" />
            Live Demo
          </a> */}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Featured work"
          title="Projects"
          subtitle="A selection of products and experiments that showcase my engineering craft."
        />

        <motion.div
          className="grid sm:grid-cols-2 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
