import { Cards } from "./ui/card";

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
      <div>Cards</div>
      <section className="flex flex-wrap gap-5">
        {books.map((book: Book, index: number) => (
          <Cards key={index} book={book} />
        ))}
      </section>
    </>
  );
};

export default Collection;
