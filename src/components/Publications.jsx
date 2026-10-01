import { motion } from 'framer-motion';

import {
  FaAward,
  FaBookOpen,
  FaCalendarAlt,
  FaCode,
  FaExternalLinkAlt,
  FaFileAlt,
  FaGithub,
  FaLayerGroup,
  FaUniversity,
  FaUsers,
} from 'react-icons/fa';

import SectionHeading from './ui/SectionHeading';

import {
  publications,
  formatIeeeCitation,
} from '../data/publications';

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

function PublicationInformation({
  icon: Icon,
  label,
  children,
}) {
  if (!children) {
    return null;
  }

  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
        <Icon
          className="text-sm text-cyan-400"
          aria-hidden="true"
        />
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {label}
        </p>

        <div className="mt-1 text-sm leading-6 text-slate-300">
          {children}
        </div>
      </div>
    </div>
  );
}

function TagList({
  title,
  items,
  variant = 'cyan',
}) {
  if (!items?.length) {
    return null;
  }

  const tagStyles =
    variant === 'blue'
      ? 'border-blue-400/20 bg-blue-500/10 text-blue-200 hover:border-blue-400/40'
      : 'border-cyan-400/20 bg-cyan-500/10 text-cyan-200 hover:border-cyan-400/40';

  return (
    <div className="mt-8">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
        {title}
      </h4>

      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${tagStyles}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function DetailList({
  title,
  items,
}) {
  if (!items?.length) {
    return null;
  }

  return (
    <div className="mt-8">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
        {title}
      </h4>

      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-7 text-slate-300 sm:text-base"
          >
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PublicationCard({
  publication,
}) {
  const isConferencePaper =
    publication.type === 'Conference Paper';

  const isResearchProject =
    publication.type ===
    'Final Year Research Project';

  const citation = isConferencePaper
    ? formatIeeeCitation(publication)
    : '';

  const doiUrl = publication.doi
    ? `https://doi.org/${publication.doi}`
    : publication.paperUrl;

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{
        y: -6,
        scale: 1.005,
      }}
      transition={{
        duration: 0.25,
        ease: 'easeOut',
      }}
      className="group relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-cyan-500/10 sm:p-8 lg:p-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="relative z-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-4xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
                <FaAward aria-hidden="true" />

                {publication.publisher}
              </span>

              <span className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                {publication.status}
              </span>

              {publication.type && (
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
                  {publication.type}
                </span>
              )}
            </div>

            <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              {publication.title}
            </h3>
          </div>

          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
            {isConferencePaper ? (
              <FaBookOpen
                className="text-3xl text-blue-300"
                aria-hidden="true"
              />
            ) : (
              <FaLayerGroup
                className="text-3xl text-blue-300"
                aria-hidden="true"
              />
            )}
          </div>
        </div>

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="grid gap-6 md:grid-cols-2">
          <PublicationInformation
            icon={FaUsers}
            label="Contributors"
          >
            {publication.authors?.join(', ')}
          </PublicationInformation>

          <PublicationInformation
            icon={FaCalendarAlt}
            label="Year"
          >
            {publication.year}
          </PublicationInformation>

          {isConferencePaper && (
            <>
              <PublicationInformation
                icon={FaBookOpen}
                label="Conference"
              >
                {publication.conference}
              </PublicationInformation>

              <PublicationInformation
                icon={FaFileAlt}
                label="DOI"
              >
                {publication.doi}
              </PublicationInformation>
            </>
          )}

          {isResearchProject && (
            <PublicationInformation
              icon={FaUniversity}
              label="Institution"
            >
              {publication.institution}
            </PublicationInformation>
          )}
        </div>

        {publication.abstract && (
          <div className="mt-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              {isResearchProject
                ? 'Project Overview'
                : 'Abstract'}
            </h4>

            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              {publication.abstract}
            </p>
          </div>
        )}

        <TagList
          title="Keywords"
          items={publication.keywords}
        />

        {isResearchProject && (
          <>
            <TagList
              title="Technologies Used"
              items={publication.technologies}
              variant="blue"
            />

            <DetailList
              title="Research Components"
              items={publication.components}
            />

            <DetailList
              title="Key Contributions"
              items={publication.contributions}
            />
          </>
        )}

        {isConferencePaper && citation && (
          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              IEEE Citation
            </h4>

            <p className="mt-3 text-sm italic leading-7 text-slate-300">
              {citation}
            </p>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {isConferencePaper && (
            <>
              <a
                href={publication.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${publication.title} on IEEE Xplore`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <FaBookOpen aria-hidden="true" />

                View on IEEE

                <FaExternalLinkAlt
                  className="text-xs"
                  aria-hidden="true"
                />
              </a>

              <a
                href={doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open DOI for ${publication.title}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-white/10 hover:text-white"
              >
                <FaFileAlt aria-hidden="true" />

                DOI / View Publication

                <FaExternalLinkAlt
                  className="text-xs"
                  aria-hidden="true"
                />
              </a>
            </>
          )}

          {isResearchProject &&
            publication.githubUrl && (
              <a
                href={publication.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${publication.title} on GitHub`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <FaGithub aria-hidden="true" />

                View on GitHub

                <FaExternalLinkAlt
                  className="text-xs"
                  aria-hidden="true"
                />
              </a>
            )}

          {isResearchProject &&
            publication.projectUrl && (
              <a
                href={publication.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View project details for ${publication.title}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-white/10 hover:text-white"
              >
                <FaCode aria-hidden="true" />

                View Project

                <FaExternalLinkAlt
                  className="text-xs"
                  aria-hidden="true"
                />
              </a>
            )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Publications() {
  return (
    <section
      id="publications"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl"
      />

      <motion.div
        className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
      >
        <motion.div variants={itemVariants}>
          <SectionHeading
            title="Research & Publications"
            subtitle="Published research and academic projects demonstrating innovation, problem-solving, and contributions to accessible software solutions."
          />
        </motion.div>

        <div className="mt-12 space-y-8 lg:mt-16">
          {publications.length > 0 ? (
            publications.map((publication) => (
              <PublicationCard
                key={publication.id}
                publication={publication}
              />
            ))
          ) : (
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-10 text-center"
            >
              <FaBookOpen
                className="mx-auto text-4xl text-slate-500"
                aria-hidden="true"
              />

              <p className="mt-4 text-slate-400">
                Research information will be added soon.
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}