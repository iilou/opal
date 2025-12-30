import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

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
    image: "",
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
    image: "",
    tags: ["C++", "SDL2", "Genetic Algorithm", "AI"],
    formality: "complete/live",
  },
  {
    title: "UI/UX course portfolio site",
    description:
      "A portfolio website showcasing various UI/UX design projects completed during a comprehensive UI/UX design course.",
    image: "",
    link: "https://portfolio-2-six-phi.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Figma", "UI/UX Design"],
    github: "https://github.com/iilou/portfolio_2",
    formality: "complete/live",
  },
  {
    title: "DSA visualizer",
    description:
      "A website that visualizes various data structures and algorithms.",
    image: "",
    link: "https://github.com/iilou/dsa_vis",
    tags: ["React", "JavaScript", "CSS", "Data Structures & Algorithms"],
    github: "https://github.com/iilou/dsa_vis",
    formality: "low-scope",
  },
  {
    title: "AFL-site",
    description: "WebGl + Three.js based website to showcase a school project.",
    image: "",
    link: "https://afl-site.vercel.app/",
    tags: ["Three.js", "WebGL", "React", "JavaScript", "CSS"],
    github: "https://github.com/iilou/afl_site",
    formality: "low-scope",
  },
];

export default function Home() {
  return (
    <div
      className={`bg-[#f6f6f6] min-h-screen flex flex-col items-center ${roboto.variable} font-sans w-full gap-4`}
    >
      <div className="bg-[#ffffff] w-full h-12"></div>
      <div className="w-full px-4 flex flex-col items-center bg-transparent gap-4">
        <div className="w-full rounded-lg bg-[#ebebeb] px-12 py-16 flex flex-col items-center gap-8 shadow-lg">
          <div className="flex flex-col gap-1 items-center">
            <h2 className="font-bold text-5xl text-[#353535]">
              Hi, I'm Marvin
            </h2>
            <h4 className="font-normal text-xl text-[#414141]">
              Software Eng. Student @ uOttawa | ML/AI Enthusiast | Full-Stack
            </h4>
          </div>
          <div className="w-52 h-52 relative rounded-full overflow-hidden border-4 border-[#d4d4d4]">
            <Image
              src="/IMG_3059.jpg"
              alt="Profile Picture"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-row gap-4">
            {/* Social links */}
            {[
              { label: "GitHub", url: "https://github.com/iilou" },
              {
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/marvin-li-08953b298/",
              },
              { label: "Resume", url: "/resume_cv.pdf" },
            ].map((social) => (
              <a
                key={social.label}
                href={`${social.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2c2c2c] hover:text-[#000000] font-medium text-lg bg-emerald-300 px-4 py-1 rounded-md hover:bg-emerald-400 transition-all duration-350 hover:scale-105"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <div className="w-full rounded-lg bg-[#ebebeb] px-12 py-16 flex flex-col items-center gap-8 shadow-lg">
          <div className="flex flex-col gap-1 items-center">
            <h2 className="font-bold text-5xl text-[#3a3a3a]">Projects</h2>
            <h4 className="font-normal text-xl text-[#515151]">
              Some of my random personal projects that are a bit more on the
              complete side.
            </h4>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#f8f8f8] rounded-lg shadow-md px-6 py-4 flex flex-col gap-4 hover:shadow-xl"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-[#2e2e2e] flex gap-2">
                    <div
                      className="w-4 h-4 mt-2 rounded-full shrink-0"
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
                    {project.title}
                  </h3>
                  <div className="flex gap-6">
                    {project.link !== "" && (
                      <a
                        className="text-gray-500 text-base font-light"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link
                      </a>
                    )}
                    {project.github !== "" && (
                      <a
                        className="text-gray-500 text-base font-light"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                  <p className="text-[#4a4a4a] mt-2">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, ti) => (
                    <div
                      key={ti}
                      className="bg-amber-300 px-2 py-1 rounded-md text-sm text-[#2c2c2c]"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
