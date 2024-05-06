

export function Cards({ book }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950 w-64">
      <a className="block" href={book.link} rel="noopener noreferrer" target="_blank">
        <img
          alt="Book Cover"
          className="w-auto h-64 mx-auto"
          src={book.thumbnail}
        />
        <div className="p-4">
          <a
            className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2 hover:underline transition-colors"
            href={book.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            {book.name}
          </a>
        </div>
      </a>
    </div>
  );
}
