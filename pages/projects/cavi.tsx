import { H1, H4 } from "../../components/headers";
import Image from "next/image";

function Section({ children }: { children: React.ReactNode }) {
  return <div className="space-y-6">{children}</div>;
}

export default function Setracker() {
  return (
    <div className="mx-auto w-full max-w-xl space-y-16">
      <section className="space-y-10">
        <H1>Cavi.</H1>
        <div className="space-y-10 text-base font-light leading-loose text-zinc-600">
          <Section>
            <H4 className="text-black">Problem</H4>
            <p>
              You only have one page's worth of space to tell your story on a
              resume. You want to make your work and projects sound as impactful
              as possible. There are two aspects to a resume: content and style.
              Content is the actual substance of your resume, your experience.
              Style is how you present and communicate your content. Even if you
              have good content, if your style is not good, no one will
              recognize how great your content really is. In my experience, most
              students struggle with their resume style. They do not know how to
              phrase their bullet points to sound impactful.
            </p>
          </Section>
          <Section>
            <H4 className="text-black">Solution</H4>
            <p>
              I'm built a resume bullet point generator that allows students to
              describe a work experience and then automatically generate resume
              bullet points from their description using GPT-3 Instruct and
              few-shot prompting.
            </p>
            <p>The steps of generating are as follows.</p>
            <ol className="list-inside list-decimal">
              <li>Input your company and job title.</li>
              <li>Describe what you did at your job.</li>
              <li>Explain how you created impact.</li>
              <li>List any tools or technologies you used.</li>
              <li>List any important metrics that quantify your impact.</li>
              <li>Hit generate. This is where the magic happends.</li>
            </ol>
            <p>
              Below are screenshots of the app. I've had about 10 students use
              it (usually just kids who ask me to look at their resume). Cavi
              has generated over 150 bullet points for students. Students
              absolutely love it. Over the coming months I will start leading
              resume workshops for clubs on campus where I will introduce the
              students to Cavi.
            </p>
            <div className="space-y-2">
              <div className="overflow-hidden rounded-3xl ring-1 ring-indigo-100">
                <img
                  src="/images/cavi-form.png"
                  alt="cavi-form"
                  className="object-cover"
                />
              </div>
              <p className="text-right text-xs font-normal text-zinc-400">
                This is the form you fill out to generate bullet points.
              </p>
            </div>
            <div className="mx-auto w-80 space-y-2">
              <div className="space-y-4">
                <img
                  src="/images/cavi-bullet1.png"
                  alt="cavi-bullet1"
                  className="object-cover"
                />
                <img
                  src="/images/cavi-bullet2.png"
                  alt="cavi-bullet2"
                  className="object-cover"
                />
                <img
                  src="/images/cavi-bullet3.png"
                  alt="cavi-bullet3"
                  className="object-cover"
                />
              </div>
              <p className="text-right text-xs font-normal text-zinc-400">
                Various generated bullets.
              </p>
            </div>
            <p>
              I also designed a feedback system so I can collect data on the
              best/worst generated bullets. I can then fine-tune the model on
              the best bullets and increase the quality of the generated
              bullets. Additionally, I can train a resume bullet point
              classifier that can then evaluate uploaded resumes.
            </p>
            <div className="mx-auto w-80 space-y-2">
              <div className="space-y-4">
                <img
                  src="/images/cavi-bullet-feedback.png"
                  alt="cavi-bullet-feedback"
                  className="object-cover"
                />
              </div>
              <p className="text-right text-xs font-normal text-zinc-400">
                Giving feedback on a bullet point.
              </p>
            </div>
            <p>
              I plan on updating this article periodically as this project
              progresses.
            </p>
          </Section>
        </div>
      </section>
    </div>
  );
}
