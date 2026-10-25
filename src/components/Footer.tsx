import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolio';

export function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left - branding */}
          <div className="text-center sm:text-left">
            <p className="text-text-primary font-semibold">
              {personal.name}
            </p>
            <p className="text-text-muted text-sm mt-1">
              {personal.headline} · {personal.subHeadline.split(' · ').slice(0, 3).join(' · ')}
            </p>
          </div>

          {/* Center - social links */}
          <div className="flex items-center gap-3">
            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-accent-glow transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            )}
            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-accent-glow transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
            )}
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-accent-glow transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Right - copyright */}
          <p className="text-text-muted text-sm flex items-center gap-1">
            © {currentYear} · {personal.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
