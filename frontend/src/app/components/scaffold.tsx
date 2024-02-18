export default function Scaffold({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4">
      <div className="p-4 card w-full bg-base-100 shadow-xl">{children}</div>
    </div>
  );
}
