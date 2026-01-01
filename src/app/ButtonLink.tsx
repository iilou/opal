import { RainbowButton } from "@/components/ui/rainbow-button";
import { BorderBeam } from "@/components/ui/border-beam";

interface ButtonLinkProps {
  label: string;
  href: string;
}

export default function ButtonLink({ label, href }: ButtonLinkProps) {
  //   return <ShimmerButton background="#ffffff">{label}</ShimmerButton>;  bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-gray-100 font-semibold  shadow-md hover:from-purple-500 hover:via-pink-500 hover:to-red-500 transition-colors duration-150 ease-linear
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-2 rounded-lg inline-block relative bg-gray-100 hover:bg-gray-200/90 text-gray-700 hover:text-gray-900 font-semibold transition-all duration-150 ease-linear shadow-sm hover:shadow-md"
    >
      <BorderBeam
        duration={6}
        size={60}
        className="from-[#FF0080aa] via-[#7928CAaa] to-[#0070F3aa]"
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 20,
        }}
        borderWidth={2}
      />
      <BorderBeam
        duration={6}
        size={60}
        initialOffset={50}
        className="from-[#0070F3aa] via-[#38bdf8aa] to-[#FF0080aa]"
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 20,
        }}
        borderWidth={2}
      />

      {/* gradient: linear-gradient(135deg, #FF0080, #7928CA, #0070F3, #38bdf8, #FF0080) */}
      {label}
    </a>
  );
}
