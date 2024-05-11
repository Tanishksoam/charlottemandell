import React from "react";
import { Link } from "react-router-dom";
import TitleSection from "./typography/TitleSection";

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
    <div className="p-5 bg-white shadow border-gray-600">
      <Link to={`/essay/${essay.title.replace(/\s+/g, '-').toLowerCase()}`}>
        <TitleSection title={`${formatTitle(essay.title)}`} />
      </Link>
      <div className="py-2 opacity-75">
        {essay.description}
      </div>
    </div>
  );
};

export default EssayPreview;