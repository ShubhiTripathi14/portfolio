import { Code, Database, Shield, Cloud, Server, Wrench, Layers, Cpu, TestTube, Zap, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

const categoryIcons: Record<string, React.ReactNode> = {
  'Languages': <Code size={18} />,
  'Backend Frameworks': <Server size={18} />,
  'Frontend Technologies': <Layers size={18} />,
  'Databases & Data': <Database size={18} />,
  'Security & Auth': <Shield size={18} />,
  'Microservices & APIs': <Cpu size={18} />,
  'Messaging & Integration': <MessageSquare size={18} />,
  'Cloud & DevOps': <Cloud size={18} />,
  'Testing Frameworks': <TestTube size={18} />,
  'Developer Tools & AI': <Wrench size={18} />,
  'Core Concepts': <Zap size={18} />,
};

export function Skills() {
  const { skills } = portfolioData;
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className={`mb-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center gap-3 mb-3">
            <Code size={20} className="text-accent" />
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">Technical Expertise</span>
          </div>
          <h2 className="section-heading text-text-primary">
            Grouped Technical Skills
          </h2>
          <div className="accent-line mt-3" />
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group, index) => (
            <div
              key={group.category}
              className={`glass-card rounded-xl p-4 sm:p-5 flex flex-col justify-between ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent-glow text-accent border border-accent-border">
                  {categoryIcons[group.category] || <Code size={18} />}
                </div>
                <h3 className="font-semibold text-text-primary text-sm">
                  {group.category}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="skill-tag !text-xs !py-1 !px-2.5">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
