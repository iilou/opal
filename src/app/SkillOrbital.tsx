import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { ShineBorder } from "@/components/ui/shine-border";

interface SkillOrbitalProps {
  skillList: { name: string; icon: string; displayName: boolean }[];
  radius: number;
  duration: number;
  bgColor: string;
}

export default function SkillOrbital({
  skillList,
  radius,
  duration,
  bgColor,
}: SkillOrbitalProps) {
  return (
    <OrbitingCircles radius={radius} duration={duration}>
      {skillList.map((skill, index) => (
        <div
          key={index}
          className={`w-10 h-10 rounded-full ease-linear duration-150 flex justify-center items-center shadow-md absolute flex-col text-[8px] gap-1 font-bold`}
          style={{ backgroundColor: bgColor }}
        >
          <ShineBorder
            duration={8}
            shineColor={["#ff0080", "#7928ca", "#0070f3", "#38bdf8", "#ff0080"]}
            borderWidth={1}
          />
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-6 h-6 object-contain"
          />
          {skill.displayName && <span>{skill.name}</span>}
        </div>
      ))}
    </OrbitingCircles>
  );
}
