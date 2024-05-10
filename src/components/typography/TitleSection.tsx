import React from 'react';

interface TitleSectionProps {
  title: string;
  color: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, color }) => {
  return (
    <h2 className="scroll-m-20 mt-12 border-b p-4 text-center text-3xl font-semibold tracking-tight first:mt-0 bg-gray-200 w-full">
      {title}
    </h2>
  );
};

export default TitleSection;
