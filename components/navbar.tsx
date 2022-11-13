import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { joinClassNames } from "../lib/utils";
import { Menu } from "@headlessui/react";

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
    <div className="fixed inset-x-4 top-6 z-20 flex justify-end sm:sticky sm:justify-center">
      <div className="hidden rounded-full bg-white px-4 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 sm:flex">
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
      <Menu as="div" className="sm:hidden">
        <Menu.Button className="rounded-full bg-white p-4 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Menu.Button>
        <Menu.Items className="absolute inset-x-0 top-16 rounded-2xl bg-white shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5">
          {NAVBAR_ITEMS.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <Link href={item.href}>
                  <div
                    className={joinClassNames(
                      "px-4 py-3 text-sm transition duration-200 hover:text-teal-500",
                      active ? "bg-zinc-100" : "",
                      router.pathname == item.href
                        ? "text-teal-500"
                        : "text-zinc-800"
                    )}
                  >
                    {item.name}
                  </div>
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
}
