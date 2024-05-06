interface Book {
  name: string;
  link: string;
  thumbnail: string;
}

interface CardsProps {
  book: Book;
}

export function Cards({ book }: CardsProps) {
  return (
    <>
      <div className="w-64 h-64 mx-auto flex items-center justify-center">
        <a
          className="block"
          href={book.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="Book Cover"
            className="max-w-full max-h-full object-contain"
            src={book.thumbnail}
          />
        </a>
      </div>
      <div className="p-4">
        <a
          className="text-lg text-center font-semibold text-gray-900 dark:text-gray-50 mb-2 hover:underline transition-colors overflow-hidden h-14 line-clamp-2"
          href={book.link}
          rel="noopener noreferrer"
          target="_blank"
          title={book.name}
        >
          {book.name}
        </a>
      </div>
    </>
  );
}
