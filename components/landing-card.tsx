import Image from "next/image";
import { H4 } from "./headers";

interface LandingCardProps {
  title: string;
  logo: string;
  description: string;
}

export default function LandingCard({
  logo,
  title,
  description,
}: LandingCardProps) {
  return (
    <div className="flex cursor-pointer flex-col items-start space-y-6 rounded-2xl p-6 ring-1 ring-zinc-100 hover:bg-zinc-50">
      <div className="rounded-full p-2 shadow-md ring-1 ring-zinc-100">
        <div className="relative h-8 w-8">
          <Image src={logo} fill alt={title} />
        </div>
      </div>
      <p className="text-lg font-medium">{title}</p>
      <p className="mt-6 text-base font-light leading-loose text-zinc-600">
        {description}
      </p>
    </div>
  );
}
