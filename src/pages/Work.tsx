import { Title } from "@/components/typography/Title";
import banner from "../assets/sections/bird.avif";
import TitleSection from "@/components/typography/TitleSection";
import Collection from "@/components/Collection";
import Translations from "@/components/Translations";

const criticalWritings = {
  writings: [
    {
      title: "A Language of Absence",
      details: "Reflections on the death of Maurice Blanchot",
      publication: "Nowhere Without No: In Memory of Maurice Blanchot",
      editors: "Kevin Hart",
      publisher: "Vagabond Press",
      location: "Sydney",
      year: "2003",
      pages: "pp. 23-24",
    },
    {
      title: "Blanchot en Amérique",
      details: "On translating Blanchot",
      translatedBy: "Christophe Bident",
      publication: "Maurice Blanchot: Récits Critiques",
      editors: "Christophe Bident and Pierre Vilar",
      publisher: "Farrago",
      location: "Paris",
      year: "2003",
      pages: "pp. 215-217",
    },
  ],
};

const awardsAndHonors = {
  items: [
    {
      year: "2024",
      awardName: "Thornton Wilder Translation Prize",
      awardedBy: "American Academy of Arts and Letters",
      description:
        "Received this prestigious prize for outstanding achievements in translation.",
    },
    {
      year: "2021",
      awardName: "Chevalier dans l’Ordre des Arts et des Lettres",
      awardedBy: "French government",
      description:
        "Honored with this title for significant contributions to the arts and letters.",
    },
    {
      year: "2017-2019",
      awardName: "Various Awards for 'Compass'",
      awardedBy: "Multiple organizations",
      description:
        "Shortlisted for the Man Booker International Prize 2017, the 2019 International Dublin Literary Award; recipient of the 2018 ALTA National Translation Award in Prose.",
    },
    {
      year: "2017",
      awardName: "PEN/Jacqueline Bograd Weld Award for Biography",
      awardedBy: "PEN America",
      description:
        "Jean Cocteau was longlisted for this award and also received the French-American Foundation Translation Prize.",
    },
    {
      year: "2015",
      awardName: "English PEN Translation Grant",
      awardedBy: "English PEN",
      description:
        "Syrian Notebooks was awarded this grant to support its translation and publication.",
      extra:
        "Also received the Charles Flint Kellogg Award in Arts and Letters from Bard College in May 2015.",
    },
    {
      year: "2013",
      awardName:
        "French Voices Award for Excellence in Translation and Publication",
      awardedBy: "Cultural Services of the French Embassy",
      description:
        "The Fata Morgana Books received this award for excellence in translation and publication.",
      extra:
        "Served as a panelist for the 2013 NEA Literature Fellowships for Translation Projects, May 2012.",
    },
    {
      year: "2010",
      awardName: "National Endowment for the Arts Literature Fellowship",
      awardedBy: "National Endowment for the Arts",
      description:
        "Zone was recognized with this fellowship for literary merit and promise.",
      extra:
        "Served as a panelist for the 2011 NEA Literature Fellowships for Translation Projects, May 2010.",
    },
    {
      year: "2001-2002",
      awardName:
        "Aldo and Jeanne Scaglione Prize for a Translation of a Scholarly Study of Literature",
      awardedBy: "Modern Language Association",
      description:
        "Faux Pas was honored with this prize, recognizing its contribution to literary translation.",
    },
    {
      year: "2004",
      awardName: "PEN Book-of-the-Month Club Translation Prize",
      awardedBy: "PEN America",
      description:
        "Served as a judge for this prize, evaluating works of translation alongside Burton Pike and Peter Theroux.",
    },
  ],
};

const Work = () => {
  return (
    <div className="mx-auto w-[80vw] mt-12 ">
      <Title
        title="Bibliography"
        description="Catalogs of my published works—books, articles, translations and..."
        background={banner}
      />

      <div className=" mx-auto py-8">
        <TitleSection title="Published Books" />
        <Collection />

        <TitleSection title="Translations appearing in periodicals and collections" />
        <Translations />

        <TitleSection title="Critical Writing" />
        <div className="grid gap-8 md:grid-cols-2 pt-6 px-6">
          {criticalWritings.writings.map((writing, index) => (
            <div
              key={index}
              className="rounded-lg border border-neutral-200 border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-neutral-800"
            >
              <h3 className="mb-2 text-xl font-semibold">{writing.title}</h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                {writing.details}
              </p>
              <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                <p>
                  <strong>Editors:</strong> {writing.editors}
                </p>
                <p>
                  <strong>Publisher:</strong> {writing.publisher}
                </p>
                <p>
                  <strong>Location:</strong> {writing.location}
                </p>
                <p>
                  <strong>Year:</strong> {writing.year}
                </p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Pages:</strong> {writing.pages}
              </p>
              {writing.translatedBy && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <strong>Translated by:</strong> {writing.translatedBy}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* awards & honors */}
        <TitleSection title="Awards & Honors" />

        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden h-full">
            <div className="border-2 absolute border-opacity-20 border-gray-700 h-full -z-10 left-[50%]"></div>

            {awardsAndHonors.items.map((item, index) => (
              <div
                key={index}
                className={`mb-8 flex md:justify-between items-center w-full ${
                  index % 2 === 0
                    ? "right-timeline justify-end"
                    : "left-timeline justify-start"
                }`}
              >
                <div className="hidden md:block order-1 w-5/12"></div>
                <div className="z-20 hidden md:flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full" />
                <div className={`order-1 flex flex-col justify-center rounded-lg shadow-xl md:w-5/12 px-6 py-4 min-h-[250px] bg-white ${
                  index % 2 === 0
                    ? " md:items-start md:text-start"
                    : "md:items-end md:text-end"
                }`}>
                  <p className="text-sm font-medium text-gray-700">
                    {item.year}
                  </p>
                  <h3 className="mb-3 font-bold text-gray-800 text-xl">
                    {item.awardName}
                  </h3>
                  <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                    {item.description}
                  </p>
                  <p className="text-sm font-medium text-gray-700">
                    {item.awardedBy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
