import { joinClassNames } from "../lib/utils";

interface InputProps {
  className?: string;
}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={joinClassNames(
        className,
        "w-full appearance-none rounded-md border border-zinc-300 px-3 py-2 placeholder-zinc-500 shadow-sm focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-50 sm:text-sm"
      )}
    />
  );
}
