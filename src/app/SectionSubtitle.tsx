interface SectionSubtitleProps {
  children?: React.ReactNode;
}

export default function SectionSubtitle({ children }: SectionSubtitleProps) {
  return <h4 className="font-light text-xl text-[#6f6f6f]">{children}</h4>;
}
