import { H1 } from "../components/headers";
import Tag from "../components/tag";

interface ExperienceProps {
  date: string;
  link?: string;
  tags: string[];
  title: string;
  company: string;
  description: string;
}

const EXPERIENCES: ExperienceProps[] = [
  {
    date: "May 31, 2022",
    title: "Software Engineer Intern",
    company: "Google",
    tags: ["C++", "SQL", "Python", "Causal Inference"],
    description:
      "I worked on Google's Conversion Lift team which is responsible for running A/B tests. I worked on a project to test for bias in our causal inference pipeline by designing, implementing, and analysing A/A test results. My project identified and fixed a major bug, significantly improving A/B test accuracy and reliability.",
  },
  {
    date: "November 31, 2021",
    link: "https://www.lyvli.io",
    title: "Co-Founder",
    company: "Lyvli",
    tags: ["React", "Django", "Heroku", "HubSpot"],
    description:
      "Lyvli provides scheduling, video calls, payments, and reviews for influencers to host live 1:1 coaching.",
  },
  {
    date: "September 1, 2021",
    title: "Investment Analyst",
    company: "Elevation Capital",
    tags: ["Crunchbase", "PitchBook", "Python", "Excel"],
    description:
      "Explored the world of tech startups and venture capital. Performed due diligence on potential investments. Formed in depth investment thesis on the crypto and natural language processing verticals.",
  },
  {
    date: "June 1, 2021",
    title: "Machine Learning Intern",
    company: "Apple",
    tags: ["Python", "PyTorch", "Computer Vision"],
    description:
      "I built a computer vision pipeline for multi-view object detection using YOLO models combined with embedding and clustering algorithms.",
  },
  {
    date: "May 4, 2020",
    title: "Software Engineer Intern",
    company: "Microsoft",
    tags: ["C#", "Cloud", "Web Development"],
    description:
      "I worked on the Azure Service Fabric team and built APIs to enable cluster upgrades while preventing cluster corruption.",
  },
];

function Experience({
  date,
  link = "#",
  title,
  company,
  tags,
  description,
}: ExperienceProps) {
  return (
    <div className="flex">
      <p className="w-48 text-sm text-zinc-400">{date}</p>
      <a className="group relative flex flex-1 flex-col" href={link}>
        <div className="absolute -inset-6 z-0 scale-95 rounded-2xl bg-zinc-50 opacity-0 transition duration-200 group-hover:scale-100 group-hover:opacity-100" />
        <p className="z-10 mb-2 text-sm font-medium text-zinc-500">{title}</p>
        <p className="z-10 mb-3 font-medium">{company}</p>
        <div className="mb-4 flex flex-wrap justify-start">
          {tags.map((tag) => (
            <Tag className="z-10 mr-2 mb-2" key={tag}>
              {tag}
            </Tag>
          ))}
        </div>
        <p className="z-10 text-sm font-light leading-loose text-zinc-600">
          {description}
        </p>
      </a>
    </div>
  );
}

export default function Work() {
  return (
    <div className="space-y-16">
      <div className="max-w-2xl space-y-6">
        <H1>Internships, part-time work, and startups.</H1>
        <p className="text-base font-light leading-loose text-zinc-600">
          I want to build extremely simple and intuitive products that solve
          real problems for real people. I believe that a product's design is as
          important as its functionality. I want to build products that require
          as little user input and supervision as possible. This is what drew me
          to AI.
        </p>
      </div>
      <div className="flex max-w-5xl flex-col space-y-24 border-l-2 border-zinc-100 pl-6">
        {EXPERIENCES.map((experience) => (
          <Experience key={experience.title} {...experience} />
        ))}
      </div>
    </div>
  );
}
