import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { joinClassNames } from "../lib/utils";

interface NavbarItem {
  name: string;
  href: string;
}

const NAVBAR_ITEMS: NavbarItem[] = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Research", href: "/research" },
  // { name: "Projects", href: "/projects" },
  // { name: "Thoughts", href: "/thoughts" },
];

export default function Navbar(): ReactElement {
  const router = useRouter();
  return (
    <div className="sticky top-6 z-20 flex justify-center">
      <div className="flex rounded-full bg-white px-4 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5">
        {NAVBAR_ITEMS.map((item) => (
          <Link href={item.href} key={item.name}>
            <div
              className={joinClassNames(
                "px-4 py-3 text-sm transition duration-200 hover:text-teal-500",
                router.pathname == item.href ? "text-teal-500" : "text-zinc-800"
              )}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
