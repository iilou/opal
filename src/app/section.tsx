interface SectionProps {
  children?: React.ReactNode;
}

export default function Section({ children }: SectionProps) {
  return (
    <section className="w-full rounded-lg bg-[#f2f2f2aa] px-12 py-16 flex flex-col items-center gap-8 shadow-md">
      {children}
    </section>
  );
}
