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
    <div>
      <Title
        title="Bibliography"
        description="Catalogs of my published works—books, articles, translations and..."
        background={banner}
      />

      {/* content */}
      <div className="max-w-6xl mx-auto bg-white py-8">
        {/* published books */}
        <TitleSection title="Published Books" />
        <Collection />

        {/* published books */}
        <TitleSection title="Translations appearing in periodicals and collections" />
        <Translations />

        {/* Critical Writing */}
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
        <div className="p-6 sm:p-10 max-w-2xl mx-auto">
          <div className="after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 relative pl-6 after:left-0 grid gap-10 dark:after:bg-gray-400/20">
            {awardsAndHonors.items.map((item, index) => (
              <div
                className="grid gap-1 relative max-w-6xl bg-white p-6 shadow rounded-md"
                key={index}
              >
                <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
                <div className="font-medium">{item.year}</div>
                <div className="text-xl font-semibold opacity-75">
                  {item.awardName}
                </div>
                <div>{item.awardedBy}</div>
                {item.extra && (
                  <div className="text-gray-500 dark:text-gray-400">
                    {item.extra}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
