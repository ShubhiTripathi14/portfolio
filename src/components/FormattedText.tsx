import React from 'react';

/**
 * Lightweight text formatter that parses **bold** markdown tags
 * and renders them with high-contrast styling for recruiters and ATS scanning.
 */
export function FormattedText({ text, className = '' }: { text: string; className?: string }) {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={index} className="text-text-primary font-semibold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </span>
  );
}
