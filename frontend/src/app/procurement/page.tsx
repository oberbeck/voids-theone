import Link from 'next/link';
import Header from '../components/header';
import Scaffold from '../components/scaffold';
import { getList as getForecasts } from 'frontend/src/repositories/forecasts';

export default async function Procurement() {
  const list = await getForecasts(new Date()); // TODO make date dynamic

  return (
    <>
      <Header />
      <Scaffold>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Location</th>
                {/* <th>stock</th> */}
                <th>forecast</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {list.map((forecast) => (
                <tr>
                  <th></th>
                  <td>{forecast.location}</td>
                  <td>{forecast.forecasted_sales_quantity}</td>
                  <td>
                    <Link
                      className="btn "
                      href={`details/${forecast.location}`}
                    >
                      open
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Scaffold>
    </>
  );
}
