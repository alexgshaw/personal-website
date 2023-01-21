import Head from "next/head";
import { ReactNode } from "react";
import Navbar from "./navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Alex Shaw Personal Website</title>
        <meta name="description" content="A personal website for Alex Shaw." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex min-h-screen w-full flex-col items-center bg-zinc-50">
          <div className="w-full max-w-6xl flex-1 space-y-10 bg-white px-4 pt-6 ring-1 ring-zinc-100 sm:px-20">
            <Navbar />
            {children}
            <footer>
              <div className="-mx-4 h-px bg-zinc-900/5 sm:-mx-20" />
              <div className="flex flex-col items-center py-20 text-sm text-zinc-400 sm:flex-row sm:justify-between">
                <p>
                  © {new Date().getFullYear()} Alex Shaw. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </>
  );
}
