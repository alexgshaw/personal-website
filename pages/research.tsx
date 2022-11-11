import { H1, H3 } from "../components/headers";
import HoverCard from "../components/hover-card";
import Tag from "../components/tag";
import { joinClassNames } from "../lib/utils";

const PAPERS = [
  {
    title:
      "An Information-theoretic Approach to Prompt Engineering Without Ground Truth Labels",
    date: "March 21, 2022",
    authors: [
      "Taylor Sorensen",
      "Joshua Robinson",
      "Christopher Michael Rytting",
      "Alexander Glenn Shaw",
      "Kyle Jeffrey Rogers",
      "Alexia Pauline Delorey",
      "Mahmoud Khalil",
      "Nancy Fulda",
      "David Wingate",
    ],
    tags: ["NLP", "Prompt Engineering", "Information Theory"],
    conference: "ACL 2022",
    link: "https://arxiv.org/abs/2203.11364",
  },
  {
    title:
      "Automated Identification of Characteristic Droplet Size Distributions in Stratocumulus Clouds Utilizing a Data Clustering Algorithm",
    date: "August 22, 2022",
    authors: [
      "Nithin Allwayin",
      "Michael L. Larsen",
      "Alexander G. Shaw",
      "Raymond A. Shaw",
    ],
    tags: ["Machine Learning", "Atmospheric Physics"],
    conference: "Artificial Intelligence for the Earth Systems",
    link: "https://journals.ametsoc.org/view/journals/aies/1/3/AIES-D-22-0003.1.xml",
  },
  {
    title:
      "Spin dynamics and a nearly continuous magnetic phase transition in an entropy-stabilized oxide antiferromagnet",
    date: "April 8, 2020",
    authors: [
      "Benjamin A. Frandsen",
      "K. Alec Petersen",
      "Nicolas A. Ducharme",
      "Alexander G. Shaw",
      "Ethan J. Gibson",
      "Barry Winn",
      "Jiaqiang Yan",
      "Junjie Zhang",
      "Michael E. Manley",
      "Raphaël P. Hermann",
    ],
    tags: ["Spin Dynamics", "Magnetic Phase Transition"],
    conference: "Physical Review Materials",
    link: "https://arxiv.org/abs/2004.04218",
  },
];

function Paper({
  title,
  date,
  authors,
  tags,
  conference,
  link,
}: {
  title: string;
  date: string;
  authors: string[];
  tags: string[];
  conference: string;
  link: string;
}) {
  return (
    <HoverCard
      className="flex flex-col space-y-4"
      href={link}
      target="_blank"
      as="a"
    >
      <div className="flex space-x-2">
        <div className="z-10 w-[2px] bg-zinc-400" />
        <p className="z-10 text-sm text-zinc-400">{date}</p>
      </div>
      <p className="z-10 text-base font-medium">{title}</p>
      <p className="z-10 text-sm font-light text-zinc-600">
        {authors.join(", ")}
      </p>
      <div className="flex flex-wrap justify-start">
        <Tag className="z-10 mr-2 mb-2">{conference}</Tag>
        {tags.map((tag) => (
          <Tag className="z-10 mr-2 mb-2" key={tag}>
            {tag}
          </Tag>
        ))}
      </div>
      <p className="z-10 pt-2 text-sm text-teal-500">Read paper &rarr;</p>
    </HoverCard>
  );
}

export default function Research() {
  return (
    <div className="mx-auto w-full max-w-xl space-y-16">
      <section className="space-y-6">
        <H1>Peer-reviewed publications.</H1>
        <div className="space-y-4">
          <p className="text-base font-light leading-loose text-zinc-600">
            I'm a master's student at Brigham Young University where I research
            NLP applications and interpretability. As an undergraduate student,
            I worked on research projects at the intersection of physics,
            machine learning, and data analysis.
          </p>
        </div>
      </section>
      <div className="space-y-16">
        {PAPERS.map((paper) => (
          <Paper {...paper} key={paper.title} />
        ))}
      </div>
    </div>
  );
}
