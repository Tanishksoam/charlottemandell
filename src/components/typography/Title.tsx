interface TitleProps {
  title: string;
  background: string;
}

export function Title({ title, background }: TitleProps) {
  return (
    <div className="bg-cover bg-center p-20" style={{backgroundImage: `url(${background})`, backgroundBlendMode: "multiply" }}>
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-white text-center">
        {title}
      </h1>
    </div>
  );
}
