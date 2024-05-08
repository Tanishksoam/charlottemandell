import React from "react";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import TitleSection from "./typography/TitleSection";

interface Essay {
  id: number;
  title: string;
  paragraphs: string[];
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

  const truncateEssay = (text: string[]): string => {
    const fullText = text.join(" ");
    const words = fullText.split(" ");
    if (words.length > 20) {
      return words.slice(0, 20).join(" ") + "...";
    }
    return fullText;
  };

  console.log(essay);
  return (
    <div className="p-5 bg-white shadow border-gray-600">
      <Link to={`/essay/${essay.title.replace(/\s+/g, '-').toLowerCase()}`}>
        <TitleSection title={`${formatTitle(essay.title)}`} color="green"/>
      </Link>
      <div className="py-2 opacity-75">
      <Markdown>
        {truncateEssay(essay.paragraphs)}
      </Markdown>
      </div>
    </div>
  );
};

export default EssayPreview;