import { useState } from 'react';
import styles from '@/styles/NavBar.module.css';
import { User } from '@/interfaces';

interface NavBarProps {
  user: User;
}

export default function NavBar({ user }: NavBarProps) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav>
      <button
        className={styles.navbarButton}
        onClick={() => (navOpen ? setNavOpen(false) : setNavOpen(true))}
      >
        <div className={styles.lineOne}></div>
        <div className={styles.lineTwo}></div>
        <div className={styles.lineThree}></div>
      </button>
      <ul className={`${styles.navbarList} ${navOpen ? styles.navOpen : null}`}>
        <li className={styles.navbarListItem}>About</li>
        <li className={styles.navbarListItem}>All Boards</li>
        {user ? <li className={styles.navbarListItem}>Your Boards</li> : null}
      </ul>
    </nav>
  );
}
