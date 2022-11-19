import {
  BuildingStorefrontIcon,
  ComputerDesktopIcon,
  PaperAirplaneIcon,
  PresentationChartLineIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { FC } from "react";
import { H1 } from "../../components/headers";
import Tag from "../../components/tag";

interface ProjectProps {
  project: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  logo?: string;
  subtext: string;
  icon: FC<{ className: string }>;
}

const projects: ProjectProps[] = [
  {
    project: "Setracker",
    title: "Software Engineering Project",
    description:
      "It's a hassle to track your sets, weights, and reps at the gym. The apps that currently exist optimize for functionality rather than efficiency. I'm building an app that allows gym-goers to track their workouts as easily as possible.",
    tags: ["React Native", "Figma"],
    link: "/projects/setracker",
    subtext: "Read more →",
    icon: PresentationChartLineIcon,
  },
  {
    project: "Personal Website",
    title: "Software Engineering Project",
    description:
      "I built this website to showcase my experience, research, skills, thoughts, and hobbies. I used Next.js because I wanted to learn it. Needless to say I'm a big fan now. I use Tailwind CSS for the styling and probably my favorite part of building this is coming up with the design.",
    tags: ["Next.js", "Tailwind", "Figma"],
    link: "/",
    subtext: "Go to the homepage →",
    icon: ComputerDesktopIcon,
  },
  {
    project: "Cavi",
    title: "Machine Learning Project",
    description:
      "A common problem I see others run into when adding experiences to their resumes is deciding how to write impactful bullet points. Wouldn't it be nice if you could just write a paragraph describing your job and then have a robot generate the bullet points for you? Well, now you can. (The name is a play of AI + CV.)",
    tags: ["React", "GPT-3", "Recruiting"],
    subtext: "Read more →",
    link: "/projects/cavi",
    icon: PaperAirplaneIcon,
  },
  {
    project: "Lyvli",
    title: "Startup",
    description:
      "Lyvli is a platform where social media influencers can charge for live 1:1 coaching with their followers. The platform takes care of scheduling, payments, reminders, video, and reviews. It takes two minutes to sign up and you can start sharing the link on your social media accounts.",
    tags: ["React", "Django", "Hubspot", "Heroku"],
    link: "https://www.lyvli.io",
    subtext: "View the website →",
    icon: VideoCameraIcon,
  },
  {
    project: "EffortList",
    title: "Startup",
    description:
      "EffortList is a marketplace where brokers can sell owner's second hand items for commission. An owner simply has to upload photos of their second hand item. A broker can view all the items listed by owners and claim one to sell.",
    tags: ["React", "Django", "GraphQL"],
    subtext: "Detailed description coming soon...",
    icon: BuildingStorefrontIcon,
  },
];

function Project({
  project,
  title,
  description,
  tags,
  link = "#",
  subtext,
  icon: Icon,
}: ProjectProps) {
  return (
    <Link href={link} className="group">
      <div className="flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 ring-1 ring-zinc-900/5 transition duration-200 group-hover:ring-2">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-zinc-100 p-4">
              <Icon className="h-5 w-5 text-zinc-500" />
            </div>
            <div className="space-y-2">
              <p className="font-medium">{project}</p>
              <p className="z-10 mb-2 text-sm font-medium text-zinc-500">
                {title}
              </p>
            </div>
          </div>
          <p className="z-10 text-sm font-light leading-loose text-zinc-600">
            {description}
          </p>
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <Tag className="mr-2 mb-2" key={tag}>
                {tag}
              </Tag>
            ))}
          </div>
        </div>
        <p className="z-10 pt-2 text-sm text-teal-500">{subtext}</p>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <div className="space-y-10">
      <div className="space-y-6">
        <H1>Projects and startups.</H1>
        <p className="text-base font-light leading-loose text-zinc-600">
          I love building. I care a lot about the appearace and design of a
          product. Below are some of my favorites.
        </p>
      </div>
      <div className="grid gap-10 md:grid-cols-2 md:gap-6">
        {projects.map((project) => (
          <Project key={project.project} {...project} />
        ))}
      </div>
    </div>
  );
}
