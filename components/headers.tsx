import { ReactElement } from "react";
import { joinClassNames } from "../lib/utils";

export function H1({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <h1
      className={joinClassNames(className, "font-bold text-5xl leading-snug")}
    >
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
    <h2 className={joinClassNames(className, "font-bold text-4xl")}>
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
    <h3 className={joinClassNames(className, "font-bold text-3xl")}>
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
    <h4 className={joinClassNames(className, "font-bold text-2xl")}>
      {children}
    </h4>
  );
}
