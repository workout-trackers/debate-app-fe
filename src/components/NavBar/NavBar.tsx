import { useState } from 'react';
import Link from 'next/link';
import { useSelector } from '@/lib/redux';
import styles from './NavBar.module.css';

export default function NavBar() {
  const user = useSelector((state) => state.users[0]);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <button
        className={styles.navbarButton}
        onClick={() => (navOpen ? setNavOpen(false) : setNavOpen(true))}
      >
        <div
          className={`${styles.lineOne} ${navOpen ? styles.active : null}`}
        ></div>
        <div
          className={`${styles.lineTwo} ${navOpen ? styles.active : null}`}
        ></div>
        <div
          className={`${styles.lineThree} ${navOpen ? styles.active : null}`}
        ></div>
      </button>
      <ul
        className={`${styles.navbarList} ${
          navOpen ? styles.navbarListVisible : null
        }`}
      >
        <Link href="/about" className={styles.navbarListItem}>
          <li>About</li>
        </Link>
        <Link href="/boards" className={styles.navbarListItem}>
          <li>All Boards</li>
        </Link>
        {user ? (
          <Link href="/userboards" className={styles.navbarListItem}>
            <li>Your Boards</li>
          </Link>
        ) : null}
      </ul>
    </nav>
  );
}
