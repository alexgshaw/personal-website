import Image from "next/image";
import { H1 } from "../components/headers";
import LandingCard from "../components/landing-card";

export default function Home() {
  return (
    <>
      <div className="w-full max-w-2xl space-y-10">
        <div className="relative h-20 w-20 overflow-hidden rounded-full">
          <Image src="/images/profile.jpg" fill alt="" />
        </div>
        <H1 className="text-zinc-800">
          Founder, investor, engineer, and scientist.
        </H1>
        <p className="mt-6 text-base font-light leading-loose text-zinc-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, esse,
          non aperiam laudantium dicta dolor ipsa exercitationem tempora
          explicabo minima eligendi ut distinctio expedita enim? Nobis facere
          repellat totam deleniti.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <LandingCard
          logo="/favicon.ico"
          title="Vercel"
          description="I worked at Vercel."
        />
        <LandingCard
          logo="/favicon.ico"
          title="Vercel"
          description="I worked at Vercel."
        />
      </div>
    </>
  );
}
