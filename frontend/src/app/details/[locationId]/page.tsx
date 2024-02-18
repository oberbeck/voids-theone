import Link from 'next/link';
import Header from '../../components/header';
import Scaffold from '../../components/scaffold';
import { get as getWeather } from 'frontend/src/repositories/weather';

export default async function Details({
  params,
}: {
  params: { locationId: string };
}) {
  const weather = await getWeather(params.locationId, new Date()); // TODO make date dynamic

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

        <div>details: {params.locationId}</div>
        <div>temperature: {weather.temp}</div>
        <div>uvindex: {weather.uvindex}</div>
      </Scaffold>
    </>
  );
}
