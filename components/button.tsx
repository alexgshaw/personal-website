import { joinClassNames } from "../lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={joinClassNames(
        className,
        "flex cursor-pointer justify-center rounded-md bg-teal-500 py-2 px-4 text-white hover:bg-teal-600  focus:outline-none focus:ring-2 focus:ring-teal-300 active:bg-teal-700 disabled:cursor-default disabled:bg-teal-300"
      )}
      {...props}
    >
      {children}
    </button>
  );
}
