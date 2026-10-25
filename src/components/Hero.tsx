import { ArrowDown, Mail, FileText, FolderOpen, MapPin, Briefcase } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolio';

export function Hero() {
  const { personal } = portfolioData;

  const corePillars = [
    'Java 17',
    'Spring Boot 3.4',
    'Microservices',
    'Angular',
    'REST APIs',
    'Docker',
    'Azure',
    'SAML SSO',
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient bg-grid-pattern overflow-hidden pt-20 pb-16"
    >
      {/* Decorative ambient lights */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Recruiter 6-Second Banner: Status, Role & Location */}
        <div className="animate-fade-in-up opacity-0 mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-border bg-accent-glow text-accent text-xs sm:text-sm font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            Available for Opportunities
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border bg-bg-card/70 text-text-secondary text-xs sm:text-sm font-medium">
            <MapPin size={14} className="text-accent" />
            {personal.location}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border bg-bg-card/70 text-text-secondary text-xs sm:text-sm font-medium">
            <Briefcase size={14} className="text-accent" />
            LTIMindtree · Banking Project
          </span>
        </div>

        {/* Candidate Name */}
        <h1 className="animate-fade-in-up opacity-0 delay-100 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-3">
          <span className="gradient-text">{personal.name}</span>
        </h1>

        {/* Core Title (6-Second HR Rule) */}
        <p className="animate-fade-in-up opacity-0 delay-200 text-xl sm:text-2xl md:text-3xl font-bold text-text-primary mb-3">
          {personal.headline}
        </p>

        {/* Primary Tech Stack Badges */}
        <div className="animate-fade-in-up opacity-0 delay-300 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto mb-8">
          {corePillars.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md bg-bg-card border border-border text-xs sm:text-sm font-medium text-text-secondary hover:border-accent hover:text-accent transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Quick Recruiter Snapshot Bar */}
        <div className="animate-fade-in-up opacity-0 delay-300 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10 text-left">
          {personal.quickStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl p-3 sm:p-4 border border-border/80"
            >
              <p className="text-[11px] uppercase tracking-wider text-text-muted font-medium mb-0.5">
                {stat.label}
              </p>
              <p className="text-sm sm:text-base font-bold text-text-primary">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Primary Call-to-Actions (1-Scroll HR Access) */}
        <div className="animate-fade-in-up opacity-0 delay-400 flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            <FolderOpen size={18} />
            View Projects
          </a>
          <a
            href={personal.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FileText size={18} />
            View Resume (PDF)
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-secondary"
          >
            <Mail size={18} />
            Get In Touch
          </a>
        </div>

        {/* Direct Recruiter Contact Links (LinkedIn, GitHub, Email, Phone) */}
        <div className="animate-fade-in-up opacity-0 delay-500 flex flex-wrap items-center justify-center gap-3">
          {personal.linkedin && (
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border bg-bg-card/60 text-text-secondary hover:text-accent hover:border-accent-border hover:bg-accent-glow transition-all text-xs font-medium"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>
          )}
          {personal.github && (
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border bg-bg-card/60 text-text-secondary hover:text-accent hover:border-accent-border hover:bg-accent-glow transition-all text-xs font-medium"
              aria-label="GitHub profile"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
          )}
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border bg-bg-card/60 text-text-secondary hover:text-accent hover:border-accent-border hover:bg-accent-glow transition-all text-xs font-medium"
            aria-label="Send email"
          >
            <Mail size={16} />
            <span>{personal.email}</span>
          </a>
          <a
            href={`tel:${personal.phone.replace(/[^+\d]/g, '')}`}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border bg-bg-card/60 text-text-secondary hover:text-accent hover:border-accent-border hover:bg-accent-glow transition-all text-xs font-medium"
            aria-label="Call phone"
          >
            <span>📞</span>
            <span>{personal.phone}</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in opacity-0 delay-600 mt-10">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-text-muted hover:text-accent transition-colors inline-block animate-bounce p-2"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
