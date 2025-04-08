import React from 'react';
import Button from '../../atoms/Button/Button';

export type CTAButton = {
  label: string;
  url?: string;
  onClick?: () => void;
  className?: string;
};

interface CTAButtonsProps {
  ctas: CTAButton | CTAButton[] | undefined;
  defaultClassName?: string;
}

const CTAButtons: React.FC<CTAButtonsProps> = ({
  ctas,
  defaultClassName = "px-6 py-2 bg-[#D1FF33] text-black font-bold rounded-full"
}) => {
  if (!ctas) return null;
  
  const ctaArray = Array.isArray(ctas) ? ctas : [ctas];
  
  return (
    <div className="flex flex-wrap gap-4 mt-6">
      {ctaArray.map((cta, idx) => (
        cta.url ? (
          <a
            key={idx}
            href={cta.url}
            className={cta.className || defaultClassName}
            onClick={cta.onClick}
          >
            {cta.label}
          </a>
        ) : (
          <Button
            key={idx}
            className={cta.className || defaultClassName}
            onClick={cta.onClick}
          >
            {cta.label}
          </Button>
        )
      ))}
    </div>
  );
};

export default CTAButtons;