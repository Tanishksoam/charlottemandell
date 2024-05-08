import { useState, useEffect } from "react"

import { Cards } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import booksdata from "../lib/books.json";


interface Book {
  thumbnail: string;
  name: string;
  link: string;
}



const Collection = () => {

  const [books, setBooks] = useState<Book[]>([]);

  const queryBooks = async (title: string) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          title
        )}+inauthor:keyes&key=AIzaSyAqpwLr48kOc3CQ2RLav3crviNiGVqMVcU
        `
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      const formattedBooks: Book[] = data.items.map((item: any) => ({
        thumbnail: item.volumeInfo.imageLinks?.thumbnail || "",
        name: item.volumeInfo.title,
        link: item.volumeInfo.previewLink,
      }));
      setBooks((prevBooks) => [...prevBooks, ...formattedBooks]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const bookTitles = booksdata.map((book: any) => book.title);
    bookTitles.forEach((title) => queryBooks(title));
  }, []);



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
