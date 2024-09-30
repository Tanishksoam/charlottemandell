interface TitleProps {
  title: string;
  description: string;
  background: string;
}

export function Title({ title, description, background }: TitleProps) {
  return (
    <div className="bg-cover bg-center py-32 grayscale rounded-xl text-white text-center" style={{backgroundImage: `url(${background})`, backgroundBlendMode: "multiply" }}>
      <h1 className="text-4xl font-bold tracking-[1.25px] font-[Fredoka] lg:text-5xl">
        {title}
      </h1>
      <h3 className="md:text-2xl mt-4 max-w-2xl font-[Fredoka] mx-auto opacity-75 px-4 md:px-0">{description}</h3>
    </div>
  );
}
