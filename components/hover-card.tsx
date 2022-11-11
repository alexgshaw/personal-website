import { joinClassNames } from "../lib/utils";

interface HoverCardProps {
  as: React.ElementType;
  className?: string;
  children: React.ReactNode;
  [x: string]: any;
}
export default function HoverCard({
  as: Component = "a",
  children,
  className,
  ...props
}: HoverCardProps) {
  return (
    <Component className="group relative flex" {...props}>
      <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 rounded-2xl bg-zinc-50 opacity-0 transition duration-200 group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6" />
      <div className={className}>{children}</div>
    </Component>
  );
}
