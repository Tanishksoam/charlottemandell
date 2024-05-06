import { Cards } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Book {
  thumbnail: string;
  name: string;
  link: string;
}

interface CollectionProps {
  books: Book[];
}

const Collection: React.FC<CollectionProps> = ({ books }) => {
  return (
    <>
      <Carousel className="w-full">
        <CarouselContent>
          {books.map((book: Book, index: number) => (
            <CarouselItem className="md:basis-1/3 lg:basis-1/5">
              <Cards key={index} book={book} />
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
