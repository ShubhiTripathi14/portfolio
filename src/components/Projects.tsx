import { FolderOpen, ExternalLink, ChevronRight, Code2 } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import { FormattedText } from './FormattedText';

export function Projects() {
  const { projects, personal } = portfolioData;
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className={`mb-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center gap-3 mb-3">
            <FolderOpen size={20} className="text-accent" />
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">Featured Systems</span>
          </div>
          <h2 className="section-heading text-text-primary">
            End-to-End Projects
          </h2>
          <div className="accent-line mt-3" />
        </div>

        {/* Projects grid with uniform heights */}
        <div className="grid md:grid-cols-2 gap-5 items-stretch">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-card rounded-xl overflow-hidden group flex flex-col justify-between h-full ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Top Accent Strip */}
              <div className="h-1 bg-gradient-to-r from-accent via-indigo-500 to-accent" />

              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  {/* Card Header & Direct Code CTA */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-accent-glow text-accent border border-accent-border flex-shrink-0">
                        <Code2 size={18} />
                      </div>
                      <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Google X-Y-Z Feature Bullets */}
                  <div className="mb-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-2">
                      Architecture & Impact Highlights
                    </p>
                    <ul className="space-y-1.5">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-text-secondary leading-relaxed">
                          <ChevronRight size={14} className="text-accent mt-0.5 flex-shrink-0" />
                          <FormattedText text={feature} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Section: Tech Stack & Direct Access to Code */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-3 mb-4 border-t border-border">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-tag !text-[11px] !py-0.5 !px-2">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-accent-border bg-accent-glow text-accent hover:bg-accent hover:text-bg-primary text-xs font-semibold transition-all"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <GithubIcon size={14} />
                        <span>View Repository →</span>
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-bg-card hover:border-accent hover:text-accent text-xs font-semibold transition-all"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub link prompt */}
        <div className={`mt-6 text-center ${isInView ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
          <p className="text-text-muted text-xs sm:text-sm">
            All codebases adhere to standard Maven project structures and clean documentation. Visit my{' '}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              GitHub Profile
            </a>{' '}
            for full commit histories.
          </p>
        </div>
      </div>
    </section>
  );
}
