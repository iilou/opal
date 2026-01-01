"use client";

import Image from "next/image";
import { Roboto } from "next/font/google";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { AuroraText } from "@/components/ui/aurora-text";
import { MagicCard } from "@/components/ui/magic-card";
import { RetroGrid } from "@/components/ui/retro-grid";
import { BorderBeam } from "@/components/ui/border-beam";

import Section from "@/app/section";
import SectionHeader from "./SectionHeader";
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import ButtonLink from "./ButtonLink";
import TagSmall from "./TagSmall";
import Dock from "./Dock";

import { ExternalLink } from "lucide-react";
import { ShineBorder } from "@/components/ui/shine-border";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import SkillOrbital from "./SkillOrbital";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const skills: {
  name: string;
  icon: string;
  orbital: number;
  displayName: boolean;
}[] = [
  {
    name: "JavaScript",
    icon: "/skills/js.svg",
    orbital: 3,
    displayName: false,
  },
  {
    name: "TypeScript",
    icon: "/skills/ts.svg",
    orbital: 2,
    displayName: false,
  },
  {
    name: "Python",
    icon: "/skills/python.svg",
    orbital: 3,
    displayName: false,
  },
  { name: "C++", icon: "/skills/cpp.svg", orbital: 3, displayName: false },
  { name: "React", icon: "/skills/react.svg", orbital: 2, displayName: false },
  {
    name: "Next.js",
    icon: "/skills/nextjs.svg",
    orbital: 1,
    displayName: false,
  },
  {
    name: "Tailwind CSS",
    icon: "/skills/tailwind.svg",
    orbital: 2,
    displayName: false,
  },
  { name: "Golang", icon: "/skills/go.svg", orbital: 2, displayName: false },
  {
    name: "Docker",
    icon: "/skills/docker.svg",
    orbital: 2,
    displayName: false,
  },
  {
    name: "Kubernetes",
    icon: "/skills/kubernetes.svg",
    orbital: 1,
    displayName: false,
  },
  {
    name: "PostgreSQL",
    icon: "/skills/postgresql.svg",
    orbital: 2,
    displayName: false,
  },
  { name: "C#", icon: "/skills/csharp.svg", orbital: 2, displayName: false },
  { name: "C", icon: "/skills/c.svg", orbital: 1, displayName: false },
  {
    name: "ASP.NET",
    icon: "/skills/dotnet.svg",
    orbital: 1,
    displayName: false,
  },
  { name: "git", icon: "/skills/git.svg", orbital: 2, displayName: false },
  {
    name: "Kotlin",
    icon: "/skills/kotlin.svg",
    orbital: 1,
    displayName: false,
  },
  { name: "Flask", icon: "/skills/flask.svg", orbital: 1, displayName: false },
  { name: "Java", icon: "/skills/java.svg", orbital: 1, displayName: false },
];

const projects: {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  github: string;
  formality: "in progress" | "complete/live" | "low-scope" | "unfinished";
}[] = [
  {
    title: "star.stylla.moe",
    description:
      "Fullstack web application for Honkai: Star Rail. Displays player profiles, ranks player builds, and indexes game data for easy access.",
    image: "srr.png",
    link: "https://star.stylla.moe",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Python",
      "API Development",
    ],
    github: "https://github.com/iilou/starrailproject_fe",
    formality: "complete/live",
  },
  {
    title: "Tetr.AI - Personal Project",
    description:
      "Tetr.AI is a Tetris AI  using a Genetic Learning Algorithm Model that learns how to play competitive Tetris using vanilla C++ to design the AI Model and the evaluation function and the SDL2 C library for the UI.\nThis model uses a heuristic approach to judge the most optimal destination of a tetris piece given a list of the bot’s future tetris pieces and a specific board state, and is able to process up to four unique upcoming pieces at once",
    github: "https://github.com/iilou/tetr.ai",
    link: "https://github.com/iilou/tetr.ai/releases/tag/v1.0.0",
    image: "tetrai.png",
    tags: ["C++", "SDL2", "Genetic Algorithm", "AI"],
    formality: "complete/live",
  },
  {
    title: "UI/UX course portfolio site",
    description:
      "A portfolio website showcasing various UI/UX design projects completed during a comprehensive UI/UX design course.",
    image: "uiuxportfolio.png",
    link: "https://portfolio-2-six-phi.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Figma", "UI/UX Design"],
    github: "https://github.com/iilou/portfolio_2",
    formality: "complete/live",
  },
  {
    title: "DSA visualizer",
    description:
      "A website that visualizes various data structures and algorithms.",
    image: "dsa_vis.png",
    link: "https://github.com/iilou/dsa_vis",
    tags: ["React", "JavaScript", "CSS", "Data Structures & Algorithms"],
    github: "https://github.com/iilou/dsa_vis",
    formality: "low-scope",
  },
  {
    title: "AFL-site",
    description: "WebGl + Three.js based website to showcase a school project.",
    image: "afl_site.png",
    link: "https://afl-site.vercel.app/",
    tags: ["Three.js", "WebGL", "React", "JavaScript", "CSS"],
    github: "https://github.com/iilou/afl_site",
    formality: "low-scope",
  },
];

const work_experiences: {
  employer: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
}[] = [
  {
    employer: "Fisheries and Oceans Canada (DFO)",
    position: "Software Engineering Student",
    duration: "August 2025 - December 2025",
    location: "Ottawa, ON",
    description: [
      "Engineered a dual-interface Grants and Contributions Management System with C# ASP.NET MVC, providing a secure public portal for applicants and an internal dashboard that streamlined administrative workflows.",
      "Collaborated within an Agile Scrum team to modernize deployment pipelines; utilized Azure DevOps for CI/CD, managed source code with Git, and supported containerized application deployment via Kubernetes.",
      "Leveraged Entity Framework to design and implement a structured data architecture, facilitating the migration of manual grant tracking into a centralized, relational database system.",
    ],
  },
  {
    employer: "Fisheries and Oceans Canada (DFO)",
    position: "Data Analyst Student",
    duration: "January 2025 - May 2025",
    location: "Ottawa, ON",
    description: [
      "Migrated large quantities of data across systems, ensuring data integrity, consistency, and compliance with standards.",
      "Collaborated with cross-departmental teams to address technical challenges in data management and system integration.",
      "Utilized Azure DevOps for Agile project management, version control, and efficient team coordination, ensuring timely completion of data migration tasks.",
    ],
  },
];

export default function Home() {
  return (
    <div
      className={` min-h-screen flex flex-col items-center ${roboto.variable} font-sans w-full gap-4 overflow-hidden`}
    >
      <div className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden">
        <RetroGrid opacity={0.8} />
      </div>
      <div className="bg-[#ffffff] w-full h-12 relative z-10"></div>
      <div className="w-full px-8 flex flex-col items-center bg-transparent gap-4 relative z-10 mb-52">
        <Section>
          <SectionHeader>
            <SectionTitle>
              Hi, I'm <AuroraText>Marvin Li</AuroraText>
            </SectionTitle>
            <SectionSubtitle>
              Software Eng. Student @ uOttawa | ML/AI Enthusiast | Full-Stack
            </SectionSubtitle>
          </SectionHeader>
          <div className="w-52 h-52 relative rounded-full overflow-hidden border-4 border-[#d4d4d4]">
            <Image
              src="/IMG_3059.jpg"
              alt="Profile Picture"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-row gap-3">
            <ButtonLink label="GitHub" href="https://github.com/iilou" />
            <ButtonLink
              label="LinkedIn"
              href="https://www.linkedin.com/in/marvin-li-08953b298/"
            />
            <ButtonLink label="Resume" href="/resume_cv.pdf" />
          </div>
        </Section>
        <div className="w-72 h-72 relative flex justify-center items-center">
          <SkillOrbital
            radius={120}
            duration={10}
            skillList={skills.filter((e) => e.orbital == 1)}
            bgColor={"#fafafacc"}
          />
          <SkillOrbital
            radius={75}
            duration={5}
            skillList={skills.filter((e) => e.orbital == 2)}
            bgColor={"#fafafacc"}
          />
          <SkillOrbital
            radius={30}
            duration={3}
            skillList={skills.filter((e) => e.orbital == 3)}
            bgColor={"#fafafacc"}
          />
        </div>
        <Section>
          <SectionHeader>
            <SectionTitle>Experience</SectionTitle>
            <SectionSubtitle>
              A few roles I've held in the past.
            </SectionSubtitle>
          </SectionHeader>
          <div className="w-[90%] w-max-[800px] flex flex-col px-6 py-6 rounded-md bg-[#fafafacf] shadow-sm relative">
            <ShineBorder
              duration={8}
              shineColor={[
                "#ff0080aa",
                "#7928caaa",
                "#0070f3aa",
                "#38bdf8aa",
                "#ff0080aa",
              ]}
              borderWidth={1}
            />
            {work_experiences.map((item, index) => (
              <div key={index} className="flex flex-col w-full">
                <div className="flex flex-row justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.position}
                  </h3>
                  <span className="text-sm font-semibold text-gray-600">
                    {item.duration}
                  </span>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <h5 className="text-sm font-medium text-gray-600">
                    {item.employer}
                  </h5>
                  <span className="text-sm font-light text-gray-600">
                    {item.location}
                  </span>
                </div>
                <ul className="list-disc list-inside text-gray-500 ml-2 mt-2">
                  {item.description.map((desc, di) => (
                    <li key={di} className="text-sm font-light">
                      {desc}
                    </li>
                  ))}
                </ul>
                {index < work_experiences.length - 1 && (
                  <div className="w-full h-px bg-gray-300 mt-6 mb-4"></div>
                )}
              </div>
            ))}
          </div>
        </Section>
        <Section>
          <SectionHeader>
            <SectionTitle>Projects</SectionTitle>
            <SectionSubtitle>
              Some of my random personal projects that are a bit more on the
              complete side.
            </SectionSubtitle>
          </SectionHeader>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <MagicCard
                key={index}
                className=" rounded-lg px-6 py-6 flex flex-col"
                gradientSize={400}
                gradientColor="#d9d9d955"
              >
                <h3 className="text-2xl font-semibold text-[#2e2e2e] flex gap-2 items-center">
                  <div
                    className="w-4 h-4 rounded-full shrink-0"
                    style={{
                      backgroundColor:
                        project.formality === "complete/live"
                          ? "#34D399"
                          : project.formality === "in progress"
                          ? "#FBBF24"
                          : project.formality === "low-scope"
                          ? "#60A5FA"
                          : "#F87171",
                    }}
                  ></div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="hover:underline ">{project.title}</span>
                  </a>
                </h3>
                <div className="flex gap-2 ml-2 mt-1">
                  {project.link !== "" && (
                    <a
                      className="font-base px-4 py-0.5 text-xs relative text-gray-500 hover:text-gray-800 bg-gray-200/70 hover:bg-gray-300/70 rounded-xs transition-all ease-linear duration-150"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                  )}
                  {project.github !== "" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-base px-4 py-0.5 text-xs relative text-gray-500 hover:text-gray-800 bg-gray-200/70 hover:bg-gray-300/70 rounded-xs transition-all ease-linear duration-150"
                    >
                      GitHub
                    </a>
                  )}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`/${project.image}`}
                    alt={`${project.title} screenshot`}
                    className="w-full object-cover rounded-md mt-4 hover:shadow-[0_0_3px_0_#000000a3] brightness-75"
                  />
                </a>
                <p className="text-[#4a4a4a] mt-4 font-light whitespace-pre-line text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, ti) => (
                    <TagSmall key={ti}>{tag}</TagSmall>
                  ))}
                </div>
              </MagicCard>
            ))}
          </div>
        </Section>
      </div>
      <div className="fixed bottom-4 left-0 w-full flex justify-center items-center z-30">
        <Dock />
      </div>
    </div>
  );
}
