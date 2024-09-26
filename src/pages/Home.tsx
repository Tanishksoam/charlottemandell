import authorimg from "../assets/author-img.png";

import xIcon from "../assets/icons/x.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

const Home = () => {
  return (
    <div className="mx-auto flex flex-col md:flex-row-reverse justify-center items-center gap-20 px-4 md:pl-32 md:pr-12">
      <img
        src={authorimg}
        alt=""
        className="mx-auto mt-12 w-full md:w-[40vw] h-[60vh] object-cover  grayscale hover:grayscale-0 duration-1000 rounded-xl"
      />
      <div className="w-full flex flex-col justify-start items-start md:max-w-[40vw] ">
        <div className="flex flex-col justify-start items-end gap-3">
          <h2 className="w-full text-7xl font-bold text-left mt-8 italic">
            Charlotte Mandell
          </h2>
          <div className="text-lg text-justify text-gray-700 space-y-2">
            Charlotte Mandell is a French literary translator who was born in
            Hartford, Connecticut in 1968. She went to Boston Latin High School,
            the Université de Paris III, and Bard College, where she majored in
            French literature and film theory. In April 2021 she received the
            honor of Chevalier dans l'Ordre des Arts et des Lettres from the
            French government. She lives in the Hudson Valley with her husband,
            the poet Robert Kelly.
          </div>
        </div>

        {/* social icons */}
        <div className=" w-full flex gap-6 my-6 justify-end">
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
    </div>
  );
};

export default Home;
