import fallbackImage from '../../assets/author-img.png'

interface Book {
  title: string;
  isbn: number;
}

interface CardsProps {
  book: Book;
}

export function Cards({ book }: CardsProps) {

  function getBookCoverURL(isbn: number, fallbackImageUrl: string): string {
    const baseURL = 'https://covers.openlibrary.org/b/isbn/';
    const imageSize = '-M.jpg';
    const encodedISBN = encodeURIComponent(isbn);
    const fullURL = `${baseURL}${encodedISBN}${imageSize}`;
  
    const img = new Image();
    img.src = fullURL;
    img.onload = () => {
      if (img.classList.contains('transparent')) {
        console.log('Image is marked as transparent, using fallback image:', fallbackImageUrl);
        img.src = fallbackImageUrl;
      }
    };
    img.onerror = () => {
      console.log('Cover not available, using fallback image:', fallbackImageUrl);
      img.src = fallbackImageUrl;
    };
  
    img.src = fullURL; 

    return fullURL;
  }

  const fallbackImageUrl = fallbackImage;

  const isbn = book.isbn;


  return (
    <>
      <div className="w-64 py-5 mx-auto flex items-center justify-center">
        <a
          className="block"
          href={book.title}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src={getBookCoverURL(isbn, fallbackImageUrl)}
            alt={`Book Cover of ${book.title}`}
            className="max-w-full h-64 object-contain"
          />
          {book.isbn}
        </a>
      </div>
    </>
  );
}
