import React from 'react';

interface TitleSectionProps {
  title: string;
  color: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, color }) => {
  return (
    <div className={`text-2xl py-4 bg-${color}-50 font-semibold border-b border-neutral-300 text-black hover:italic`}>
      {title}
    </div>
  );
};

export default TitleSection;
