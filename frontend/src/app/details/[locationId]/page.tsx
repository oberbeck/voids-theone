import Link from 'next/link';
import Header from '../../components/header';
import Scaffold from '../../components/scaffold';

export default async function Details({
  params,
}: {
  params: { locationId: string };
}) {
  return (
    <>
      <Header />

      <Scaffold>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/procurement">Procurement</Link>
            </li>
            <li>
              <span className="inline-flex gap-2 items-center">
                {params.locationId}
              </span>
            </li>
          </ul>
        </div>

        <span>details: {params.locationId}</span>
      </Scaffold>
    </>
  );
}
