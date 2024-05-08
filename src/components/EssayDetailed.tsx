import { useParams, Link } from "react-router-dom";
import essays from "../lib/essays.json";
import Markdown from "react-markdown";

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

  return (
    <div>
      <h1>{formatTitle(essay.title)}</h1>
      {essay.paragraphs.map((paragraph, index) => (
        <Markdown key={index}>
            {paragraph}
        </Markdown>
      ))}
      <Link to="/essays">Back to essays</Link>
    </div>
  );
};

export default EssayDetailed;
