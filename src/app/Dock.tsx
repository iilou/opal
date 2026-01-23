import { Dock as DockComponent, DockIcon } from "@/components/ui/dock";
import { ShineBorder } from "@/components/ui/shine-border";

export default function Dock() {
    return (
        <DockComponent className="bg-[#f0f0f0]">
            <ShineBorder
                duration={8}
                shineColor={["#ff0080aa", "#7928caaa", "#0070f3aa", "#38bdf8aa", "#ff0080aa"]}
                borderWidth={1}
            />

            <DockIcon>
                <a href="https://github.com/iilou" target="_blank" rel="noopener noreferrer">
                    <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
                </a>
            </DockIcon>
            <DockIcon>
                <a href="https://www.linkedin.com/in/marvin-li-08953b298/" target="_blank" rel="noopener noreferrer">
                    <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
                </a>
            </DockIcon>
            <DockIcon>
                <a href="/resume_cv.pdf" target="_blank" rel="noopener noreferrer">
                    <img src="/resume.svg" alt="Resume/CV" className="w-6 h-6" />
                </a>
            </DockIcon>
        </DockComponent>
    );
}
