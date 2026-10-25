import { User, MapPin, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import { FormattedText } from './FormattedText';

export function About() {
  const { about, personal, experience } = portfolioData;
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-12 sm:py-16 bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className={`mb-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center gap-3 mb-4">
            <User size={20} className="text-accent" />
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">Executive Overview</span>
          </div>
          <h2 className="section-heading text-text-primary">
            Engineering Profile & Core Impact
          </h2>
          <div className="accent-line mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Summary */}
          <div className={`md:col-span-2 ${isInView ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              <FormattedText text={about.summary} />
            </p>
            <ul className="space-y-3">
              {about.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-text-secondary leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <FormattedText text={highlight} />
                </li>
              ))}
            </ul>
          </div>

          {/* Quick info card */}
          <div className={`${isInView ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
            <div className="glass-card rounded-2xl p-6 space-y-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">Quick Info</h3>
              
              <div className="flex items-start gap-3">
                <Briefcase size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-text-muted">Current Role</p>
                  <p className="text-text-primary font-medium">{experience[0]?.title}</p>
                  <p className="text-sm text-text-secondary">{experience[0]?.company}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-text-muted">Location</p>
                  <p className="text-text-primary font-medium">{personal.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <User size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-text-muted">Experience</p>
                  <p className="text-text-primary font-medium">1+ Year</p>
                </div>
              </div>

              <div className="pt-3 border-t border-border">
                <p className="text-sm text-text-muted mb-2">Core Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Java', 'Spring Boot', 'Angular', 'REST APIs'].map((tech) => (
                    <span key={tech} className="skill-tag !text-xs !py-1 !px-2.5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
