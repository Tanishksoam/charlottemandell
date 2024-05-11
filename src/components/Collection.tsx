import { Cards } from "./ui/card";
import { publications } from '../lib/books.ts';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  return (
    <>
      <Carousel className="w-full">
        <CarouselContent>
          {publications.books.map((book: Book, index: number) => (
            <CarouselItem className="md:basis-1/3 lg:basis-1/5" key={book.title || index}>
              <Cards book={book} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 w-full"> 
        <CarouselPrevious />
        <CarouselNext />
        </div>
      </Carousel>
    </>
  );
};

export default Collection;
