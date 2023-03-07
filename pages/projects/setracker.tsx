import { H1, H4 } from "../../components/headers";
import Image from "next/image";

function Section({ children }: { children: React.ReactNode }) {
  return <div className="space-y-6">{children}</div>;
}

export default function Setracker() {
  return (
    <div className="mx-auto w-full max-w-xl space-y-16">
      <section className="space-y-10">
        <H1>Power Up.</H1>
        <div className="space-y-10 text-base font-light leading-loose text-zinc-600">
          <Section>
            <H4 className="text-black">Problem</H4>
            <p>
              Current fitness apps optimize for functionality over efficiency.
              Although it is nice to have a feature-rich application, I find
              that the complexity essentially compromises the usefulness of the
              app. When I am at the gym working out, the last thing I want to do
              is click 10+ times just to enter in the amount of weight I did on
              my last set.
            </p>
          </Section>
          <Section>
            <H4 className="text-black">Solution</H4>
            <p>
              I'm creating a fitness tracking app that allows gym-goers to
              easily accomplish the following tasks:
            </p>
            <ul className="list-inside list-disc">
              <li>Create workout plans</li>
              <li>Quickly start a workout session</li>
              <li>Enter sets, reps, and weight for each lift</li>
              <li>
                View previous weeks sets, reps, weights during current session
              </li>
              <li>View progress over time</li>
            </ul>
            <p>
              To accomplish this, I'm designing the following user experience.
            </p>
            <div className="space-y-2">
              <div className="relative h-96 overflow-hidden rounded-3xl ring-1 ring-zinc-100">
                <Image
                  src="/images/setracker-home.png"
                  fill
                  alt="setracker-home"
                  className="object-cover"
                />
              </div>
              <p className="text-right text-xs font-normal text-zinc-400">
                Home screen
              </p>
            </div>
            <div className="space-y-2">
              <div className="relative h-96 overflow-hidden rounded-3xl ring-1 ring-zinc-100">
                <Image
                  src="/images/setracker-workout.png"
                  fill
                  alt="setracker-workout"
                  className="object-cover"
                />
              </div>
              <p className="text-right text-xs font-normal text-zinc-400">
                Workout session
              </p>
            </div>
            <p>
              Currently, I have a working prototype in using React Native and
              Supabase. I'm hoping to start beta testing it next week. Once I've
              iterated on it a few times, I'll deploy it to the app store.
            </p>
          </Section>
        </div>
      </section>
    </div>
  );
}
