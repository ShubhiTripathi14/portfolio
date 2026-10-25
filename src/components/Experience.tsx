import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import { FormattedText } from './FormattedText';

export function Experience() {
  const { experience } = portfolioData;
  const { ref, isInView } = useInView();

  return (
    <section id="experience" className="py-12 sm:py-16 bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className={`mb-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center gap-3 mb-3">
            <Briefcase size={20} className="text-accent" />
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">Production Track Record</span>
          </div>
          <h2 className="section-heading text-text-primary">
            Work Experience
          </h2>
          <div className="accent-line mt-3" />
        </div>

        {/* Timeline */}
        <div className="relative space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`relative pl-7 sm:pl-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Timeline line and dot */}
              {index < experience.length - 1 && <div className="timeline-line" />}
              <div className="timeline-dot absolute left-0 top-1" />

              {/* Experience card */}
              <div className="glass-card rounded-xl p-5 sm:p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">{exp.title}</h3>
                    <p className="text-accent font-semibold mt-1">{exp.company}</p>
                    {exp.account && (
                      <p className="text-sm text-text-secondary mt-1">
                        <span className="text-accent font-medium">{exp.account}</span>
                        {exp.project && <> · {exp.project}</>}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-text-muted flex-shrink-0">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${
                      exp.type === 'full-time'
                        ? 'bg-success/10 text-success border border-success/20'
                        : 'bg-warning/10 text-warning border border-warning/20'
                    }`}>
                      {exp.type === 'full-time' ? 'Full-Time' : 'Training'}
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-text-secondary text-sm leading-relaxed">
                      <ChevronRight size={14} className="text-accent mt-1 flex-shrink-0" />
                      <FormattedText text={resp} />
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="skill-tag !text-xs !py-1 !px-2.5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
