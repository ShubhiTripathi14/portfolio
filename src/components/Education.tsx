import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

export function Education() {
  const { education, certifications } = portfolioData;
  const { ref, isInView } = useInView();

  // Skip section if nothing to show
  if (education.length === 0 && certifications.length === 0) return null;

  return (
    <section id="education" className="py-12 sm:py-16 bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className={`mb-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center gap-3 mb-3">
            <GraduationCap size={20} className="text-accent" />
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">Academic Credentials</span>
          </div>
          <h2 className="section-heading text-text-primary">
            Education{certifications.length > 0 ? ' & Certifications' : ''}
          </h2>
          <div className="accent-line mt-3" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Education cards */}
          {education.map((edu, index) => (
            <div
              key={index}
              className={`glass-card rounded-xl p-5 sm:p-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent-glow text-accent border border-accent-border flex-shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text-primary mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-accent font-medium mb-3">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                  </div>
                  {edu.cgpa && (
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent-glow border border-accent-border">
                      <Award size={14} className="text-accent" />
                      <span className="text-sm font-semibold text-accent">
                        CGPA: {edu.cgpa}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Certification cards */}
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 sm:p-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(education.length + index + 1) * 200}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent-glow text-accent border border-accent-border flex-shrink-0">
                  <Award size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text-primary mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-accent font-medium mb-2">{cert.issuer}</p>
                  <p className="text-sm text-text-muted flex items-center gap-1.5">
                    <Calendar size={14} />
                    {cert.date}
                  </p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent text-sm hover:underline mt-2 inline-block"
                    >
                      View credential →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
