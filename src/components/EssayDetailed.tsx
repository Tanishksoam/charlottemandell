import { useParams, Link } from "react-router-dom";
import essays from "../lib/essays.json";
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
    <div>
      <div className="flex items-center gap-6">
        <Link to="/essays">
          <span className="">Go Back</span>
        </Link>
        <TitleSection title={title} color="green" />
      </div>
      <div className="py-4 max-w-6xl mx-auto">
        {essay.paragraphs.map((paragraph, index) => (
          <div key={index} className="flex flex-col gap-5 text-2xl">
            {paragraph}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EssayDetailed;
