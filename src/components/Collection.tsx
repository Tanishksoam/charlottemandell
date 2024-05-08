
import { Cards } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import books from "../lib/books.json";

interface Book {
  title: string;
  isbn: number;
  author: string;
  publication: string;
  status: string;
}



const Collection = () => {



  return (
    <>
      <Carousel className="w-full">
        <CarouselContent>
          {books.map((book: Book, index: number) => (
            <CarouselItem className="md:basis-1/3 lg:basis-1/5" key={index}>
              <Cards  book={book} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default Collection;
