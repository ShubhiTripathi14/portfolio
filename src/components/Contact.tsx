import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

export function Contact() {
  const { personal } = portfolioData;
  const { ref, isInView } = useInView();

  const contactMethods = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone.replace(/[^+\d]/g, '')}`,
    },
    {
      icon: <LinkedinIcon size={20} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/shubhitripathi1410',
      href: personal.linkedin,
    },
    {
      icon: <GithubIcon size={20} />,
      label: 'GitHub',
      value: 'github.com/ShubhiTripathi14',
      href: personal.github,
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: personal.location,
      href: '',
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className={`mb-8 text-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <Send size={20} className="text-accent" />
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">Hiring Inquiries</span>
          </div>
          <h2 className="section-heading text-text-primary mb-3">
            Connect Directly
          </h2>
          <div className="accent-line mx-auto mb-4" />
          <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto">
            Available for software engineering roles, technical conversations, and enterprise collaborations.
          </p>
        </div>

        {/* Contact grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => {
            const Component = method.href ? 'a' : 'div';
            const linkProps = method.href
              ? {
                  href: method.href,
                  target: method.href.startsWith('http') ? '_blank' : undefined,
                  rel: method.href.startsWith('http') ? 'noopener noreferrer' : undefined,
                }
              : {};

            return (
              <Component
                key={method.label}
                {...linkProps}
                className={`glass-card rounded-2xl p-5 flex items-center gap-4 ${
                  method.href ? 'cursor-pointer' : ''
                } ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="p-2.5 rounded-xl bg-accent-glow text-accent border border-accent-border flex-shrink-0">
                  {method.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-text-muted font-medium uppercase tracking-wider mb-0.5">
                    {method.label}
                  </p>
                  <p className="text-text-primary text-sm font-medium truncate">
                    {method.value}
                  </p>
                </div>
              </Component>
            );
          })}

          {/* CTA card */}
          <a
            href={`mailto:${personal.email}`}
            className={`glass-card rounded-2xl p-5 flex items-center gap-4 cursor-pointer sm:col-span-2 lg:col-span-1 ${
              isInView ? 'animate-fade-in-up delay-600' : 'opacity-0'
            }`}
          >
            <div className="p-2.5 rounded-xl bg-accent text-bg-primary flex-shrink-0">
              <Send size={20} />
            </div>
            <div>
              <p className="text-xs text-text-muted font-medium uppercase tracking-wider mb-0.5">
                Quick Reach
              </p>
              <p className="text-accent text-sm font-semibold">
                Send me an email →
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
