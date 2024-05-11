import { useParams } from "react-router-dom";
import { essays } from "../lib/essays";
import TitleSection from "./typography/TitleSection";

const EssayDetailed = () => {
  const { essay_id } = useParams();
  const essay = essays.find((e) => e.title === essay_id);

  const formatTitle = (title: string): string => {
    return title
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  if (!essay) {
    return <div>Essay not found.</div>;
  }

  const title = formatTitle(essay.title);
  return (
    <div className="bg-white max-w-6xl mx-auto min-h-screen">
      <div className="flex items-center gap-6">
        <TitleSection title={title} />
      </div>
      <div className="flex flex-col justify-center items-center p-4 max-w-6xl text-justify">
        {essay.content}
      </div>
    </div>
  );
};

export default EssayDetailed;
