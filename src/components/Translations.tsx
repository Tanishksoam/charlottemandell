import { publications } from "@/lib/books";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaBook } from "react-icons/fa6";
import { BsCalendar2Date } from "react-icons/bs";

const Translations = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: 100 }, // Start off to the right
    visible: { opacity: 1, x: 0 }, // Animate to the center
  };

  const hoverVariants = {
    hover: {
      scale: 1.05, // Slightly zoom on hover
      transition: {
        duration: 0.3,
        type: "spring", // Springy hover effect
      },
    },
  };

  return (
    <section className="container mx-auto py-12 px-4 md:px-6">
      <Carousel className="w-full">
        <CarouselContent>
          {publications.translations.map((translation, index: number) => (
            <motion.div
              key={translation.title || index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={itemVariants} // Apply animation variants
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <CarouselItem className=" basis-1 parent">
                {" "}
                {/* Make cards wider */}
                <motion.div
                  className="bg-white rounded-md w-80 px-8 py-4 shadow border-[1px] border-[#e5e7eb] dark:border-gray-800"
                  variants={hoverVariants} // Apply hover animation
                >
                  <div className="space-y-2 flex flex-col justify-center w-full min-h-[200px] ">
                    <div className=" w-full flex justify-between items-center gap-4 text-xs">
                      <p className=" text-gray-500 dark:text-gray-400">
                        <strong>Author:</strong>
                      </p>
                      <p className=" text-gray-500 dark:text-gray-400">
                        {translation.author}
                      </p>
                    </div>
                    <h3
                      className="text-xl font-medium "
                      title={translation.title}
                    >
                      {translation.title.length > 25
                        ? `${translation.title}`
                        : translation.title}
                    </h3>
                    <div className=" w-full flex justify-between items-center gap-4 text-xs">
                      <p className=" flex gap-2 text-gray-500 dark:text-gray-400">
                        <FaBook />
                        <strong>Publisher:</strong>
                      </p>
                      <p className=" text-gray-500 dark:text-gray-400">
                        Acme Publishing
                      </p>
                    </div>
                    <div className=" w-full flex justify-between items-center gap-4 text-xs">
                      <p className=" flex gap-2 text-gray-500 dark:text-gray-400">
                        <BsCalendar2Date />
                        <strong>Publication Date:</strong>
                      </p>
                      <p className=" text-gray-500 dark:text-gray-400">
                        May 2023
                      </p>
                    </div>
                    <div className=" w-full flex justify-end items-center gap-4 text-xs">
                      <p className=" text-gray-500 dark:text-gray-400">
                        <strong>250</strong> pages
                      </p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            </motion.div>
          ))}
        </CarouselContent>

        {/* Arrows section with slight animation */}
        <div className="flex justify-between items-center w-full">
          <motion.div whileHover={{ scale: 1.2 }}>
            <CarouselPrevious />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <CarouselNext />
          </motion.div>
        </div>
      </Carousel>
    </section>
  );
};

export default Translations;
