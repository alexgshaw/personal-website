import { ReactElement, ReactNode } from "react";
import { joinClassNames } from "../lib/utils";

export function H1({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1 className={joinClassNames(className, "text-5xl font-bold")}>
      {children}
    </h1>
  );
}

export function H2({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <h2 className={joinClassNames(className, "text-4xl font-bold")}>
      {children}
    </h2>
  );
}

export function H3({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <h3 className={joinClassNames(className, "text-3xl font-bold")}>
      {children}
    </h3>
  );
}

export function H4({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <h4 className={joinClassNames(className, "text-xl font-medium")}>
      {children}
    </h4>
  );
}
