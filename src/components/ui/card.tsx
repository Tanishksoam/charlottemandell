import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

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

interface CardsProps {
  book: Book;
}

export function Cards({ book }: CardsProps) {

  return (
    <>
      <div className="w-64 py-5 mx-auto flex items-center justify-center">
        <div className="block" rel="noopener noreferrer">
          <img
              alt={`Book Cover of ${book.title}`}
              className="mx-auto aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-lg object-cover shadow-lg"
              src="/placeholder.svg"
            />
      <Drawer>
        <DrawerTrigger asChild>
          <div className="py-4 text-center text-xl text-blue-600 hover:underline cursor-pointer">{book.title}</div>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-2xl py-6">
            <div className="flex flex-col md:flex-row">
            <img
              alt={`Book Cover of ${book.title}`}
              className="mx-auto aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-lg object-cover shadow-lg"
              src="/placeholder.svg"
            />
              <DrawerHeader>
                <DrawerTitle>{book.title}</DrawerTitle>
                <DrawerDescription>
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                      {book?.title}
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                      <strong>Written by: </strong>
                      {book?.author}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      <strong>Published by: </strong>
                      {book?.publisher}
                    </p>
                    <Badge variant="secondary">{book.status}</Badge>
                  </div>
                  <a href={`${book?.link}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline dark:text-neutral-50">
                <Button variant="outline">View on Amazon</Button>
              </a>
                </DrawerDescription>
              </DrawerHeader>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
      </div>
      </div>
    </>
  );
}
