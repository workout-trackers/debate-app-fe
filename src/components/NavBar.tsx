import { useState } from 'react';
import styles from '@/styles/NavBar.module.css';
import { User } from '@/interfaces';

interface NavBarProps {
  user?: User;
}

export default function NavBar({ user }: NavBarProps) {
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
        <li className={styles.navbarListItem}>About</li>
        <li className={styles.navbarListItem}>All Boards</li>
        {user ? <li className={styles.navbarListItem}>Your Boards</li> : null}
      </ul>
    </nav>
  );
}
