import React from "react";
import { Link } from "react-router-dom";

interface Essay {
  id: number;
  title: string;
  content:  JSX.Element;
  description: string;
  references?: string;
  banner?: string;
}

interface EssayPreviewProps {
  essay: Essay;
}

const EssayPreview: React.FC<EssayPreviewProps> = ({ essay }) => {
  const formatTitle = (title: string): string => {
    return title.replace(/-/g, " ")
                .replace(/\b\w/g, char => char.toUpperCase());
  };


  console.log(essay);
  return (
    <div className="p-5 bg-white shadow boorder-b-4 border-gray-600">
      <Link to={`/essay/${essay.title.replace(/\s+/g, '-').toLowerCase()}`}>
        <h2 className="scroll-m-20 mt-12 border-b p-4 text-blue-600 text-3xl font-semibold tracking-tight first:mt-0  w-full hover:underline">
        {essay.id}. {formatTitle(essay.title)}
    </h2>
      </Link>
      <div className="py-2 opacity-75">
        {essay.description}
      </div>
    </div>
  );
};

export default EssayPreview;