import React from "react";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";

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
    <div className="p-5 bg-green-50 shadow border-l-8 border-rose-600">
      <Link to={`/essay/${essay.title.replace(/\s+/g, '-').toLowerCase()}`}>
        <div className="text-2xl py-3 font-semibold text-rose-600 hover:underline">
          {formatTitle(essay.title)}
        </div>
      </Link>
      <Markdown>
        {truncateEssay(essay.paragraphs)}
      </Markdown>
    </div>
  );
};

export default EssayPreview;