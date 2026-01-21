import { BorderBeam } from "@/components/ui/border-beam";
import { ShineBorder } from "@/components/ui/shine-border";

interface TagSmallProps {
    children?: React.ReactNode;
}

export default function TagSmall({ children }: TagSmallProps) {
    return (
        <div className="bg-gray-100/90 px-2 py-1 rounded-md text-xs font-semibold text-gray-600 relative shadow-sm hover:shadow-md transition-shadow duration-50 ease-linear">
            {/* <BorderBeam
        duration={6}
        size={1000}
        // className="bg-[linear-gradient(135deg, #FF0080, #7928CA, #0070F3, #38bdf8, #FF0080)]"
        className="from-[#FF00807a] via-[#7928CA7a] to-[#0070F37a]"
      /> */}
            {/* <ShineBorder
        duration={8}
        shineColor={[
          "#ff00805a",
          "#7928ca5a",
          "#0070f35a",
          "#38bdf85a",
          "#ff00805a",
        ]}
        borderWidth={0.5}
      /> */}
            {children}
        </div>
    );
}
