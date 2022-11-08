// String or undefined
export function joinClassNames(...classNames: (string | undefined)[]) {
  return classNames.filter((className) => className).join(" ");
}
