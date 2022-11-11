import HoverCard from "./hover-card";
import ImageCircle from "./image-circle";

interface EducationProps {
  title: string;
  subtitle: string;
  logo: string;
}

export default function Education({ logo, title, subtitle }: EducationProps) {
  return (
    <HoverCard
      as="a"
      className="flex flex-col justify-between space-y-6"
      href="#"
    >
      <p className="z-10 font-medium">Education</p>
      <div className="flex flex-1 flex-col items-start space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0">
        <ImageCircle src={logo} alt={title} className="z-10" />
        <div className="flex flex-col space-y-2">
          <p className="z-10 font-medium">{title}</p>
          <p className="z-10 text-sm  text-zinc-500">{subtitle}</p>
        </div>
      </div>
      <p className="z-10 pt-2 text-sm text-teal-500">
        See what I learned &rarr;
      </p>
    </HoverCard>
  );
}
