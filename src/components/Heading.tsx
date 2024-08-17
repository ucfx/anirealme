export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="relative text-2xl font-bold text-foreground mb-6 px-4 w-fit
        after:content-[''] after:absolute after:w-1 after:h-full after:top-0 after:left-0 after:bg-foreground after:rounded"
    >
      {children}
    </h2>
  );
}
