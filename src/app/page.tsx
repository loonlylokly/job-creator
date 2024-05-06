import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Cars Service Example App</h1>
      <nav>
        <Link href="/job-creator">List</Link>
      </nav>
    </main>
  );
}
