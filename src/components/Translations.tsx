import { publications } from "@/lib/books";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Translations = () => {
  return (
    <section className="container mx-auto py-12 px-4 md:px-6">
      <Carousel className="w-full">
        <CarouselContent>
          {publications.translations.map((translation, index: number) => (
            <CarouselItem
              className="md:basis-1/2 lg:basis-1/3 parent"
              key={translation.title || index}
            >
              <div className="bg-white rounded-md container shadow">
                <div className="p-6">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <strong>Author:</strong>
                      {translation.author}
                    </p>
                    <h3 className="text-lg font-medium min-h-16" title={translation.title}>
                      {translation.title.length > 25
                        ? `${translation.title.substring(0, 22)}...`
                        : translation.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <strong>Publisher:</strong>
                      Acme Publishing
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <strong>Publication Date:</strong>
                      May 2023
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <strong>Pages:</strong>
                      250
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 w-full mt-6"> 
        <CarouselPrevious />
        <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
};

export default Translations;
