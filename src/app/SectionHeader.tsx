interface SectionHeaderProps {
  children?: React.ReactNode;
}

export default function SectionHeader({ children }: SectionHeaderProps) {
  return <div className="flex flex-col gap-1 items-center">{children}</div>;
}
