import React from 'react';

interface TitleSectionProps {
  title: string;
  color: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, color }) => {
  return (
    <div className={`text-2xl py-8 bg-${color}-500 font-extrabold text-center text-white`}>
      {title}
    </div>
  );
};

export default TitleSection;
