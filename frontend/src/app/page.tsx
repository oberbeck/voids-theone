import styles from './page.module.scss';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}
