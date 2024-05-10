import { Title } from "@/components/typography/Title";
import banner from "../assets/sections/reading.avif";
import { essays } from "../lib/essays";
import EssayPreview from "@/components/EssayPreview";

interface Essay {
  id: number;
  title: string;
  content:  JSX.Element;
  description: string;
  references?: string;
  banner?: string;
}

const Essays = () => {
  return (
    <div>
      <Title title="Essays" description="Dive into a collection of my thoughtful essays, where I explore various topics with depth and insight." background={banner} />
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
