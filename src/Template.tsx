import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Header from "./components/Header";
import { ContactForm } from "./components/ContactForm";

import booksdata from "./lib/books.json";
import About from "./pages/About";
import Essays from "./pages/Essays";
import Home from "./pages/Home";

interface Book {
  thumbnail: string;
  name: string;
  link: string;
}

const Template = () => {
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
      // Extract relevant book information
      const formattedBooks: Book[] = data.items.map((item: any) => ({
        thumbnail: item.volumeInfo.imageLinks?.thumbnail || "",
        name: item.volumeInfo.title,
        link: item.volumeInfo.previewLink,
      }));
      setBooks((prevBooks) => [...prevBooks, ...formattedBooks]); // Merge new books with existing ones
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Assuming each object in your local JSON data has a 'title' property
    const bookTitles = booksdata.map((book: any) => book.title);
    // Query book data for each title
    bookTitles.forEach((title) => queryBooks(title));
  }, []);

  return (
    <div className="max-w-7xl mx-auto bg-white">
          <Router>
      <div className="max-w-7xl mx-auto bg-white">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About publishedbooks={books} />} />
          <Route path="/essays" element={<Essays />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
};

export default Template;
