import Link from "next/link";
import { ReactElement } from "react";

interface NavbarItem {
  name: string;
  href: string;
}

const NAVBAR_ITEMS: NavbarItem[] = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Research", href: "/research" },
  { name: "Projects", href: "/projects" },
  { name: "Thoughts", href: "/thoughts" },
];

export default function Navbar(): ReactElement {
  return (
    <div className="flex justify-center">
      <div className="flex rounded-full px-4 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5">
        {NAVBAR_ITEMS.map((item) => (
          <Link href={item.href}>
            <div className="px-4 py-3 text-sm text-zinc-800 transition duration-200 hover:text-teal-500">
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
