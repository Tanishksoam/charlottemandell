import { Cards } from "./ui/card";
import { publications } from "../lib/books.ts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

interface Book {
  author: string;
  title: string;
  publisher: string | string[];
  status?: string;
  releaseDate?: string;
  cover: string;
  link: string;
  coTranslator?: string | string[];
}

const Collection = () => {
  const animationVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative w-full">
      {/* Carousel */}
      <Carousel className="w-full">
        {/* Carousel content animated with Framer Motion */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2, // Delays the animation for each item
              },
            },
          }}
        >
          <CarouselContent className="flex">
            {publications.books.map((book: Book, index: number) => (
              <motion.div
                key={book.title || index}
                variants={animationVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <CarouselItem className="md:basis-1/3 lg:basis-1/5">
                  <Cards book={book} />
                </CarouselItem>
              </motion.div>
            ))}
          </CarouselContent>
        </motion.div>

        {/* Left Arrow */}
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full border-none">
          <button className="p-3 bg-gray-800 hover:bg-gray-600 text-white rounded-full shadow-lg transition transform hover:scale-110">
            &#8592;
          </button>
        </CarouselPrevious>

        {/* Right Arrow */}
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full border-none">
          <button className="p-3 bg-gray-800 hover:bg-gray-600 text-white rounded-full shadow-lg transition transform hover:scale-110">
            &#8594;
          </button>
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default Collection;
