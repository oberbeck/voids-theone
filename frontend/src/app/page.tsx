import Link from 'next/link';
import Header from './components/header';
import Scaffold from './components/scaffold';
import styles from './page.module.scss';

export default async function Index() {
  return (
    <>
      <Header showHomeButton={false} />
      <div className="flex gap-4 justify-center align-middle flex-wrap">
        <div className="card w-96 bg-base-100 shadow-xl">
          {/* <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure> */}
          <div className="card-body">
            <h2 className="card-title">procurement!</h2>
            <p>All things procurement</p>
            <div className="card-actions justify-end">
              <Link href="procurement" className="btn btn-primary">
                go
              </Link>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          {/* <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure> */}
          <div className="card-body">
            <h2 className="card-title">staffing!</h2>
            <p>All things staffing</p>
            <div className="card-actions justify-end">
              <Link href="staffing" className="btn btn-primary">
                go
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
