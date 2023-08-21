import Link from 'next/link';
import styles from '@/styles/Header.module.css';

export default function Header() {
  return (
    <Link href="/" className={styles.header}>
      <h1 className={styles.headerText}>0101010</h1>
    </Link>
  );
}
