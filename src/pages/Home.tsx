import authorimg from "../assets/author-img.png";

import xIcon from "../assets/icons/x.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

const Home = () => {
  return (
    <div className="mx-auto max-w-xl px-4 md:px-0">
      <img src={authorimg} alt="" className="mx-auto mt-12" />
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold text-center mt-8 italic">
          Charlotte Mandell
        </h2>
        <div className="text-md text-center text-gray-700 space-y-2">
          I am a French literary translator born in Hartford, Connecticut in
          1968. I attended Boston Latin High School, the Université de Paris
          III, and Bard College, where I majored in French literature and film
          theory. In April 2021, I was honored with the title of Chevalier dans
          l'Ordre des Arts et des Lettres by the French government. I live in
          the Hudson Valley with my husband, the poet Robert Kelly.
        </div>
      </div>

      {/* social icons */}
      <div className="flex gap-6 my-6 justify-center">
        <a href="https://twitter.com/avecsesdoigts" target="_blank">
          <img src={xIcon} alt="X Icon" className="h-8 lg:h-10 opacity-75" />
        </a>
        <a
          href="https://www.linkedin.com/in/charlotte-mandell-5b991223/"
          target="_blank"
        >
          <img src={linkedinIcon} alt="" className="h-8 lg:h-10 opacity-75" />
        </a>
      </div>
    </div>
  );
};

export default Home;
