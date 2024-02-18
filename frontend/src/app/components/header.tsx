import Link from 'next/link';

export default function Header({
  showHomeButton,
}: {
  showHomeButton?: boolean;
}) {
  return (
    <div className="navbar bg-base-100 gap-2">
      <div className="flex-none text-4xl">🕶️</div>
      <div className="flex-1">ONEGLASS.io</div>
      <div className="flex-none flex gap-2">
        {showHomeButton !== false && (
          <Link href="/" className="btn">
            home
          </Link>
        )}
      </div>
    </div>
  );
}
