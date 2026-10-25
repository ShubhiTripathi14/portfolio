import { FileText, Download, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

export function Resume() {
  const { personal } = portfolioData;
  const { ref, isInView } = useInView();

  return (
    <section id="resume" className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`text-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <FileText size={20} className="text-accent" />
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">Candidate Documentation</span>
          </div>
          <h2 className="section-heading text-text-primary mb-3">
            Verified Resume
          </h2>
          <div className="accent-line mx-auto mb-4" />
          <p className="text-text-secondary text-sm sm:text-base mb-6 max-w-xl mx-auto">
            Review full verified credentials, enterprise timeline, and banking certifications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={personal.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Eye size={18} />
              View Resume
            </a>
            <a
              href={personal.resumePath}
              download="Shubhi_Tripathi_Resume.pdf"
              className="btn-secondary"
            >
              <Download size={18} />
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
