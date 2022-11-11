import { joinClassNames } from "../lib/utils";

export default function Tag({
  className,
  children,
}: {
  className?: string;
  children: string;
}) {
  return (
    <div
      className={joinClassNames(className, "rounded-full bg-teal-50 py-1 px-3")}
    >
      <p className="text-xs text-teal-500">{children}</p>
    </div>
  );
}
