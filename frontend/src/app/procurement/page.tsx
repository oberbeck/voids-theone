import Link from 'next/link';
import Header from '../components/header';
import Scaffold from '../components/scaffold';

export default async function Procurement() {
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
                <th>stock</th>
                <th>forecast</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th></th>
                <td>Example location</td>
                <td>230 in stock</td>
                <td>120 in forecast</td>
                <td>
                  <Link className="btn " href="details/exampleLocation">
                    open
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Scaffold>
    </>
  );
}
