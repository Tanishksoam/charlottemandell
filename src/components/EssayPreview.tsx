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
    <div className="border p-5">
      <img src={essay.banner || ""} alt={`Banner for ${essay.title}`} className="h-20 w-full object-cover" />
      <Link to={`/essay/${essay.title.replace(/\s+/g, '-').toLowerCase()}`}>
        <div className="text-2xl py-5 font-semibold text-rose-800 hover:underline">
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