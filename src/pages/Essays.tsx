import { Title } from "@/components/typography/Title";
import banner from "../assets/sections/reading.avif";
import essays from "../lib/essays.json";
import EssayPreview from "@/components/EssayPreview";

interface Essay {
  id: number;
  title: string;
  paragraphs: string[];
  references?: string;
  banner?: string;
}

const Essays = () => {
  return (
    <div>
      <Title title="Essays" background={banner} />
      {/* content */}
      <div className="max-w-6xl mx-auto py-6">
        <div className="grid md:grid-cols-2 gap-4 p-4">
          {essays.map((essay: Essay) => (
            <EssayPreview key={essay.id} essay={essay} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Essays;
