import Head from "next/head";
import { ReactElement } from "react";
import Navbar from "./navbar";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Head>
        <title>Alex Shaw Personal Website</title>
        <meta name="description" content="A personal website for Alex Shaw." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex min-h-screen w-full flex-col items-center bg-zinc-50">
          <div className="w-full max-w-6xl flex-1 space-y-10 bg-white px-20 pb-20 pt-6 ring-1 ring-zinc-100">
            <Navbar />
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
