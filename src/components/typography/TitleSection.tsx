interface TitleSectionProps {
  title: string;
}
import pb from "../../assets/pb.png";

const TitleSection: React.FC<TitleSectionProps> = ({ title }) => {
  return (
    <h2 className="scroll-m-20 mt-12  p-4 text-center text-3xl font-[Fredoka] font-medium tracking-tight first:mt-0  w-full">
      {title}
      <img src={pb} alt="pb" className="mt-4 w-40 mx-auto" />
    </h2>
  );
};

export default TitleSection;
