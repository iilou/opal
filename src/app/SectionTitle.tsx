interface SectionHeaderProps {
  children?: React.ReactNode;
}

export default function SectionTitle({ children }: SectionHeaderProps) {
  return <h2 className="font-bold text-5xl text-[#3a3a3a]">{children}</h2>;
}
