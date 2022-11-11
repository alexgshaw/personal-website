import Image from "next/image";
import { joinClassNames } from "../lib/utils";

interface ImageCircleProps {
  className?: string;
  src: string;
  alt: string;
}

export default function ImageCircle({
  className,
  src,
  alt,
}: ImageCircleProps): JSX.Element {
  return (
    <>
      <div
        className={joinClassNames(
          className,
          "rounded-full p-4 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5"
        )}
      >
        <div className="relative h-10 w-10">
          <Image src={src} fill alt={alt} objectFit="contain" />
        </div>
      </div>
    </>
  );
}
