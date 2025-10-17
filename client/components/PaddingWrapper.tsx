export default function PaddingWrapper({
  children,
}: { children: React.ReactNode }) {
  return <div className="px-6 max-w-7xl mx-auto">{children}</div>;
}