
import { Title } from "@/components/typography/Title"
import bibliographybg from "../assets/sections/trees.jpg"
import authorimg from '../assets/author-img.png'
import TitleSection from "@/components/typography/TitleSection"
import Collection from "@/components/Collection"

const About = () => {
  return (
    <div>
    <Title title="Biblography"  background={bibliographybg} />

    {/* author's about */}
    <div className="flex flex-col sm:flex-row items-center gap-6 p-6 md:p-8">
      <img
        alt="Charlotte Mandell"
        className="rounded-full object-cover"
        height={350}
        src={authorimg}
        style={{
          aspectRatio: "500/500",
          objectFit: "cover",
        }}
        width={250}
      />
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Charlotte Mandell</h2>
        <p className="text-gray-500 dark:text-gray-400">French Literary Translator</p>
        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p>
            Born in Hartford, Connecticut in 1968, Charlotte Mandell attended Bard College where she majored in French
            literature and film theory.
          </p>
          <p>
            In 2021, Mandell received the honor of Chevalier dans l'Ordre des Arts et des Lettres from the French
            government.
          </p>
          <p>Mandell currently lives in the Hudson Valley with her husband, the poet Robert Kelly.</p>
        </div>
      </div>
    </div>

    {/* published books */}
    <TitleSection title="Published Books" color="red" />
    <Collection />
    </div>
  )
}

export default About